import { OutputWeights } from '../enums/output-weights';

/**
 * @summary Decides whatever to show the weight units in 'grams' or in 'kilograms'
 * @param {number} usedCO2ForTrip The used CO2 for the current trip in 'grams' units
 * @param {OutputWeights} requiredOutput The wanted weight unit to be shown
 * @return {string} Return examples: '2.6kg', '0.1kg', '87g'
 */

export const buildResultWithWeightUnit = (usedCO2ForTrip: number, requiredOutput: OutputWeights | undefined): string => {
  // Check all cases where the result should be displayed in 'grams'
  if (usedCO2ForTrip < 1000 && !requiredOutput || requiredOutput === OutputWeights.G) {
    return usedCO2ForTrip + OutputWeights.G
  } else {
    // Else we're showing the result in 'kg'
    const resultInKm: number = usedCO2ForTrip / 1000;
    return Math.round( resultInKm * 10 + Number.EPSILON ) / 10 + OutputWeights.KG;
  }
}
