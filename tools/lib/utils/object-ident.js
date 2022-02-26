/*
Windows 96 Community repository tools.

Copyright (C) Windows 96 Team (windows96.net) 2021.
*/

/**
 * Checks if an array is of type.
 * @param {Array} inArray The array to check for.
 * @param {*} type The type of the array to be expected.
 */
function isArrayOfType(inArray, type) {
    if(!(inArray instanceof Array))
        throw new Error("Input is not an array");

    if(!type)
        throw new Error("Type is not defined.");

    for(let i of inArray) {
        if(typeof i !== type)
            return false;
    }

    return true;
}

module.exports = {
    isArrayOfType
}