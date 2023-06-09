# 一个很普通的程序员简历模板

![example](./example.png)



## 运行

```bash
yarn
yarn dev
```

## 使用说明

使用 Vite + Vue 脚手架，搭配 TailwindCSS 和 Bootstrap Icon 写的简历模板。

比较简陋，可以自定义的内容比较少，但基本够用了。

### 修改颜色

如果想要修改强调色，可以在 `tailwind.config.cjs` 里进行修改。

一些我自己定义的 CSS 类在 `src/style.css` 里。

如果想要修改行距，可以搜索正则表达式 `(m[xytblr]?-\d+\.?\d*)|(gap-y-\d+\.\d*)` 来找到各个控制距离的 css 类所在处，然后自己修改数字看效果如何。这都是 Tailwind CSS 的内容，如果不知道数字和字母分别代表什么可以去 Tailwind CSS 的文档搜搜。

### 修改内容

由于我的个人信息不能暴露，所以目前内容放在 `src/content_fake.js` 里，字段都挺明晰的，直接修改内容应该就可以了。

顺带一提，`content_fake.js` 里面并没有做真正的 Markdown 解析，只是普通把 `##` 作为加粗，把 `-` 或者 `*` 作为列表项而已。

### 导出 PDF
一般用浏览器打开，然后右键打印 -> 另存为 PDF 就可以了，推荐使用 Chrome 浏览器来进行导出。记得要把「更多设置」里的「边距」调成「无」，然后「背景图形」要打勾。