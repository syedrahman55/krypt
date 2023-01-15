//https://eth-goerli.g.alchemy.com/v2/wgsSO1RoJ0ST2rRs3PyKxN2Fb9azJhT9

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/wgsSO1RoJ0ST2rRs3PyKxN2Fb9azJhT9',
      accounts: ['3db6cabbad65d13ccff3b07d98b55e8821ada7677d7bfe2b6a5a7a6458d73141'],
    },
  },
};