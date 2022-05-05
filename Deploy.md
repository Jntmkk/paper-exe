# 部署方法
部署方式提供`docker-compose`方式，需要安装`docker`，桌面版 docker 一般自带`docker-compose`。[下载地址](https://www.docker.com/products/docker-desktop/)
涉及的文件夹及对于的功能服务：
|   文件夹  |   服务    |   备注    |
|   :----:    |   :----:    |   :----:    |
| blockchain | 包含智能合约。部分合约需要提前部署||
| chainlink|chainlink operator节点，提供自定义 Job |未使用，暂用公共的实现|  
| db-data|chainlink operator 服务使用的数据库，该目录储存数据库数据，与 docker-compose文件配置有关||
|ipfs |ipfs 服务||
|issuer|模拟资产发行商|web 服务|
|subgraph|区块链数据查询服务|可以监听自己感兴趣的实现。具体查看[文档](https://thegraph.com/docs/en/developer/define-subgraph-hosted/)|

**Issuer 服务需要编译打包成 Jar包，需要进入 isuuer 目录运行`mvn package -Dmaven.test.skip`或者使用 IDE 工具打包**。然后在项目根目录执行代码`docker-compose up -d`即可。需要保证网络条件良好。
启动完成后，[访问](http://localhost:9999)`http://localhost:9999`

**Mac M1 机器因IPFS 服务未适配 ARM 架构，所以无法启动成功**
