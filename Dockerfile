# 使用node镜像
FROM daocloud.io/library/node:14.6
# 在容器中新建一个目录 egg
RUN mkdir -p /egg
# 将 /egg 设置为默认的工作目录
WORKDIR /egg
# 将package.json 复制到默认工作目录
COPY package.json /egg/package.json
# 安装依赖
# RUN npm config set register https://registry.npm.taobao.org
# RUN npm install --production
RUN npm i --production --registry=https://registry.npm.taobao.org
# 再copye代码到容器 . 拷贝所有的文件 到 /egg
COPY . /egg
# 暴露7001端口
EXPOSE 7001
#等待 node 容器启动之后，再执行start命令
# CMD 是等容器启动完毕之后再执行 RUN是立即执行
CMD npm run prod
