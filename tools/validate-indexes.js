/*
Windows 96 Community repository tools.

Copyright (C) Windows 96 Team (windows96.net) 2021.
*/

const fs = require("fs");
const path = require("path");
const objectIdent = require('./lib/utils/object-ident');
const PATHS_TO_VALIDATE = ["public/main/Packages.json"];

// The package fields we must validate.
const PKG_OBJ_FIELDS_REQUIRED = [
    { property: "name", type: "regex-string", regex: /^[a-zA-Z0-9_-]*$/, min: 3, max: 40, optional: false },
    { property: "friendlyName", type: "string", min: 3, max: 40, optional: false },
    { property: "description", type: "string", min: 3, max: 256, optional: false },
    { property: "author", type: "string", min: 3, max: 200, optional: false },
    { property: "category", type: "string", min: 3, max: 30, optional: false },
    { property: "version", type: "number", optional: false },
    { property: "feature_requirements", type: "string-array", optional: false },
    { property: "min_os_version", type: "number", optional: false },
    { property: "max_os_version", type: "number", optional: false },
    { property: "depends", type: "string-array", optional: false },
    {
        property: "iconFiles", 
        type: "object",
        optional: false,
        fields: [
            { property: "32x32", type: "string", optional: false },
            { property: "16x16", type: "string", optional: false }
        ] 
    },
    { property: "packageRoot", type: "string", optional: false }
]

/**
 * Validates the fields of a package object.
 * @param {String} object The object to validate.
 * @param {any[]} definitions The definitions to validate against.
 * @param {String} friendlyName The friendly name to use for this object in case of an error.
 */
function validateFields(object, definitions, friendlyName = "<anonymous>") {
    if(!object)
        throw new Error("No object specified for field validation!");

    if((!definitions) || (!(definitions instanceof Array)))
        throw new Error("Invalid field definitions for validation!");

    const objectKeys = Reflect.ownKeys(object);

    // Step 1. Check if the required properties are present.
    for(let definition of definitions) {
        if(!!definition.optional) {
            if(!object[definition.property])
                throw new Error(`Missing property: ${definition.property} in object ${friendlyName}`);
        }
    }

    // Step 2. Validate the keys
    
    for(let key of objectKeys) {
        const definition = definitions.find(x => x.property == key);

        if(!definition)
            throw new Error(`Fatal - undefined field: ${key} in object ${friendlyName}`);
            
        switch(definition.type) {
            default:
                if(typeof object[key] !== definition.type)
                    throw new Error(`Key is not of type "${definition.type}" at ${friendlyName}.${key}`);

                switch(typeof object[key]) {
                    case "string":
                        if(definition.max && (object[key].length > definition.max))
                            throw new Error(`String > ${definition.max} at ${friendlyName}.${key}`);

                        if(definition.min && (object[key].length < definition.min))
                            throw new Error(`String > ${definition.min} at ${friendlyName}.${key}`);
                        break;
                }
                break;
            case "regex-string":
                if(!definition.regex.test(object[key]))
                    throw new Error(`Regex failure for ${definition.regex} at ${friendlyName}.${key}`);

                if(definition.max && (object[key].length > definition.max))
                    throw new Error(`String length > ${definition.max} at ${friendlyName}.${key}`);
                    
                if(definition.min && (object[key].length < definition.min))
                    throw new Error(`String length < ${definition.min} at ${friendlyName}.${key}`);

                break;
            case "object":
                validateFields(object[key], definition.fields, `${friendlyName}.${key}`);
                break;
            case "string-array":
                if(!objectIdent.isArrayOfType(object[key], "string"))
                    throw new Error(`Array is not of type "String[]" at ${friendlyName}.${key}`);
                else
                    continue;
        }
        
    }
}

/**
 * The main entry point.
 * @returns {Number} Exit code.
 */
async function main() {
    for(let path of PATHS_TO_VALIDATE) {
        try {
            console.log(`Validating JSON for ${path}`);
            
            const packages = JSON.parse(await fs.promises.readFile(path, {
                encoding: "utf-8"
            }));

            for(let pkIndex = 0; pkIndex < packages.length; pkIndex++) {
                const package = packages[pkIndex];

                if(typeof package !== 'object')
                    throw new Error(`Invalid type. Expected 'object' for package, got ${typeof package} instead at [${pkIndex}].`);

                if(!package.name)
                    throw new Error(`Package object at [${pkIndex}] does not have a name.`);
                
                console.log(`Validating Package [${package.name}]`);
                // Review the fields
                validateFields(package, PKG_OBJ_FIELDS_REQUIRED, `[${pkIndex}] (${package.name})`);
            }

            console.log("Reformatting JSON and saving...");

            await fs.promises.writeFile(path, JSON.stringify(packages, null, 4), {
                encoding: "utf-8"
            });
        } catch(e) {
            console.error(e);
            console.error("Validation failed, please review the error above.");
            return 1;
        }
    }

    console.log("Validation and reformatting complete - no errors were found.");
    return 0;
}

main().then(process.exit);