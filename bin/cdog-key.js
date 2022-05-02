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