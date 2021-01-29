<template>
  <pre class="demo-pre" v-highlight><code :class="type">{{ code }}</code></pre>
</template>

<script>

export default {
  name: 'x-ui-docs-pre-code',
  props: {
    code: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'html'
    }
  }

}
</script>

<style scoped lang="less">
@import url('../../css/docs-demo');
</style>
