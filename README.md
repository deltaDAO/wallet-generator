# random-wallet-generator

## How to use?

> [!Note]
> Make sure you have [Node.js](https://nodejs.org/en) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine.

<br/>

1. Simply clone the repository

```
git clone https://github.com/deltaDAO/random-wallet-generator.git
```

2. Install the dependencies

```
npm install
```

3. And start the generator

```
npm start
```

4. You will be asked to enter an identifier for the wallet that will be created:
```
# What do you want to name the wallet? This can be helpful for future reference. (Return to skip)
```
Simply enter a name that's easy for you to remember or skip this step.

5. The wallet will be created in a file called `wallets.json`
This file will be used to store all wallets you create using this generator.

> [!Note]
> Make sure to delete the JSON File regularly, as this will contain the `privateKey` and `mnemonic` of your newly created wallet and should only be used to get you started when setting up the new account with your preferred wallet solution.
