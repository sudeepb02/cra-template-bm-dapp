# Bare Minimum Dapp: bm-dapp

A bare minimum dapp front-end for your decentralized web3 application. Create a one click dapp, bootstrapped with [Create React App](https://github.com/facebook/create-react-app) template.

- Simple, easy and fast
- Ready to use dapp with web3 login feature
- Includes only the bare minimum dependencies so your app is not bloated
- Uses [Web3modal](https://github.com/Web3Modal/web3modal) under the hood so you can add other providers easily with minimum efforts
- Reloads automatically on account and network changes

## How to use

Bootstrap your dapp using Create React App by using the bm-dapp template

```
npx create-react-app my-app --template bm-dapp
yarn start
```

The app runs in development mode at [http://localhost:3000](http://localhost:3000). Clicking the `Connect Web3` button will pop-up Metamask by default(if web3 is enabled). For adding other providers, check [Web3Modal Provider Options](https://github.com/Web3Modal/web3modal#provider-options) 


### Using with ethers

By default, ethers provider is used by bm-dapp. To use the connected provider, import `Web3Context` from the web3 directory present inside `src` directory.

```
import React, { useContext } from 'react';
import { Web3Context } from './web3';

const { account, provider } = useContext(Web3Context);
```

To initialize an ethers Contract object
```
const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
```

To connect a signer to the above Read-only contract
```
const signer = await provider.getSigner();
daiContract.connect(signer);
```

Or to intialize a Contract with signer
```
const daiWithSigner = new ethers.Contract(daiAddress, daiAbi, provider.getSigner());
```

For more details, please refer [`ethers` documentation](https://docs.ethers.io/v5/getting-started/).


### Using with web3

You can wrap the provider received from Web3Context with web3js and use it as below
```
import React, { useContext } from 'react';
import { Web3Context } from './web3';

const { account, provider } = useContext(Web3Context);
const web3 = new Web3(provider);
```
For more details, please refer [`web3js` documentation](https://web3js.readthedocs.io/en/v1.3.4/index.html


## Related efforts

If you are looking for a full-suite of Ethereum dapp with Smart contracts and other features, please check out the below links:

- [create-eth-app](https://github.com/paulrberg/create-eth-app) by PaulRBerg
- [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) by Austin Griffith
