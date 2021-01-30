<template>
  <demo-page class="demo-button-box" :option="demoOption">
    <template #primary>
      <x-button>主要按钮</x-button>
      <x-button icon="setting">图标按钮</x-button>
      <x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
    </template>
    <template #group>
      <x-button-group>
        <x-button icon="left">上一页</x-button>
        <x-button icon="right" icon-position="right">下一页</x-button>
      </x-button-group>
      <x-button-group>
        <x-button icon="download"></x-button>
        <x-button icon="setting"></x-button>
        <x-button icon="thumbs-up"></x-button>
      </x-button-group>
    </template>
  </demo-page>
</template>

<script>
import DemoPage from './common/demo-page'
import XButton from '../button.vue'
import XButtonGroup from '../button-group'
import { BUTTON_OPTION } from './js/button'

export default {
  name: 'demo-button',
  components: {
    DemoPage,
    XButton,
    XButtonGroup
  },
  data () {
    return {
      loading: true,
      demoOption: BUTTON_OPTION
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/docs-demo');
</style>
