import { DistanceUnits } from '../enums/distance-units';

/**
 * @summary Calculates the used CO2 for the current trip
 * @param {number} distance The distance as it was given by the user 
 * @param {number} CO2UsagePerKm The accurate CO2 usage per kilometer
 * @return {number} Return the amount of used CO2 in 'Grams'
 */

export const getUsedCO2ForTrip = (distance: number, CO2UsagePerKm: number, unitOfDistance:  DistanceUnits): number => {
  return unitOfDistance === DistanceUnits.KM ? CO2UsagePerKm * distance : CO2UsagePerKm * (distance / 1000);
}