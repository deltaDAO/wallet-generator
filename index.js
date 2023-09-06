const { Wallet } = require('ethers')
const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
const WALLET_EXPORT_FILE = './wallets.json'

function main() {
    
    readline.question(`What do you want to name the wallet? This can be helpful for future reference. (Return to skip) `, input => {
        const newWallet = Wallet.createRandom()

        let wallets
        try {
            wallets = JSON.parse(fs.readFileSync(WALLET_EXPORT_FILE))
        } catch {
            wallets = []
        }

        if(!Array.isArray(wallets)) wallets = []

        const { address, privateKey, mnemonic } = newWallet

        wallets.push({
            identifier: input,
            address,
            privateKey,
            mnemonic
        })

        fs.writeFileSync(WALLET_EXPORT_FILE, JSON.stringify(wallets, null, 2))

        console.log(`New wallet created with address ${newWallet.address}. See ${WALLET_EXPORT_FILE}`)
        
        readline.close();
    });
    
}

main()