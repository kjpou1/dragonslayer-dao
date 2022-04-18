# buildspace x thirdweb - Build your own DAO with just Javascript

### **Welcome 👋**
To get started with this project, clone this repo and follow these commands:

1. Run `npm install` at the root of your directory
2. Run `npm start` to start the project
3. Start coding!

### **Questions?**
Have some questions make sure you head over to your [buildspace Dashboard](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766) and link your Discord account so you can get access to helpful channels and your instructor!


### third web token contract source

https://github.com/thirdweb-dev/contracts/blob/main/contracts/token/TokenERC20.sol


### Deployed Information

```
iMac-Pro-2:dragonslayer-dao Jimmy$ node scripts/2-deploy-drop.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:51708) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Remote contractName : DropERC1155
Deploying edition-drop proxy
edition-drop proxy deployed successfully
✅ Successfully deployed editionDrop contract, address: 0x780F33E9f0A136fa22E64FE5406dae84AA6d5119
✅ editionDrop metadata: {
  name: 'DragonslayerDAO Membership',
  description: 'A DAO for dragon slayers. Members of this guild will earn $SCALE when they rescue a high-class female character, often a princess but we are not class discriminatory, from being devoured by it.',
  image: 'https://gateway.ipfscdn.io/ipfs/QmXGiiVC1TvCgmHzGf6cEX481heQjQYcDNTpuYDJaS1Zvn/0',
  seller_fee_basis_points: 0,
  fee_recipient: '0x0000000000000000000000000000000000000000',
  merkle: {},
  symbol: ''
}


```


### Setup NFT Data

```
node scripts/3-config-nft.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:53078) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✅ Successfully created a new NFT in the drop!

```

### Setup claim condition

```
node scripts/4-set-claim-condition.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:53318) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✅ Sucessfully set claim condition!

```

### 😈 Deploy an ERC-20 contract.
 
DragonslayerDAO Governance Token 

```
node scripts/5-deploy-token.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:58483) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Remote contractName : TokenERC20
Deploying token proxy
token proxy deployed successfully
✅ Successfully deployed token module, address: 0x7C31dD9fd317741DaCaD22fb2b5729F5DadE3382
```

### Print money

```
node scripts/6-print-money.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:58632) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✅ There now is 1000000.0 $SCALE in circulation
```

### Airdrop Token

```
node scripts/7-airdrop-token.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:58765) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✅ Going to airdrop 2387 tokens to 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
✅ Going to airdrop 8913 tokens to 0x1b2e2f3771499E4677D3EE42428D17A9d49baE07
🌈 Starting airdrop...
✅ Successfully airdropped tokens to all the holders of the NFT!
```

## Governance Contract

## Voting contract

```
node scripts/8-deploy-vote.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:59725) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Remote contractName : VoteERC20
Deploying vote proxy
vote proxy deployed successfully
✅ Successfully deployed vote contract, address: 0xfeC16480f0C13B3856d0Ee8F600E8f00627d5814
```

```
node scripts/9-setup-vote.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:59920) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Successfully gave vote contract permissions to act on token contract
✅ Successfully transferred 891978.3 tokens to vote contract

```

### Create proposals 

```
iMac-Pro-2:dragonslayer-dao Jimmy$ node scripts/10-create-vote-proposals.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:60185) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
✅ Successfully created proposal to mint tokens
✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!
iMac-Pro-2:dragonslayer-dao Jimmy$ 
```

### Revoke rules

```
node scripts/11-revoke-roles.js 
SDK initialized by address: 0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311
(node:65054) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
👀 Roles that exist right now: {
  admin: [ '0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311' ],
  minter: [
    '0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311',
    '0xfeC16480f0C13B3856d0Ee8F600E8f00627d5814'
  ],
  transfer: [
    '0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311',
    '0x0000000000000000000000000000000000000000'
  ]
}
🎉 Roles after revoking ourselves {
  admin: [],
  minter: [],
  transfer: [
    '0xA97AC0e6d65d123dF4d5EC99d04B1d5fbb3D3311',
    '0x0000000000000000000000000000000000000000'
  ]
}
✅ Successfully revoked our superpowers from the ERC-20 contract
```