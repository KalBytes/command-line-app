import { DistanceUnits } from '../enums/distance-units';
import { getUsedCO2ForTrip } from './used-co2-for-trip';

describe('Used CO2 for trip', () => {
  it('it should get the right amount of used Co2 for trip according to **kilometers**', () => {
    const distance = 15;
    const CO2UsagePerKm = 171;
    const unitOfDistance = DistanceUnits.KM;
    const wantedResult = 2565;
    const result = getUsedCO2ForTrip(distance, CO2UsagePerKm, unitOfDistance);
    expect(result).toEqual(wantedResult);
  });

  it('it should get the right amount of used Co2 for trip according to **Meters**', () => {
    const distance = 14500;
    const CO2UsagePerKm = 6;
    const unitOfDistance = DistanceUnits.METERS;
    const wantedResult = 87;
    const result = getUsedCO2ForTrip(distance, CO2UsagePerKm, unitOfDistance);
    expect(result).toEqual(wantedResult);
  });
});