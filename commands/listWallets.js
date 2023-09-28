const fs = require('fs')
const chalk = require('chalk')
const { WALLET_EXPORT_DIR } = require('../constants')
const { ethers } = require('ethers')
const path = require('path')

async function listWallets() {  
    const dir = fs.readdirSync(WALLET_EXPORT_DIR)
    
    if(dir.length > 0) {
        console.log(chalk.green(`Found ${dir.length} created wallet${dir.length > 1 ? 's' : ''}:`))
        console.log(chalk.bold(`Address                                    | File`))
        console.log(chalk.bold(`---------------------------------------------------`))
    } else
        console.log(chalk.red.bold(`No wallets found.`))

    dir.forEach((file, i) => {
        const filename = `${WALLET_EXPORT_DIR}/${file}`
        const json = fs.readFileSync(filename).toString()

        const address = ethers.utils.getJsonWalletAddress(json)

        const chalkColor = i % 2 === 0 ? chalk.blue : chalk.cyan

        console.log(`${chalkColor.bold(address)}${chalkColor(` | ${path.relative('./', filename)}`)}`)
    })
}

module.exports = listWallets