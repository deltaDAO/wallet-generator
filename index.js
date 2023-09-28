#! /usr/bin/env node

const { program } = require('commander')
const createWallet = require('./commands/createWallet.js')
const listWallets = require('./commands/listWallets.js')

program.command('create')
    .description('Create a new wallet')
    .requiredOption('-pw, --password <password>', 'Set the password to use for encryption.')
    .option('-n, --name <name>', 'Name your new wallet. This will be the filename.')
    .action(createWallet)

program.command('list')
    .description('Lists all available created wallets')
    .action(listWallets)

program.parse()