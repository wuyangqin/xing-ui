<template>
  <div class="container-main">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixins from "./layoutMixins.js"

export default {
  name: 'XMain',
  mixins: [layoutMixins],
  mounted () {
    this.fatherDetermine('x-main')
  }
}
</script>

<style scoped lang="less">
.container-main {
  flex-grow: 1;
}
</style>
