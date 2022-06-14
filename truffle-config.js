const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545, // Ganache default port
      network_id: '*',
    },
    ethereum_mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 1,
      skipDryRun: true,
    },
    ethereum_ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      network_id: 3,
      skipDryRun: true,
    },
    ethereum_rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      network_id: 4,
      skipDryRun: true,
    },
    ethereum_goerli: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 5,
      skipDryRun: true,
    },
    ethereum_kovan: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
        ),
      network_id: 42,
      skipDryRun: true,
    },
    arbitrum_mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://arb-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 42161,
      skipDryRun: true,
    },
    arbitrum_testnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://arbitrum-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 421611,
      skipDryRun: true,
    },
    optimism_mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://opt-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 10,
      skipDryRun: true,
    },
    optimism_testnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://opt-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 69,
      skipDryRun: true,
    },
    polygon_mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://polygon-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 137,
      skipDryRun: true,
    },
    polygon_mumbai: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY_RESERVE,
          `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`
          // `https://polygon-mumbai.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
        ),
      network_id: 80001,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '0.8.4',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  plugins: ['solidity-coverage', 'truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions: {
      enabled: process.env.REPORT_GAS ? true : false,
      currency: 'USD',
      // gasPrice: process.env.GAS_PRICE, // in gwei, if you want to manually set the fixed gas price (useful especially for Arbitrum and Optimism, where the typical gas price is around 1-2 gwei)
      coinmarketcap: process.env.COINMARKETCAP_API_KEY,
      token: 'ETH', // or 'MATIC' for the Polygon network
      // not required for test networks
      gasPriceApi:
        'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice', // Ethereum mainnet
      // 'https://api.arbiscan.io/api?module=proxy&action=eth_gasPrice', // Arbitrum mainnet
      // 'https://api.optimistic.etherscan.io/api?module=proxy&action=eth_gasPrice' // Optimism mainnet
      // 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice', // Polygon mainnet
    },
  },
};
