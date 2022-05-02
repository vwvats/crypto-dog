#!usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')

program
  .version(pkg.version)
  .command('key', 'Manage API Key - get one at https://nomics.com')
  .command('fetch', 'Fetch Coin Price & Info')
  .parse(process.argv)
