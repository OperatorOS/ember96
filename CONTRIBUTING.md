# Contributing Guidelines

Anyone can contribute a package to the Windows 96 community packages repository, provided that they follow ALL of the guidelines listed below.

Please review them carefully. We will not accept any "I didn't know" excuses, you are required to read this if you want any of your packages to be submitted.

Any package that breaks any of these guidelines at any point will be removed (which is at the moderators discretion).

## Guidelines

 - No copyrighted or illegal content may be provided. Abandonware is an exception, but please be careful. We will take down your package if we are informed to do so by any notice, or if we think its too risky.

 - No malware. This includes real malware and Windows 96 malware.

 - No NSFW/NSFL/18+ content whatsoever. If you have to ask yourself if its NSFW, it probably is, and isn't allowed.

 - Packages which are purely for political gain are not allowed.

 - Harassment, homophobia, racism, sexism, etc. is not allowed.

 - Fill out all package fields correctly when adding your package to the `Packages.json` file.

 - At least one authors specified in the `Packages.json` packages must be reachable in case of questions. The `authors` field in the package must be formatted like so: `Maintainer/Author 1 (email/handle)` or `Maintainer 1 (test@test.com) | Maintainer 2 (test.test.com) | ... etc` if multiple authors/maintainers are concerned.

 - Limit the number of external resources being used in your packages.

 - Packages should not exceed 50 megabytes in size (calculated based on the distribution ZIP, per version). We may make an exception depending on the application proposed.

 - Only keep old versions of package distribution ZIPs if the new version introduces drastic changes which could break compatibility.

 - Do not leave orphaned content folders in the distribution folder (e.g `content@1.0/`, `content@1.1/`, etc.). Only the distribution ZIPs may remain.

 - Add a `README.txt` file in the distribution folder if you want to provide additional information to the user when viewing the folder in the directory listing. Only basic HTML is allowed (bold, italics, etc.) and no images or external resources may be used by this file.

 - Ensure to beautify your code before submitting the package. There are many JS, CSS, HTML beautifiers out there that will do the job. This isn't a strict requirement, but it is preferred to maintain a level of quality.

 - Packages must be of reasonable quality. Iframe apps that link to an external origin without any sort of integration/interoperability with Windows 96 are not allowed.

 - All relevant formatting must be followed in your pull request. For example, if you format the Packages JSON incorrectly, please use the built in tools to fix it before submission. Anything that does not follow the format will be rejected. Additionally, directory structures must also be followed exactly (with the exception of adding an optional README.txt file to your package directory). You can check other packages for a guideline on how to do this.

 - Do not provide patches for `pkm-server` or anything not related to the packages here. Any changes that involve `pkm-server` source files modification will be rejected. Instead, you can provide patches to the `pkm-server` repository on our GitLab, which we will then promptly integrate instead. Generally, only concern yourself with `Packages.json` and the entire `public/main` folder to add your packages.

 - Do not attempt to break our servers, Windows 96, the community repository, or really anything by creating a submission.

 - Do not play with pull requests - we are independent human beings trying to bring you cool content and we can't do that if you waste our time.

 - The Golden Guideline: USE COMMON SENSE.

## Clarifications

 - "Illegal content" constitutes anything illegal under German Law, since this is where our server is hosted.

 - "public/main" is forwarded to "public/community" on the official packages server.

## The consequences

Failure to follow the guidelines will cause your packages to be removed. If this happens often enough or the severity is high enough, you will be permanently banned from submitting additional packages. In the worst case, you may even be site banned if the damage was exceptional or worse.