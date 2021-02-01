<template>
  <demo-page class="demo-toast-box" :option="option">
    <template #primary>
      <x-button @click="$toast('Hi! 你是小星星嘛')">消息提示</x-button>
    </template>
    <template #close>
      <x-button @click="open1">可关闭提示</x-button>
      <x-button @click="open2">自定义关闭按钮</x-button>
    </template>
    <template #position>
      <x-button @click="$toast({ message: '星星真可爱', position: 'top' })">顶部弹出</x-button>
      <x-button @click="$toast({ message: '星星真可爱', position: 'middle' })">中间弹出</x-button>
      <x-button @click="$toast({ message: '星星真可爱', position: 'bottom' })">底部弹出</x-button>
    </template>
    <template #canHtml>
      <x-button @click="open">加粗的提示</x-button>
    </template>
  </demo-page>
</template>

<script>
import DemoPage from './common/demo-page'
import XButton from '../components/button.vue'
import { TOAST_OPTION } from './js/toast'

export default {
  name: 'demo-toast',
  components: {
    DemoPage,
    XButton
  },
  data () {
    return {
      option: TOAST_OPTION
    }
  },
  methods: {
    open () {
      this.$toast({
        message: `<strong>星星超可爱!</strong>`,
        enableHtml: true,
        showClose: true
      })
    },
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

<style scoped lang="less">
@import url('../css/docs-demo');
</style>
