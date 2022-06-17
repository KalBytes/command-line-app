#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { join } from 'path';
const co2CalcCommandsDir = join(__dirname, 'co2-calculator', 'commands');

/**
 * @summary Apply command modules from a directory relative to the module calling this method 
 * @param {String} co2CalcCommandsDir The path to the folder that contains the command modules
 * @tutorial https://github.com/yargs/yargs/blob/master/docs/advanced.md
 */

yargs(hideBin(process.argv))
  .commandDir(co2CalcCommandsDir)
  .strict()
  .alias({ h: 'help', v: 'version' }).argv
