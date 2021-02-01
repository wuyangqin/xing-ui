// toast
const TOAST_OPTION = [
  {
    name: 'primary',
    title: '基础用法',
    description: `
         Xing-UI注册了<code>this.$toast</code>方法， 可以接收<code> options </code>字面量参数（详见文末options列表）；
         <br>也可接收一个<code> String </code>作为参数，此时默认提示从顶部出现，3秒后自动消失。
    `,
    code: `
<x-button @click="$toast('Hi! 你是小星星嘛')">消息提示</x-button>
          `
  },
  {
    name: 'close',
    title: '设置关闭',
    introduction: '可以添加关闭按钮',
    description: `通过<code>showClose</code>属性开启关闭按钮，通过<code>closeButton</code>属性配置按钮的文字 / 图标 / 回调函数。
                  <br>回调函数<code>onClose</code>返回当前 Toast 实例`,
    code: `
<x-button @click="open1">可关闭提示</x-button>
<x-button @click="open2">自定义关闭按钮</x-button>

<script>
export default {
  methods: {
   open1 () {
      this.$toast({
        message: '星星真可爱!',
        showClose: true
      })
    },
    open2 () {
      this.$toast({
        message: '星星真可爱!!',
        showClose: true,
        closeButton: {
          text: '知道了',
          icon: 'check',
          onClose: (vm) => {
            console.log('知道了啦')
            console.log(vm)
          }
        }
      })
    }
  }
}
</script>
          `
  },
  {
    name: 'position',
    title: '弹出位置',
    introduction: '可设置提示弹出位置',
    description: `通过<code>position</code>可设置弹出的三种位置: <code>top/middle/bottom</code> `,
    code:`
<x-button @click="$toast({ message: '星星真可爱', position: 'top' })">顶部弹出</x-button>
<x-button @click="$toast({ message: '星星真可爱', position: 'middle' })">中间弹出</x-button>
<x-button @click="$toast({ message: '星星真可爱', position: 'bottom' })">底部弹出</x-button>
    `
  },
  {
    name: 'canHtml',
    title: '支持HTML',
    description: `<code>enableHtml</code> 属性可控制<code>message</code> 属性是否支持传入 HTML 片段`,
    code:`
<x-button @click="open">加粗的提示</x-button>

<script>
export default {
  methods: {
   open () {
      this.$toast({
        message: \`<strong>星星超可爱!</strong>\`,
        enableHtml: true,
        showClose: true
      })
   }
  }
}
</script>
    `
  }
]

export {
  TOAST_OPTION
}
