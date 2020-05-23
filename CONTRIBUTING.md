# Contributing to Island Prime Restaurant

This is an experimental, personal development, project for learning react with
redux etc.

This contributing guide details the rules I am using around my commit comments
and code commited.

⚠ _I do not have any intention of allowing others to contribute to this code
base, if you want to fiddle with it, feel free to fork it._

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Coding Rules](#coding-rules)
- [Commit Message Guidelines](#commit-message-guidelines)
  - [Commit Message Format](#commit-message-format)
  - [Revert](#revert)
  - [Type](#type)
  - [Scope](#scope)
  - [Subject](#subject)
  - [Body](#body)
  - [Footer](#footer)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as
you are working:

All features or bug fixes **must be tested** by one or more specs (unit-tests).
All public API methods **must be documented**. (Details TBC).
For the most part, we follow the AirBnb typescript convension/standard.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.
This leads to **more readable messages** that are easy to follow when looking
through the **project history**. But also, we use the git commit messages to
**generate the change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**.
The header has a special format that includes a **type**, a **scope** and a
**subject**:

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer than 100 characters!
This allows the message to be easier to read on GitHub as well as in various
git tools.

The footer should contain a closing reference to an issue if any.

Samples: ([even more samples](https://github.com/ShaneYu/react-island-prime-restaurant/commits/master)))

```text
docs(changelog): update changelog to beta.5
```

```text
fix(release): need to depend on latest xxx package

The version in our package.json gets copied to the one we publish, and users
need the latest of these.
```

### Revert

If the commit reverts a previous commit, it should begin with `revert:`,
followed by the header of the reverted commit. In the body it should say:
`This reverts commit <hash>.`, where the hash is the SHA of the commit being
reverted.

### Type

Must be one of the following:

- **build:** Changes that affect the build system or external dependencies
  (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes:
  Circle, BrowserStack, SauceLabs)
- **docs:** Documentation only changes
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- **test:** Adding missing tests or correcting existing tests

### Scope

There is no need to provide a scope, this is completely options, but we prefer
it to be left out.

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not
"changed" nor "changes". The body should include the motivation for the change
and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is
also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word _BREAKING CHANGE:_ with a
space or two newlines. The rest of the commit message is then used for this.
