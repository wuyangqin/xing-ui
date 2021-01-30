<template>
  <div class="x-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`x-button-group的子元素必须为x-button，但你写的是${name}`)
      }
    }
  }
}
</script>

<style lang="less">
@import url('./css/xing-ui');
.x-button-group {
  display: inline-flex;
  vertical-align: middle;
  .x-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
      border-left: 1px solid rgba(255, 255, 255, .5);
    }
    &:first-child { border-radius: @border-radius 0 0 @border-radius; }
    &:last-child { border-radius: 0 @border-radius @border-radius 0; }
    &:hover { z-index: 999 }
  }
}
</style>
