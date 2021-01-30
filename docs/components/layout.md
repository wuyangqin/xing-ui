---
title: Layout
---
# Layout 布局
`<x-container>`：外层容器。当子元素中包含 `<x-header>` 或 `<x-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列

`<x-header>`：顶栏容器

`<x-aside>`：侧边栏容器

`<x-main>`：主要区域容器

`<x-footer>`：底栏容器   

::: tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<x-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<x-container>`
:::

  <docs-demo demo-src="demo-layout"></docs-demo>

### Container Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| direction | 子元素的排列方向 |    String | horizontal / vertical | 子元素中有 `x-header` 或 `x-footer` 时为 vertical，否则为 horizontal 

### Header Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| height | 顶栏高度 |    String/Number | -- | 60

### Aside Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| width | 侧边栏宽度 |    String/Number | -- | 200

### Footer Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| height | 底栏高度 |    String/Number | -- | 60
