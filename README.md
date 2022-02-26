# Windows 96 Community Packages Repository

This Git repository hosts all of the packages for distribution on the community packages repository on Windows 96.

To add your package, simply create a pull request that follows our guidelines (which can be found in CONTRIBUTING.md). Any package that do not follow these guidelines will be removed without question.

You may read below for the relevant instructions on how to add a package to the repository.

## Important notice

All packages are user submitted. Whilst we put our best effort to ensure that there is no prohibited content, you install them at your own risk - there is no warranty or responsibility from us whatsoever.

If you find an inappropriate package which does not follow our guidelines, please shoot us a message or an email (you can find our support email on sys36.net).

To avoid downloading the *entire* git history, its recommended to clone with `--depth=1`.

## Prerequisites

You need NodeJS installed to run the utilities in this repository.

To install it, go to https://nodejs.org

When this is done, simply run `npm install` in the git directory to install the relevant dependencies.

## Adding a package

To add a package, simply add a JSON object for your package in the `Packages.json` file with the relevant information. You must also then create a distribution directory to store your package files (you can find examples of how to do this from other package definitions). When all is done, use the `bin/validate-indexes` utility to format and validate the JSON properly.

If the validation is successful, you can then create a pull request to submit your patch to the repository. You can then expect your package to appear once the repository is updated locally on our server, which should be every day at 10 PM CEST.

## Becoming a mirror

Are you interested in becoming a mirror? Simply clone this repo and run the prerequisite steps above. Then, run the `bin/pkmsd` tool to start a local instance of the package server.

If your mirror meets our criteria for speed, reliability, and trust, we will recommend it as a valid mirror. Note that mirrors must be available 24/7 with minimal uptime with reasonable bandwidth, and must follow the same daily update schedule.

## Repository URL

If you wish to add this repository to your Windows 96 installation, add `https://packages.windows96.net/community` to your `sources.json` file.