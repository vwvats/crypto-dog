const program = require('commander')
const key = require('../commands/key')

program
  .command('set')
  .description('Set API key - get one at https://nomics.com')
  .action(key.set)

program
  .command('show')
  .description('Show API key')
  .action(key.show)

program
  .command('remove')
  .description('remove API key')
  .action(key.remove)

program.parse(process.argv);

// Output help in case of no arguments
if (!process.argv[2]) {
  program.outputHelp();
}