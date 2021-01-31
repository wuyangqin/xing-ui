---
title: Tabs 标签页
---
# Tabs 标签页
分隔内容上有关联的数据内容

  <docs-demo demo-src="demo-tabs"></docs-demo>
  
### Tabs Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|  v-model / value | 绑定值，选中选项卡的 name |    String | -- | --
| tab-position | 选项卡所在位置 | String  | 	top/right/bottom/left |  top

### Tabs Events
|事件名称| 说明 |  |  回调参数  | |
| :-------------: |:----:| :---------------------:| :---------------------:| :--:|
| change | tab切换时触发 |  |  选中选项卡的 name | 

### Tab Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|  label | 选项卡标题 |    String | -- | --
|  disabled | 是否禁用 |    Boolean | -- | false
| name | 与选项卡绑定值 value 对应的标识符 | String  | 	--  | 该选项卡在选项卡列表中的顺序值
