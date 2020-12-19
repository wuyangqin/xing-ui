<template>
  <div class="container-aside" :style="{width: width + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixins from "./layoutMixins.js"

export default {
  name: 'XAside',
  mixins: [layoutMixins],
  mounted () {
    this.fatherDetermine('x-aside')
  }
}
</script>

<style scoped lang="less">
</style>
