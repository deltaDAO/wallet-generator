import { Wallet, ethers } from 'ethers'
import fs from 'fs'
import chalk from 'chalk'

const WALLET_EXPORT_DIR = './wallets'

export default async function createWallet(options, command) {
    try {
        const { name, password } = options
        
        const newWallet = Wallet.createRandom()
        const filename = `${WALLET_EXPORT_DIR}/${name || newWallet.address}.json`
        const jsonToWrite = await newWallet.encrypt(password)

        fs.writeFileSync(filename, JSON.stringify(JSON.parse(jsonToWrite), null, 2))

        console.log(chalk.green.bold(`New wallet created with address ${newWallet.address}`))
        console.log(`See ` + chalk.blue.bold(`${filename}`))
    } catch (e) {
        console.log(chalk.red(`Error creating wallet:`))
        console.error(e)
    }
}