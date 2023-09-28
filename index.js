import { program } from 'commander'
import createWallet from './commands/createWallet.js'

program.command('create')
    .description('Create a new wallet')
    .requiredOption('-pw, --password <password>', 'Set the password to use for encryption.')
    .option('-n, --name <name>', 'Name your new wallet. This will be the filename.')
    .action(createWallet)

program.parse()