# chainlink-docker-compose
```bash
# -d 后台运行 --build 重新构建，不使用缓存的,更改了文件最好重新构建
docker-compose up -d --build
# 远端部署
docker-compose -H "ssh://root@whh.buzz" up -d --build

# 编译 、打包、部署 subgraph
graph codegen && graph build && graph deploy --product hosted-service Jntmkk/Dam3
```