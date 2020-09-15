# Island Prime Restaurant

This is the code base for my personal development project for learning
React/Redux.

> ⚠ This is **not** and **will not** be distributed as a _"real"_ application. ⚠

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Pre-requisites](#pre-requisites)
- [Getting Started](#getting-started)
  - [Visual Studio Code](#visual-studio-code)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)
  - [`npm start:app`](#npm-startapp)
  - [`npm start:server`](#npm-startserver)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run format`](#npm-run-format)
  - [`npm run lint`](#npm-run-lint)
  - [`npm run display-browser-support`](#npm-run-display-browser-support)
  - [`npm run validate`](#npm-run-validate)
  - [`npm run prepublish`](#npm-run-prepublish)
- [Environment Variables](#environment-variables)
  - [Other .env files that can be used](#other-env-files-that-can-be-used)
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

It is recommended that you use [VSCode](https://code.visualstudio.com),
however you can use any IDE you desire;
if you use VSCode you will benefit from configured settings, debugging and
recommended extensions.

### Visual Studio Code

If you've decided to use VSCode as your IDE, it is highly recommended that you
install the workspace recommended extensions as these and the workspace settings
have been configured to aid with development but adding linting and automatic
formatting on save.

Automatic formating and linting will help prevent accidental missing semi-colons
or bad indentation etc.<br />
Please note that it will **NOT** fix everything for you, but it will highlight
any and all problems for quicker feedback.

#### Debugging Application

_Coming soon..._

#### Debugging Tests

_Coming soon..._

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Runs the backend server in the development mode.

_Essentially an alias that runs both the app and server in development mode._

### `npm start:app`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm start:server`

Runs the backend server in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to access the API in the browser.

The server will reload if you make edits.<br />
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

## Environment Variables

This project consumes several environment variables that declared in .env files.
<br />There is also a built in environment variable called NODE_ENV. When using
`npm start` or `npm run start:app` it is always equal to `development`, when
you run `npm test` it is always equal to `test` and when you run
`npm run build` to make a production bundle, it is always equal to
`production`.

**You cannot override `NODE_ENV` manually.\*** This prevents developers from
accidently devploying a slow development build to production.

### Other .env files that can be used

- `.env`: Default.
- `.env.local`: Local overrides.
  **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific
  settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`:
  Local overrides of environment-specific settings.

Files on the left have more priority that the files on the right:

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`,
  `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`,
  `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is
  missing)

You can expand/use variables already on your machine in the .env files.

For example, to get the environment variable `npm_package_version`:

```bash
EXAMPLE_VARIABLE=$npm_package_version
# also works:
# EXAMPLE_VARIABLE=${npm_package_version}
```

Or expand variables local to the current `.env` file:

```bash
DOMAIN=www.example.com
EXAMPLE_BLAH=$DOMAIN/blah
EXAMPLE_MEH=$DOMAIN/meh
```

## Contributing

To contribute to this project, please follow our
[contributing guidelines](CONTRIBUTING.md).

Please note that on every commit you make, automatic linting of code and commit
comments will be performed.<br />
This also includes running of all jest tests that are affected by the changes
staged.

As part of this automatic linting, it will attempt to auto format and fix some
of the basic issues like indentation, missing semi-colons etc, but it will not
fix everything.

Once that has been done, if there are any changes made as a result of the
automatic formatting, they will be staged and you will need to commit these.

Lastly, if there is any linting errors that cannot be fixed automatically, the
commit will fail and the log output will indicate the problems.<br />
You will need to address these manually and then recommit.
