<template>
<!--  <span :class="`xx-icon x-${name}`"></span>-->
  <svg class="xx-icon">
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
.xx-icon {
  width: 1em;
  height: 1em;
  //color: #fff;
  //vertical-align: middle;
  fill:currentColor;
  color: #fff;
}
</style>
