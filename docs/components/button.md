---
title: Button
---
# Button 按钮

### 基础用法
  <docs-demo demo-src="demo-button"></docs-demo>

#### 示例代码
```vue
<x-button>主要按钮</x-button>
<x-button icon="setting">图标按钮</x-button>
<x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
```

### Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | -- | -- 
|iconPosition|图标位置|String|left/right|left
| loading      | 加载状态      |  Boolean |--| false
