const AssetDemo = artifacts.require("AssetDemo");


contract('MetaCoin', (accounts) => {
  it('should put 10000 MetaCoin in the first account', async () => {
    const asset = await AssetDemo.deployed();
    const owner = await asset.owner()
    console.log(owner);
  });
});
