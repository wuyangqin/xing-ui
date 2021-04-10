<template>
  <demo-page class="demo-button-box" :option="demoOption">
    <template #primary>
      <x-cascader v-model="selected" :source="source"></x-cascader>
    </template>
    <template #default>
      <x-cascader v-model="selected1" :source="source"></x-cascader>
    </template>
    <template #clearable>
      <x-cascader v-model="selected2" placeholder="可清空选项" :source="source" clearable></x-cascader>
    </template>
    <template #lazyLoad>
      <x-cascader v-model="selected3" placeholder="动态加载选项" clearable :source.sync="source1" :lazy-load="lazyLoad"></x-cascader>
    </template>
  </demo-page>
</template>

<script>
import DemoPage from './common/demo-page'
import XCascader from '../components/cascader/index.vue'
import XButton from '../components/button.vue'
import XButtonGroup from '../components/button-group'
import { CASCADER_OPTION } from './js/cascader'

const dbList = [
  {
    value: 'guangdong',
    label: '广东',
    isLeaf: false,
    id:1,
    parent_id:0
  },
  {
    value: 'hunan',
    label: '湖南',
    id:2,
    isLeaf: false,
    parent_id:0
  },
  {
    value: 'guangzhou',
    label: '广州',
    isLeaf: true,
    id:3,
    parent_id:1
  },
  {
    value: 'shenzhen',
    label: '深圳',
    isLeaf: true,
    id:4,
    parent_id:1
  },
  {
    value: 'changsha',
    label: '长沙',
    isLeaf: false,
    id:5,
    parent_id:2
  },
  {
    value: 'shaoyang',
    label: '邵阳',
    isLeaf: true,
    id:6,
    parent_id:2
  },
  {
    value: 'ningxiang',
    label: '宁乡',
    isLeaf: true,
    id:7,
    parent_id:5
  }
];
const ajax = function (id = 0) {
  return new Promise((resolve, reject) => {
    let result = dbList.filter(item => item.parent_id === id)
    setTimeout(() => {
      resolve(result)
    }, 1500)
  })
}
export default {
  name: 'demo-button',
  components: {
    XCascader,
    DemoPage,
    XButton,
    XButtonGroup
  },
  data () {
    return {
      loading: true,
      demoOption: CASCADER_OPTION,
      selected:[],
      selected1:['zhejiang','hangzhou','xiacheng'],
      selected2:[],
      selected3:[],
      source1:[],
      source:[{
        label: '浙江',
        value: 'zhejiang',
        children: [
          {
            label: '杭州',
            value: 'hangzhou',
            children: [
              {label: '上城', value: 'shangcheng'},
              {label: '下城', value: 'xiacheng'},
              {label: '江干', value: 'jianggan'},
            ]
          },
          {
            label: '嘉兴',
            value: 'anhui',
            children: [
              {label: '南湖', value: 'nanhu'},
              {label: '秀洲', value: 'xiuzhou'},
              {label: '嘉善', value: 'jiashan'},
            ]
          },
        ]
      }, {
        label: '福建',
        value: 'fujian',
        children: [
          {
            label: '福州',
            value: 'fuzhou',
            children: [
              {label: '鼓楼', value: 'gulou'},
              {label: '台江', value: 'taijiang'},
              {label: '仓山', value: 'cangshan'},
            ]
          },
        ]
      }, {
        label: '安徽',
        value: 'anhui',
        children: [{
          label: '合肥',
          value: 'hefei',
          children: [{
            label: '瑶海', value: 'yaohai'
          }, {
            label: '庐阳', value: 'luyang'
          }]
        }]
      }]
    }
  },
  created () {
    ajax().then(result => {
      this.source1 = result;
    })
  },
  methods:{
    lazyLoad(node, resolve) {
      ajax(node.id).then(result => {
        resolve(result)
      })
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/docs-demo');
</style>
