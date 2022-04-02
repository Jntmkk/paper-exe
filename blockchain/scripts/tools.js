const AssetDemo = artifacts.require('AssetDemo')
const LinkTokenInterface = artifacts.require('LinkTokenInterface')

module.exports = async callback => {
    try {
        // TODO: implement your actions
        const payment = 1000000000000000000n
        const asset = await AssetDemo.deployed()
        const sendLink = async () => {
            const tokenAddress = await asset.getChainlinkToken()
            const token = await LinkTokenInterface.at(tokenAddress)
            console.log('Funding contract:', asset.address)
            const tx = await token.transfer(asset.address, payment, { from: '0x8Db58193c03fE7E5d2D2AB9BF1C80F847c706743' })
        }
        const r = await sendLink()
        await asset.buy({ from: '0x8Db58193c03fE7E5d2D2AB9BF1C80F847c706743', value: web3.utils.toWei('0.01') })

    } catch (error) {
        console.log(error);
    } finally {
        callback();
    }

}