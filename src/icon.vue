<template>
  <svg class="x-icon">
    <use :xlink:href="`#x-${name}`"></use>
  </svg>
</template>

<script>
export default {
  components: {
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="less">
.x-icon {
  width: 1em;
  height: 1em;
  fill:currentColor;
  color: #fff;
}
</style>
