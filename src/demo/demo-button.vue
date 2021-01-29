<template>
  <div class="demo-button-box">
    <demo-box title="基础用法" introduction="基础的按钮用法" :code="sourcecode">
      <template #components>
        <x-button>主要按钮</x-button>
        <x-button icon="setting">图标按钮</x-button>
        <x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
      </template>
      <template #description>
        <p>
          图标可由<code>icon</code>属性设置, loading状态可由<code>loading</code>属性设置。
        </p>
      </template>
    </demo-box>
  </div>
</template>

<script>
import DemoBox from './common/demo-box'
import XButton from '../button.vue'

export default {
  name: 'demo-button',
  components: {
    DemoBox,
    XButton
  },
  data () {
    return {
      loading: true,
      show: true,
      sourcecode: `
<x-button>主要按钮</x-button>
<x-button icon="setting">图标按钮</x-button>
<x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
      `
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/docs-demo');
</style>
