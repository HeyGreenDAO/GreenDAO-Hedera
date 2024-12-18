<div style="display:flex;flex-direction:column; align-items:center;">
<img src="./public/favicon.png" height="250">

</div>

## Technical Description
We have made our smart contract using soldity programming language. Then we have deployed it using hardhat to hedera testnet. We are using ether.js to view and call transactions. GreenDAO supports only Metamask wallet. 
1. it is located in [Soldiity code](./contracts/contracts/GreenDAO.sol). It is deployed with Hardhat to Hedera Testnet network. 
2. [Ether Contract Instance](./services/ERC20Singleton.js) and [Use Contract](./services/useContract.js)
3. Implementing it in all [pages](./pages) 


## Getting Started

First, run :

```bash
npx yarn
```


Then, run the development server:

```bash
npm run dev
# or
npx yarn dev
```

# Demo Links
https://greendao-hedera.vercel.app/

