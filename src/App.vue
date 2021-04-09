<template>
  <div id="app">
    <cascader v-model="selected" :source="source">
<!--      <button>点我</button>-->
    </cascader>
  </div>
</template>

<script>
import Cascader from './components/cascader/index'

export default {
  name: "App",
  components: {
    Cascader
  },
  data() {
    return {
      visible: false,
      selected:[],
      source: [{
        name: '浙江',
        value:'zhejiang',
        children: [
          {
            name: '杭州',
            value:'hangzhou',
            children: [
              {name: '上城',value:'shangcheng'},
              {name: '下城',value:'xiacheng'},
              {name: '江干',value:'jianggan'},
            ]
          },
          {
            name: '嘉兴',
            value:'anhui',
            children: [
              {name: '南湖',value:'nanhu'},
              {name: '秀洲',value:'xiuzhou'},
              {name: '嘉善',value:'jiashan'},
            ]
          },
        ]
      }, {
        name: '福建',
        value:'fujian',
        children: [
          {
            name: '福州',
            value:'fuzhou',
            children: [
              {name: '鼓楼',value:'gulou'},
              {name: '台江',value:'taijiang'},
              {name: '仓山',value:'cangshan'},
            ]
          },
        ]
      }, {
        name: '安徽',
        value:'anhui',
        children: [{
          name: '合肥',
          value:'hefei',
          children: [{
            name: '瑶海',value:'yaohai'
          }, {
            name: '庐阳',value:'luyang'
          }]
        }]
      }]
    }
  }
}
</script>

<style scoped>
#app {
  margin: 100px;
}
</style>
