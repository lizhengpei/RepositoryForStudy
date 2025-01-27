# Node.js笔记 第2天
## 模板引擎
- 安装：
  + npm install art-template
  + 该命令在哪执行就会把包下载到哪里。默认会下载到node_modules 目录中
  + node_modules 不要改，也不支持改。
  + 注意：在浏览器中需要引用 lib/template-web.js 文件

- 在 Node 中使用 art-template 模板引擎
  + 模板引起最早就是诞生于服务器领域，后来才发展到了前端。

  + 1. 安装 npm install art-template
  + 2. 在需要使用的文件模块中加载 art-template
  + 3. 查文档，使用模板引擎的 API
  + **强调：模板引擎不关心你的字符串内容，只关心自己能认识的模板标记语法，例如 {{}},
    {{}} 语法被称之为 mustache 语法，八字胡语法。**

## 代码风格
[JavaScript Standard Style](https://standardjs.com/)
- 无分号
  + `(`
  + `[`
  + `
  + 最好前面补分号，避免一些问题
  + 《编写可维护的 JavaScript》
  + 不仅是功能，还要写的漂亮
****

> 服务端渲染和客户端渲染的区别

- 服务端渲染
  + 说白了就是在服务端使用模板引擎
  + 模板引擎最早诞生于服务端，后来才发展到了前端


- 客户端渲染不利于 SEO 搜索引擎优化
  + 服务端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取到的
  + 所以你会发现真正的网站既不是纯异步也不是纯服务端渲染出来的
  + 而是两者结合来做的
  + 例如京东的商品列表就采用的是服务端渲染，目的了为了 SEO 搜索引擎优化
  + 而它的商品评论列表为了用户体验，而且也不需要 SEO 优化，所以采用是客户端渲染























