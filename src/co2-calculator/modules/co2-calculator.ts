import { CalcArgs } from '../types/calc-args';
import { getCO2ForTransportInGrams } from '../helpers/CO2-for-transport';
import { getUsedCO2ForTrip } from '../helpers/used-co2-for-trip';
import { buildResultWithWeightUnit } from '../helpers/result-string-builder';

/**
 * @summary Calculates the used CO2 for the current trip and builds the result text
 * @param {CalcArgs} args The required arguments that ware given by the user
 * @return {string} The result string (e.g: 'Your trip caused 2.6kg of CO2-equivalent.')
 */

export const calc = (args: CalcArgs): string => {
  const {  
    transportationMethod, 
    unitOfDistance,
    output,
    distance
  } = args
  const transportUsedCO2ForKmInGrams: number = getCO2ForTransportInGrams(transportationMethod);
  const usedCO2ForCurrentTripInGrams: number = getUsedCO2ForTrip(distance, transportUsedCO2ForKmInGrams, unitOfDistance);
  const resultString: string = buildResultWithWeightUnit(usedCO2ForCurrentTripInGrams, output);
  return `Your trip caused ${resultString} of CO2-equivalent.`
}