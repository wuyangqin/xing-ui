<template>
  <svg class="xx-icon" :style="{color}">
    <use :xlink:href="`#x-${name}`"></use>
  </svg>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  mounted () {
    import('../svg.js').then(icon => {})
  }
}
</script>

<style lang="less">
.xx-icon {
  width: 1em;
  height: 1em;
  fill:currentColor;
  color: currentColor;
}
</style>
