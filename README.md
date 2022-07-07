# <a href='https://www.kalbytes.de/'><img src='https://www.kalbytes.de/static/logo-87a2a41907a1690d5870fed0f7f22944.svg' height='80' alt='Kalbytes Logo' aria-label='https://www.kalbytes.de' /></a>


# CO2Calculator

## Description

A basic CLI application that allows you to calculate the amount of used CO2 per journey
written in NodeJS & TypeScript

## Development environment
```
NodeJS v14.11.0
```

## Installation

The next command will bootstrap the application for you.

```bash
$ npm run bootstrap
```

## Testing

The next command will run all the existing tests.

```bash
$ npm run test
```

## CLI

The command-line interface (CLI) for this project uses [yargs](https://github.com/yargs/yargs).

Running `co2-calculator --help` will provide the following help information:

```bash
$ co2-calculator --help

co2-calculator

Calculate co2 usage according to trip and transportation type

Options:
  -d, --distance               The selected distance unit.   [number] [required]
  -t, --transportation-method  The used transportation method.
                                                             [string] [required]
  -u, --unit-of-distance       The selected distance unit.
                                                        [string] [default: "km"]
  -o, --output                 in which weight unit show the result     [string]
  -h, --help                   Show help                               [boolean]
  -v, --version                Show version number                     [boolean]
```

## Run commands

It possible running the commands easily using `co2-calculator [OPTIONS]` command

## Examples


```bash
$ co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
Your trip caused 2.6kg of CO2-equivalent.
```

```bash
$ co2-calculator --distance 1800.5 --transportation-method large-petrol-car
Your trip caused 507.7kg of CO2-equivalent.
```