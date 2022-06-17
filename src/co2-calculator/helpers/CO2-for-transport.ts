import { TransportationMethods } from '../enums/transportation-methods';
const fs = require("fs");

/**
 * @summary Converts the co2 data json to Objects and retrieves the emission usage according to transportation method
 * @param {TransportationMethods} transportationMethod The selected transportation method
 * @return {number} The co2 usage for the selected transportation method
 */

export const getCO2ForTransportInGrams = (transportationMethod: TransportationMethods): number => {
  const jsonString = fs.readFileSync("assets/co2-data.json", "utf8");
  const CO2DataObj: {[key: string]: number} = JSON.parse(jsonString);
  return CO2DataObj[transportationMethod];
};