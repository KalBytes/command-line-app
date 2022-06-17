import yargs from 'yargs';
import { join } from 'path';
const spyConsole = jest.spyOn(console, 'log').mockImplementation();
const co2CalcCommandsDir = join(__dirname, 'co2-calculator', 'commands');
const command = 'co2-calculator --unit-of-distance=km --distance 15'

// TODO: Find out why it's not working ("Exceeded timeout of 5000")
xit('parses an alias for the test', async (done) => {
  await new Promise((resolve, reject) => {
    try {
      yargs
        .commandDir(co2CalcCommandsDir)
        .onFinishCommand(async (r) => resolve(r))
        .exitProcess(false)
        .parse(command);
    } catch (e) {
      reject(e);
    }
  });
  expect(spyConsole.mock.calls.length).toBe(1);
  expect(spyConsole.mock.calls[0][0]).toContain('"unit-of-distance":km');
  expect(spyConsole.mock.calls[0][0]).toContain('"distance":15');
  done();
});