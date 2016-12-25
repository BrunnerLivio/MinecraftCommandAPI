# Contributing

Thank you so much for contributing to MinecraftCommandAPI. 
Every help is appreciated!

## Creating an Issue

If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been reported. You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

Next, create a new issue that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.

## Creating a Pull Request

We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please create an issue that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/BrunnerLivio/MinecraftCommandAPI/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!

## Setup

1. Fork the repo.
1. Clone your fork.
1. Make a branch for your change.
1. Run npm install (make sure you have node and npm installed first)
1. Modifying Components

### Typescript Changes

#### Style Guide
We use the same styleguide as Typescript. [Read More](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines).

#### Test
You must write for every file a test. To create a test, create a file called [NAME-OF-THE-FILE-TO-TEST].spec.ts in the same
directory. 

To run a test, type `npm run test:dev`, if you have chrome installed.
If you don't have chrome installed, rune `npm test`.

Every file must achieve at least a coverage of 80%. You can check the
coverage using `npm run test:coverage`. 

#### Adding Documentation

In order to keep the code maintainable, you must write comments for every class, interface, public method and enumerator.
```
/**
 * @name Entity
 * @description
 * Entities encompass all dynamic, moving objects 
 * throughout the Minecraft world.
 */`
``` 
where @name is the Class name, @description is the description.

## Commits
The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- do not capitalize first letter
- do not place a period . at the end
- entire length of the commit message must not go over 50 characters
- describe what the commit does, not what issue it relates to or fixes
- be brief, yet descriptive - we should have a good understanding of what the commit does by reading the subject

## License

By contributing your code to the BrunnerLivio/MinecraftCommandAPI GitHub Repository, you agree to license your contribution under the MIT license.