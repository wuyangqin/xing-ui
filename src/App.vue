<template>
  <div id="app">
    <cascader v-model="selected" :source.sync="source" :lazy-load="lazyLoad"
              @change="change"
    >
      <!--      <button>点我</button>-->
    </cascader>
    <div style="margin-top: 30px;">
      <cascader v-model="selected" :source.sync="source1" clearable
                :options="{children:'sub'}"
                @change="change" @clear="clear">
      </cascader>
    </div>
    <x-input v-model="value" right-icon="down">
      <x-icon name="check" slot="right-icon"></x-icon>
<!--      <div slot="right-icon">2323</div>-->
    </x-input>
    {{value}}
    <x-input v-model="value" right-icon="down"></x-input>
    <x-input v-model="value" left-icon="down" clearable></x-input>
    <x-input v-model="value" left-icon="close">
      <x-icon name="check" slot="left-icon"></x-icon>
    </x-input>

  </div>
</template>

<script>
import Cascader from './components/cascader/index'
import XInput from './components/input'
import XIcon from './components/icon'
import db from './components/cascader/db.js'

const ajax = function (id = 0) {
  return new Promise((resolve, reject) => {
    let result = []
    db.forEach(item => {
      if (item.parent_id === id) {
        const {id, parent_id, name, value} = item
        const isLeaf = db.filter(node => node.parent_id === id).length === 0
        result.push({id, parent_id, label:name, value, isLeaf})
      }
    })
    setTimeout(() => {
      resolve(result)

    }, 2000)
  })
}
export default {
  name: "App",
  components: {
    XInput,
    XIcon,
    Cascader
  },
  data() {
    return {
      value:'',
      visible: false,
      // selected:['zhejiang','hangzhou','xiacheng'],
      selected: [],
      selected1: [],
      source: [],
      source1: []
    }
  },
  created() {
    ajax().then(result => {
      this.source = result;
    })
    this.source1 = [{
      label: '浙江',
      value: 'zhejiang',
      sub: [
        {
          label: '杭州',
          value: 'hangzhou',
          sub: [
            {label: '上城', value: 'shangcheng'},
            {label: '下城', value: 'xiacheng'},
            {label: '江干', value: 'jianggan'},
          ]
        },
        {
          label: '嘉兴',
          value: 'anhui',
          sub: [
            {label: '南湖', value: 'nanhu'},
            {label: '秀洲', value: 'xiuzhou'},
            {label: '嘉善', value: 'jiashan'},
          ]
        },
      ]
    }, {
      label: '福建',
      value: 'fujian',
      sub: [
        {
          label: '福州',
          value: 'fuzhou',
          sub: [
            {label: '鼓楼', value: 'gulou'},
            {label: '台江', value: 'taijiang'},
            {label: '仓山', value: 'cangshan'},
          ]
        },
      ]
    }, {
      label: '安徽',
      value: 'anhui',
      sub: [{
        label: '合肥',
        value: 'hefei',
        sub: [{
          label: '瑶海', value: 'yaohai'
        }, {
          label: '庐阳', value: 'luyang'
        }]
      }]
    }]
  },
  methods: {
    lazyLoad(node, resolve) {
      ajax(node.id).then(result => {
        resolve(result)
      })
    },
    change(value, selectedNodes) {
      console.log(value);
      console.log(selectedNodes);
    },
    clear(){
      console.log('clear');
    }
  }
}
</script>

<style scoped>
#app {
  margin: 100px;
}
</style>
