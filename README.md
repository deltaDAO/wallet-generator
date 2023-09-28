# random-wallet-generator

## How to use?

> [!Note]
> Make sure you have [Node.js](https://nodejs.org/en) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine.

<br/>

1. Simply clone the repository

```
git clone https://github.com/deltaDAO/random-wallet-generator.git
```

2. Install the package to your machine

```
npm install -g
```

3. And start the generator

```
wallet-generator --help
```

4. Creating new wallets
You can create a new wallet using the following command:
```
wallet-generator create --password mypassword
```
Make sure to specify your own password that will be used to encrypt your wallet.
The created wallet will be available in the `wallets` directory.

Optionally you can provide a filename that will be used for the created JSON file:
```
wallet-generator create --name myWalletName --password mypassword
```
