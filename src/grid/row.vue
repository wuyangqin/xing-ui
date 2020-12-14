<template>
  <div class="rol" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [String, Number],
      default: ''
    }
  },
  components: {
  },
  mounted () {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="less">
.rol { display: flex}
</style>
