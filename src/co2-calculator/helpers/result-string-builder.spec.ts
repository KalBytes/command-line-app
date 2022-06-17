import { buildResultWithWeightUnit } from './result-string-builder'
import { OutputWeights } from '../enums/output-weights';

describe('Build the result string', () => {
  it('it should get the result in **grams**', () => {
     const usedCO2ForTrip = 87;
     const requiredOutput = undefined;
     const wantedResult = '87g';
     const result = buildResultWithWeightUnit(usedCO2ForTrip, requiredOutput);
     expect(result).toEqual(wantedResult);
  });

  it('it should get the result in **kilograms** without output arg', () => {
     const usedCO2ForTrip = 2565;
     const requiredOutput = undefined;
     const wantedResult = '2.6kg';
     const result = buildResultWithWeightUnit(usedCO2ForTrip, requiredOutput);
     expect(result).toEqual(wantedResult);
  });

  it('it should get the result in **kilograms** with output arg', () => {
     const usedCO2ForTrip = 87;
     const requiredOutput = OutputWeights.KG;
     const wantedResult = '0.1kg';
     const result = buildResultWithWeightUnit(usedCO2ForTrip, requiredOutput);
     expect(result).toEqual(wantedResult);
  });
});
