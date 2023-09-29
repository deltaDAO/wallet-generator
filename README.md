# wallet-generator

## How to use?

> [!Note]
> Make sure you have [Node.js](https://nodejs.org/en) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine.

<br/>

1. Simply clone the repository

```
git clone https://github.com/deltaDAO/wallet-generator.git
```

2. Install the package to your machine

```
cd wallet-generator && npm install -g
```

3. And start the generator

```
wallet-generator --help
```

4. Creating a new wallet is possible using the following command:
```
wallet-generator create --password mypassword
```
Make sure to specify your own password that will be used to encrypt your wallet.
The created wallet will be available in the `wallets` directory.

Optionally you can provide a filename that will be used for the created JSON file:
```
wallet-generator create --name myWalletName --password mypassword
```

It is also possible to create a wallet and export the encrypted JSON from a given `privateKey` if desired:
```
wallet-generator create --privateKey abcd123... --password mypassword
```

**Available Arguments (create)**

| Argument       | Shortform | Required  | Description |
|----------------|-----------|-----------|-------------|
| `--password`   | `-pw`     | x         | Set the password to use for encryption. |
| `--privateKey` | `-pk`     |           | Name your new wallet. This will be the filename. |
| `--name`       | `-n`      |           | Create a wallet from a given privat key. |

