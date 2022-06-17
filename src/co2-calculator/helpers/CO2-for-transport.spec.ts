import { getCO2ForTransportInGrams } from './CO2-for-transport';
import { TransportationMethods } from '../enums/transportation-methods';

describe('CO2 usage according to transport type', () => {
  it('it should get the right CO2 for transport method', () => {
    // Properties according to => assets/co2-data.json.
    const transportMethod = 'small-diesel-car'
    const CO2Amount = 142

    const CO2LevelPerKilometer = getCO2ForTransportInGrams(transportMethod as unknown as TransportationMethods)
    expect(CO2LevelPerKilometer).toEqual(CO2Amount);
  });
});
