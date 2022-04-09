# 使用文档

**本测试环境在以太坊 `Kovan`测试网络进行，不是以太坊的主网络，该测试网络下可以[免费获取](https://faucets.chain.link/kovan)以太币。**

## 前置条件

- `MetaMask`是钱包管理的插件负责对交易进行签名，在 [Google](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=chrome-ntp-icon) 和 [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/) 浏览器都有相应的插件版本。安装完成后会进行导入账号的初始化操作，您可以为了安全创建新的账户进行测试。完成之后需要在插件设置页面显示测试网络以方便后续测试。同时本文档提供一个钱包方便测试，可以进行导入钱包，助记符如下：

  ```txt
  picnic device flash punch fog catch regular apart apart leisure sing humble
  ```
s私钥为`f2fb96c2a34af441847fa097a208e804d8bc07a7996dde4f193288c4b02441cf`

- 测试流程需要用到以太币和 ChainLink 代币，可以才[水龙头](https://faucets.chain.link/kovan)获取，每次获得0.1ETH 和 10Link。在 MeatMask 中添加新的代币种类，地址为`0xa36085F69e2889c224210F603D836748e7dC0088`，这是预言机服务商在测试网络发行chainlink link 代币。

## 演示页面内容

本 Demo 模拟去中心化系统的资产交易系统，其中资产是由链下的发行商将资产上链，本例子模拟的是域名发行商。[演示页面](https://whh.buzz)模拟了交易市场和用户在域名发行商持有的域名列表，分别对应`MarketPlace`和`AssetPublish`标签。

### AssetPublish标签

此页面模拟用户在域名发行商持有的域名列表，用户可以点击`上链`操作是持有的资产上链，此处需要与区块链进行交易，所以会弹出`MetaMask`窗口用户对交易进行签名，上链完成后将在市场进行展示，同时上链完成后可以刷新网页可以查看对于资产生成的身份证明文件。

### MarketPlace标签

在首页的[MarketPlace](https://whh.buzz/#/marketplace)标签下，可以看到已经上链的资产（模拟的域名资产）展示了一下几个字段：

- id;代表资产的智能合约地址；
- name;资产名称;
- owner;所有者地址；
- price为了方便未实现相关值
- ipfs;代表资产的证明文件，点击下方查询可以跳转到 IPFS 网络查看该文件；

此处的数据是通过部署的`SubGraph`服务获得，他通过监听整个区块链网络事件，记录感兴趣的事件储存下来，方便查询。部署的[服务地址](https://api.thegraph.com/subgraphs/name/jntmkk/dam3)支持 UI 界面查询数据，点击左上角的`Explorer`可查看定义的数据类型，点击数据类型，然后运行按钮获得查询结果。

点击购买按钮，将与`MetaMask`交互，请求对交易签名，此处发生的动作实际上是触发资产智能合约的`buy`动作，**此动作需要通过预言机检验资产文件是否合法，所以需要支付一定的 LINK 代币，用户需要进行的操作是：复制资产的地址，在`MetaMask`中发送 1 LINK代币到复制的资产地址中**，然后才能进行购买操作，否则交易失败。

完成交易将触发`OwnerTransformEvent`事件，`SubGrpah`会根据事件提供的信息完成资产所有者变更。交易记录可以通过[区块链浏览器](https://kovan.etherscan.io/)查看，输入对于的合约地址就可以查看该合约执行的方法和触发的事件。

## chainlink-docker-compose
```bash
# -d 后台运行 --build 重新构建，不使用缓存的,更改了文件最好重新构建
docker-compose up -d --build
# 远端部署
docker-compose -H "ssh://root@whh.buzz" up -d --build

# 编译 、打包、部署 subgraph
graph codegen && graph build && graph deploy --product hosted-service Jntmkk/Dam3
```