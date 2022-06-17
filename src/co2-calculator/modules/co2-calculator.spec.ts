import { TransportationMethods } from '../enums/transportation-methods';
import { DistanceUnits } from '../enums/distance-units';
import { OutputWeights } from '../enums/output-weights';
import { calc } from './co2-calculator';
import { CalcArgs } from '../types/calc-args';


describe('co2 calculator', () => {
    let transportationMethod: TransportationMethods;
    let unitOfDistance: DistanceUnits;
    let output: OutputWeights;
    let distance: number;
    let wantedResult: string;
    let result: string

  it('should return: Your trip caused 0.1kg of CO2-equivalent.', () => {
    transportationMethod = 'train' as unknown as TransportationMethods;
    unitOfDistance = DistanceUnits.METERS;
    output = OutputWeights.KG;
    distance = 14500;
    wantedResult = 'Your trip caused 0.1kg of CO2-equivalent.';
    result = executeCalc({
      transportationMethod,
      unitOfDistance,
      output,
      distance
    })
    expect(result).toBeDefined();
  });

  it('should return: Your trip caused 87g of CO2-equivalent.', () => {
    transportationMethod = 'train' as unknown as TransportationMethods;
    unitOfDistance = DistanceUnits.METERS;
    output = undefined
    distance = 14500;
    wantedResult = 'Your trip caused 87g of CO2-equivalent.';
    result = executeCalc({
      transportationMethod,
      unitOfDistance,
      output,
      distance
    })
    expect(result).toBeDefined();
  });


  it('should return: Your trip caused 2.6kg of CO2-equivalent.', () => {
    transportationMethod = 'medium-diesel-car' as unknown as TransportationMethods;
    unitOfDistance = DistanceUnits.METERS;
    output = undefined
    distance = 15;
    wantedResult = 'Your trip caused 2.6kg of CO2-equivalent.';
    result = executeCalc({
      transportationMethod,
      unitOfDistance,
      output,
      distance
    })
    expect(result).toBeDefined();
  });
});

function executeCalc(args: CalcArgs) {
  return calc(args);
}
