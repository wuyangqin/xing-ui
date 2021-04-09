<template>
  <div class="container-header" :style="{height: height + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixins from "./layoutMixins.js"

export default {
  name: 'XHeader',
  mixins: [layoutMixins],
  mounted () {
    this.fatherDetermine()
  }
}
</script>

<style lang="less">
</style>
