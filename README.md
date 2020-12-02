# Xing-ui 一个Vue UI框架

[![Build Status](https://travis-ci.org/wuyangqin/xing-ui.svg?branch=master)](https://travis-ci.org/wuyangqin/xing-ui)

作者：wuyangqin

## 介绍
这是我基于对Vue和组件化开发的理解做的一个UI框架

## 开始使用
1. 安装

使用本框架前，请在 CSS 中开启border-box
```css
*, *::before, *::after{box-sizing: border-box}
```
IE 8 及以上浏览器都支持此样式
你还需要设置默认颜色等变量(后续会改为 LESS 变量)
```CSS
html {
  --main-theme-color: #2DD39C;
  --main-hover-color: #4DE9B7;
  --main-active-color: #4DC19C;
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: var(--main-theme-color);
  --button-active-bg: var(--main-active-color);
  --button-hover-bg: var(--main-hover-color);
  --color: #333;
  --border-radius: 4px;
  --border: 1px solid #eee;
}
```
IE 15 及以上浏览器都支持此样式

2. 安装 xing-ui
```
npm i --save xing-ui-1-1
```

3. 引入xing-ui
```js
import { XButton, XButtonGroup, XIcon } from 'xing-ui-1-1'
import 'xing-ui-1-1/dist/index.css'

export default {
 components:{
  XButton
 }
}
```
4. 引入 svg symbols
```html
<script src="http://at.alicdn.com/t/font_2229561_w2o8xuodc0q.js"></script>
```

## 文档

## 组件
### 按钮

## 提问

## 变更记录

## 联系方式

