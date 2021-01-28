<template>
  <div class="demo-button-box">
    <demo-box>
      <x-button>主要按钮</x-button>
      <x-button icon="setting">图标按钮</x-button>
      <x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
    </demo-box>
  </div>
</template>

<script>
import DemoBox from './demo-box'
import XButton from '../button.vue'

export default {
  name: 'demo-button',
  components: {
    DemoBox,
    XButton
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
</style>
