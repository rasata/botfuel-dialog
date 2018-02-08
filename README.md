# Botfuel Dialog

[![Build Status](https://travis-ci.org/Botfuel/botfuel-dialog.svg?branch=master)](https://travis-ci.org/Botfuel/botfuel-dialog)

Build highly conversational bots with Botfuel Dialog.

## Start writing a bot using Botfuel Dialog
Read [**Getting Started**](https://docs.botfuel.io/dialog/getting-started) to learn how to run a bot in minutes.

For more explanations about the internals of Botfuel Dialog, see [**Concepts**](https://docs.botfuel.io/dialog/concepts).

## Check the samples
Botfuel Dialog comes with [samples](https://github.com/Botfuel/botfuel-dialog/tree/master/packages) which also serve as integration tests (see below how to run them).

We also provide some standalone [sample bots](https://github.com/topics/botfuel-dialog-samples) written with Botfuel Dialog. These are used in blog posts and docs.

## Enter a ticket
If you have any issue or question, feel free to [open a ticket](https://github.com/Botfuel/botfuel-dialog/issues).

## Contribute to Botfuel Dialog
In addition to your feedback, we also welcome your contributions.

### Clone the repository
```shell
git clone git@github.com:Botfuel/botfuel-dialog.git
```
### Install
```shell
npm run install
```

#### Issue with node-gyp and Python v3.x
Install python v2.7 (https://www.python.org/downloads/release/python-2713/).
```shell
npm install --python=/path/to/python2.7
```

### Run the tests
Botfuel Dialog comes with unit and integration tests.

#### Run the unit tests only
```shel
npm run unit-test
```

#### Run all tests (unit & integration tests)
```shell
npm run bootstrap
BOTFUEL_APP_TOKEN=<...> BOTFUEL_APP_ID=<...> BOTFUEL_APP_KEY=<...> npm run test
```

## License
See the [**License**](LICENSE.md) file.
