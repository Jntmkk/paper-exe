const HDWalletProvider = require('@truffle/hdwallet-provider')
const kovan_url = 'wss://kovan.infura.io/ws/v3/19458dcba6234c63a77f7843e4562eb5'
const rinkeby_url = 'wss://rinkeby.infura.io/ws/v3/19458dcba6234c63a77f7843e4562eb5'
// const kovan_url = 'wss://kovan.infura.io/ws/v3/b2f0902fbf53471eab504b9d78afc119'
// const rinkeby_url = 'wss://rinkeby.infura.io/ws/v3/b2f0902fbf53471eab504b9d78afc119'
const keys = ["a478ac655b7ed8ee9c393d390902b6de8aee49e1f71aa8f99b44f96b0fe8dd63", "cc0c1fa381866020e70922b427cddb11d6a9eeafdb998a46a32071136c26dfc7"]
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks.
  // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
  // on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => {
        // const wsProvider = new Web3.providers.WebsocketProvider(rinkeby_url);
        // HDWalletProvider.prototype.on = wsProvider.on.bind(wsProvider);
        // const wallet = new HDWalletProvider(keys, wsProvider)
        // return wallet
        return new HDWalletProvider(keys, rinkeby_url)
      },
      network_id: '*',
      skipDryRun: true,
      confirmations: 1,
      timeoutBlocks: 10
    },
    kovan: {
      provider: () => {
        // const wsProvider = new Web3.providers.WebsocketProvider(rinkeby_url);
        // HDWalletProvider.prototype.on = wsProvider.on.bind(wsProvider);
        // const wallet = new HDWalletProvider(keys, wsProvider)
        // return wallet
        return new HDWalletProvider(keys, kovan_url)
      },
      network_id: '*',
      skipDryRun: true,
      confirmations: 1,
      timeoutBlocks: 10
    }
  },
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
};
