import { TransportationMethods } from '../enums/transportation-methods';
import { DistanceUnits } from '../enums/distance-units';
import { OutputWeights } from '../enums/output-weights';

export type CalcArgs = {
  transportationMethod: TransportationMethods;
  unitOfDistance: DistanceUnits;
  output: OutputWeights;
  distance: number
}