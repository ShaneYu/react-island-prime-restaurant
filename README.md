# Island Prime Restaurant

This is the code base for my personal development project for learning
React/Redux.

⚠ This is **not** and **will not** be distributed as a _"real"_ application.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Pre-requisites](#pre-requisites)
- [Getting Started](#getting-started)
  - [VSCode](#vscode)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run format`](#npm-run-format)
  - [`npm run lint`](#npm-run-lint)
  - [`npm run display-browser-support`](#npm-run-display-browser-support)
  - [`npm run validate`](#npm-run-validate)
  - [`npm run prepublish`](#npm-run-prepublish)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Pre-requisites

In order to build and run this project you will require the following...

- Git
- NodeJS (>= 8.10 minimum, >= 12.6 recommended)
- NPM (>= 5.2 minimum, >= 6.0 recommended)
- IDE (VSCode recommended)

## Getting Started

To get started, clone this repository and execute the command `npm ci` to
install all of the require dependencies.

It is recommended that you use VSCode, however you can use any IDE you desire;
if you use VSCode you will benefit from configured settings, debugging and
recommended extensions.

### VSCode

If you've decided to use VSCode as your IDE, it is highly recommended that you
install the workspace recommended extensions as these and the workspace settings
have been configured to aid with development but adding linting and automatic
formatting on save. This will help prevent accidental missing semi-colons or bad
indentation etc. Please note that it will **NOT** fix everything for you, but it
will highlight any and all problems for quicker feedback.

#### Debugging Application

_Coming soon..._

#### Debugging Tests

_Coming soon..._

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the
best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment)
for more information.

### `npm run format`

Performs all formatting/fixing scripts listed below over the entire project.

_You can do specifc formatting by running the scripts below._

#### `npm run format-doctoc`

Automatically generates the contents links at the top of markdown files, this
means we don't have to keep maintaining this manually when we add/remove or
restructure headings.

#### `npm run format-eslint`

Performs formatting/fixing of code through ES Lint rules over the entire
project.

#### `npm run format-imports`

Sort/organise imports in JS/JSX/TS/TSX to keep them ordered in a consistent way
without requiring developers to always get it perfectly right; this keeps it
consistent across the project.

#### `npm run format-package-json`

Re-orders all of the scripts listed in the package.json file to keep them
alphabetical.

#### `npm run format-prettier`

Performs formatting/fixing of code through Prettier rules over the entire
project.

### `npm run lint`

Performs all linting scripts listed below over the entire project.

_You can do specifc linting by running the scripts below._

#### `npm run lint-eslint`

Performs linting over the entire project using ES Lint rules.

#### `npm run lint-markdown`

Performs linting over all markdown files.

#### `npm run lint--watch`

Performs ALL linting scripts above in watch mode; any file changes will kick
off linting again.

### `npm run display-browser-support`

Outputs a list of browsers and devices that is supported by this project using
the browsers list settings.

_This is useful to determine what is supported given the settings we've chosen_
_for the browsers list._

### `npm run validate`

Performs some validation checks for package publishing.

This validation script will perform linting, testing and build a production
output.

### `npm run prepublish`

Performs a cleanup and re-build of a production output ready for npm package
publishing.

_This is an automatic script ran by npm when using the `npm publish` command._

## Contributing

To contribute to this project, please follow our
[contributing guidelines](CONTRIBUTING.md).

Please note that on every commit you make, automatic linting of code and commit
comments will be performed. This also includes running of all jest tests that
are affected by the changes staged.

As part of this automatic linting, it will attempt to auto format and fix some
of the basic issues like indentation, missing semi-colons etc, but it will not
fix everything.

Once that has been done, if there are any changes made as a result of the
automatic formatting, they will be staged and you will need to commit these.

Lastly, if there is any linting errors that cannot be fixed automatically, the
commit will fail and the log output will indicate the problems. You will need to
address these manually and then recommit.
