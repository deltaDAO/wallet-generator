const { ethers, Wallet } = require('ethers')
const fs = require('fs')
const chalk = require('chalk')
const { WALLET_EXPORT_DIR } = require('../constants')

async function createWallet(options) {
    try {
        const { name, password, privateKey } = options
        let newWallet

        if(privateKey) {
            try {
                newWallet = new Wallet(privateKey)
            } catch (e) {
                console.log(chalk.red(`Error creating wallet from given private key.`))
                console.error(e)
                return
            }
        }

        if(!newWallet)
            newWallet = Wallet.createRandom()
        
        const filename = `${WALLET_EXPORT_DIR}/${name || newWallet.address}.json`
        const jsonToWrite = await newWallet.encrypt(password)

        if(!fs.existsSync(WALLET_EXPORT_DIR))
            fs.mkdirSync(WALLET_EXPORT_DIR)

        fs.writeFileSync(filename, JSON.stringify(JSON.parse(jsonToWrite), null, 2))

        console.log(chalk.green(`New wallet created with address `) + chalk.green.bold(newWallet.address))
        console.log(`See ` + chalk.blue.bold(`${filename}`))
    } catch (e) {
        console.log(chalk.red(`Error creating wallet:`))
        console.error(e)
    }
}

module.exports = createWallet