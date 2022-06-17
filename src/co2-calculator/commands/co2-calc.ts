import type { CommandBuilder, Argv, Arguments } from 'yargs';
import { CalcArgs } from '../types/calc-args';
import { calc } from '../modules/co2-calculator';

/**
 * @summary Creating the modules for creating a customize command
 * @tutorial https://github.com/yargs/yargs/blob/master/docs/advanced.md
 */

export const command: string = '$0';
export const describe: string = 'Calculate co2 usage according to trip and transportation type';

export const builder: CommandBuilder<any> = (yargs: Argv<any>) =>
  yargs.option("distance", {
    alias: "d",
    describe: "The selected distance unit.",
    demandOption: "The distance is required.",
    type: "number",
    nargs: 1,
  })
  .option("transportation-method", {
    alias: "t",
    describe: "The used transportation method.",
    demandOption: "The transportation method is required.",
    type: "string",
    nargs: 1,
  })
  .option("unit-of-distance", {
    alias: "u",
    describe: "The selected distance unit.",
    type: "string",
    default: "km",
    nargs: 1,
  })
  .option("output", {
    alias: "o",
    describe: "in which weight unit show the result",
    type: "string",
    nargs: 1,
  })

export const handler = (argv: Arguments<CalcArgs>): void => {
  const result: string = calc(argv);
  console.log(result);
};
 
