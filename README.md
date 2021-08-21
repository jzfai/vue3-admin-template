### 前言

#### 本架构使用的技术为：vue3.2.4+vite2.4.3+script（setup写法）+element-plus 的新一代的前端框架，框架使用类似vue-admin-template

```
框架有js和ts版本
js版本分支：master
ts版本分支：master-ts(正在开发中)
如果想学习vue3.0+vite2.0的可以把这个框架和vue-admin-template框架进行对比，后期也我会出在架构设计过程中
vue2.0和vue3.0的区别，以及如何快速的把vue2.0迁移到3.0中的教程
```



>开发和使用感受：两个字    真香！！！！！

### 效果

![http://8.135.1.141/file/images/1629541566667.png](http://8.135.1.141/file/images/1629541566667.png)

#### 线上体验地址：http://8.135.1.141/vue3.0-admin-template

### 如何运行

```javascript
克隆项目
git clone https://github.com/jzfai/vue3.0-admin-template.git
cd  vue3.0-admin-template
运行yarn安装依赖
yarn
运行dev命令
yarn run dev


补充：这里说下package.json里的scripts命令
"scripts": {
  "dev": "vite --mode serve-dev", ---- 开发时运行
   "build": "vite build --mode build",  ---- 打包发布生产环境
   "serve": "vite preview --mode build" ---- 这个是在你本地打包完后（yarn run build）后会生产一个dist文件夹，这个命令在你本地启动一个本地服务用于查看dist文件内容，发布生产前可以用这个先看下打包的效果
},
```

