const {Wallet} = require('ethers')
const fs = require('fs')

const WALLET_EXPORT_FILE = './wallets.json'

function main() {
    const newWallet = Wallet.createRandom()

    try {
        fs.readFileSync(WALLET_EXPORT_FILE)
    }
    catch {
        fs.writeFileSync(WALLET_EXPORT_FILE, JSON.stringify([]))
    }

    const wallets = JSON.parse(fs.readFileSync(WALLET_EXPORT_FILE))

    wallets.push({
        address: newWallet.address,
        privateKey: newWallet.privateKey,
        mnemonic: newWallet.mnemonic
    })

    fs.writeFileSync(WALLET_EXPORT_FILE, JSON.stringify(wallets))

    console.log(`New wallet created with address ${newWallet.address}. See ${WALLET_EXPORT_FILE}`)
}

main()