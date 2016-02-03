#dotku-node

这里是我研究和学习 NodeJS 的地方

## 关于 NodeJS

NodeJS 是用 Google Chrome 的 V8 引擎作为驱动的 JavaScript 项目，让 JavaScript 在服务器上跑起来，不再局限于浏览器。

最新版本: v5.50  
长期支持版本: v4.2.6  

官方网站: [https://nodejs.org](https://nodejs.org)

## 历史

- Node.js 发布于 2009 年，由 Joyent 公司的 Ryan Dahl 编写，早期的时候只是一个简单的 I/O 功能
- 2011 年 NPM 发布，该工具由 Issac Schlueter 编写，用于文件包组件管理，从此 Node.js 社区开始活跃起来
- 2011 年 6 月，微软与 Joyent 公司合作，发布第一个 Windows 版本的 Node.js
- 2012 年 Issac Schlueter 接手 NodeJS 项目
- 2014 年 Timothy J. Fontaine 接手项目
- 2014 年 Fedor Indutny 发布 io.js，一个 fork 版本的 NodeJS，趋向跟进最新的 Google V8 引擎
- 2015 年 io.js 和 Node.js 合并组成 Node.js Foundation
- 2015 年 9 月 Node.js v0.12 和 io.js v3.3 合并为 NodeJS 4.0，带入 ES6 的一系列功能
- 2016 年 io.js 宣布停止更新，专注 Node.js 项目 

## 官方模块

Node.js 通过 npm 可以获得大量的第三方模块，实现丰富的功能；Node.js 支持 C/C++ Addons 功能扩展，不像 PHP，大部分的模块都由 Zend 官方维护，在 Node.js 社区，所有人都可以在 Node.js 上添砖加瓦 [[c/c++ 扩展案例](https://nodejs.org/dist/latest-v4.x/docs/api/addons.html)]。

当然，对于 Web 工程师来说，我们只是希望使用 Node.js 来完成我们的一些项目，所以还是很有必要了解一下官方的一些工具包的（近年有一个流行的项目叫做 [Meteor](http://www.meteor.com)，全栈前端，也是基于 Node.js 的，可以去 Meteor 官方了解一下）。

- Node.js 官方文档 4.2.6 [Node.js](https://nodejs.org/dist/latest-v4.x/docs/api/documentation.html)

### [requirejs](http://requirejs.org/docs/node.html) vs require
NodeJS 本身有一个同名的 Module Loader，不过 requirejs 提供了前后端兼容的 requirejs 模块，我们往往被这些用名所困惑。

## 第三方文档
- [nodejitsu.com](https://docs.nodejitsu.com) by Charlie Robbins @ Godaddy

## 其他相关项目
- Rhino，Mozilla 的一个类似 Node 的项目，用 Java 来重写的 JavaScript 引擎。
- SpiderMonkey，第一款 JavaScript 引擎，早期用于 Netscape，现在用于 Firefox 据说 JavaScript 用了 10 天就编写出来了。
- V8，Google 丹麦编写的，用于 Chrome 浏览器上的 JavaScript 引擎，现在也用于 Node.js 项目
- JavaScriptCore，用于 Safari
- Chakra，IE 的 JavaScript 引擎 
- KJS，KDE 的 ECMAScript/JavaScript 引擎

还有其他公司，比如 Opera（多个版本），Adobe 等都有参与过 JavaScript 引擎的编写，不过最后都停掉了。

## 友情链接
- [showdown](https://github.com/showdownjs/showdown)
- [jQuery](http://jquery.com/)
- [coding.net](http://www.coding.net)