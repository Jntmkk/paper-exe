
const AssetDemo = artifacts.require("AssetDemo");
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
const { Oracle } = require('@chainlink/contracts/truffle/v0.6/Oracle')
module.exports = async (deployer, network, [defaultAccount]) => {
  // Local (development) networks need their own deployment of the LINK
  // token and the Oracle contract
  if (!network.startsWith('rinkeby') && !network.startsWith('kovan')) {
    LinkToken.setProvider(deployer.provider)
    Oracle.setProvider(deployer.provider)
    try {
      await deployer.deploy(LinkToken, { from: defaultAccount })
      await deployer.deploy(Oracle, LinkToken.address, { from: defaultAccount })
      // await deployer.deploy(Registry, LinkToken.address)
      // address _link,
      // string memory _did,
      // address _owner,
      // string memory _imgUrl,
      // string memory _name
      await deployer.deploy(AssetDemo, LinkToken.address, 'did:dns:example.com', defaultAccount, 'https://baidu.com', 'example.com domain')
      // await deployer.deploy(Asset, LinkToken.address, defaultAccount)
    } catch (err) {
      console.error(err)
    }
  } else {
    // For kovan networks, use the 0 address to allow the ChainlinkRegistry
    // contract automatically retrieve the correct address for you
    // did:dns:example20.com,0x4A39877E57b7a6d647fa582C6D7B3ccBcfdD30ac,https://baidu.com,example.com domain,QmTaq2X243Wn3vAydoEjPHeFccLBYGYR9LEuYcnN7CQDKv
    // 0x0000000000000000000000000000000000000000, 'did:dns:example.com', 0x4A39877E57b7a6d647fa582C6D7B3ccBcfdD30ac, 'https://baidu.com', 'example.com domain'
    deployer.deploy(AssetDemo, '0x0000000000000000000000000000000000000000', 'did:dns:example.com', defaultAccount, 'https://baidu.com', 'example.com domain')
  }
}
