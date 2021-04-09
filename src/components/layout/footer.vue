<template>
  <div class="container-footer" :style="{height: height + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
import layoutMixins from "./layoutMixins.js"

export default {
  name: 'XFooter',
  mixins: [layoutMixins],
  mounted () {
    this.fatherDetermine('x-footer')
  }
}
</script>

<style lang="less">
</style>
