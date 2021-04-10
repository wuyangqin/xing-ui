// cascader
const CASCADER_OPTION = [
  {
    name: 'primary',
    title: '基础用法',
    introduction: '',
    description: `
         通过 <code>source</code> 属性指定选项数组渲染级联选择器
        `,
    code: `
<x-cascader v-model="selected" :source="source"></x-cascader>

<script>
export default {
  data() {
    return {
      selected:[],
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
  }
}
</script>

          `
  },
  {
    name: 'default',
    title: '默认值',
    introduction: '',
    description: `默认值通过数组方式指定`,
    code: `
<x-cascader v-model="selected" :source="source"></x-cascader>

<script>
export default {
  data() {
    return {
      selected: ['zhejiang','hangzhou','xiacheng'],
      source: [{
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
  }
}
</script>

          `
  
  },
  {
    name: 'clearable',
    title: '可清空',
    introduction: '',
    description: `通过设置 <code>clearable</code> 在选择结束后可清空选项`,
    code: `
<x-cascader v-model="selected" placeholder="可清空选项" :source="source" clearable></x-cascader>

<script>
export default {
  data() {
    return {
      selected: [],
      source: [{
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
  }
}
</script>

          `
    
  },
  {
    name: 'lazyLoad',
    title: '动态加载',
    introduction: '当选中某一级时，动态加载该级下的选项',
    description: `通过 <code>lazyLoad</code> 设置动态加载方法，该方法有两个参数，第一个参数 <code>node</code> 为当前点击的节点，第二个 <code>resolve</code> 为数据加载完成的回调(必须调用并传入加载完成后的数据)。可为数据添加叶子节点标志位(默认字段为 <code>isLeaf</code> ,可通过 <code>options.isLeaf</code> 修改)`,
    code: `
<x-cascader v-model="selected"
            clearable
            placeholder="动态加载选项"
            :source.sync="source"
            :lazy-load="lazyLoad">
</x-cascader>

<script>
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
  data () {
    return {
      selected: [],
      source: []
    }
  },
  created () {
    ajax().then(result => {
      this.source = result;
    })
  },
  methods: {
    lazyLoad (node, resolve) {
      ajax(node.id).then(result => {
        resolve(result)
      })
    }
  }
}
</script>

          `
    
  }
]

export {
  CASCADER_OPTION
}
