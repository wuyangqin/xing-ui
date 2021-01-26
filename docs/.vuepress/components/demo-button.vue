<template>
  <div class="demo-button-wrapper">
    <div class="demo-box">
      <x-button>主要按钮</x-button>
      <x-button icon="setting">图标按钮</x-button>
      <x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
    </div>
  </div>
</template>

<script>
import XButton from '../../../src/button.vue'

export default {
  name: 'demo-button',
  components: {
    XButton
  },
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style lang="less">
@import url('../../../src/css/xing-ui');
</style>
