---
title: 快速上手
---

# 快速上手
本章节待完善

### 安装

<pre-code code="npm install xing-ui " type="sh"></pre-code>

### 开始使用
#### 添加 CSS 样式
使用本框架前，请确保整个项目的 CSS 开启了 border-box

<pre-code code="*,*::before,*::after { box-sizing: border-box; }" type="css"></pre-code>

#### 按需引入

<pre-code code="import { XButton } from 'xing-ui'
import 'xing-ui/dist/xing.css'
import Vue from 'vue'
                 
new Vue({
  el: '#app',
  components: {
    XButton
  }
})"
   type="javascript"></pre-code>

#### 使用组件

<pre-code code="<x-button>欢迎使用Xing-UI</x-button>"></pre-code>
