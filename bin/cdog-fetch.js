const program = require('commander');
const fetch = require('../commands/fetch');

program
  .command('price')
  .description('Fetch price of coins')
  .option(
    '--coin <type>',
    'Add a single coin or add multiple with commas',
    'BTC,ETH,XRP'
  )
  .option('--curr <currency>', 'Change the currency', 'USD')
  .action(cmd => fetch.price(cmd));

program.parse(process.argv);

// Output help in case of no arguments
if (!process.argv[2]) {
  program.outputHelp();
}