const AssetDemo = artifacts.require("AssetDemo");

const LinkTokenInterface = artifacts.require('LinkTokenInterface')
/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("AssetDemo", function (/* accounts */) {
  // address _link,
  // string memory _did,
  // address _owner,
  // string memory _imgUrl,
  // string memory _name
  let asset
  // 1 link
  const payment = 1000000000000000000n
  before("new", async () => {
    asset = await AssetDemo.deployed();
  })

  const sendLink = async () => {
    const tokenAddress = await asset.getChainlinkToken()
    const token = await LinkTokenInterface.at(tokenAddress)
    console.log('Funding contract:', asset.address)
    const tx = await token.transfer(asset.address, payment, { from: '0x8Db58193c03fE7E5d2D2AB9BF1C80F847c706743' })
  }
  describe("test", () => {
    context("normal procedure", () => {
      it("should assert true", async function () {
        await sendLink()
        await asset.buy({ from: '0x8Db58193c03fE7E5d2D2AB9BF1C80F847c706743', value: web3.utils.toWei('0.01') })
      });
    })
  })
})
