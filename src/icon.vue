<template>
  <svg class="xx-icon" :style="{color}">
    <use :xlink:href="`#x-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  components: {
  },
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
}
</script>

<style lang="less" scoped>
.xx-icon {
  width: 1em;
  height: 1em;
  fill:currentColor;
  color: currentColor;
}
</style>
