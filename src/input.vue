<template>
  <div class="x-input-wrapper">
    <input type="text">
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@import url('./css/xing-ui');
.x-input-wrapper {
  display: inline-block;
  font-size: @font-size-md;
  > input {
    height: @item-height-regular;
    border-radius: @border-radius;
    border: @input-border;
    transition: all .3s;
    text-indent: 1em;
    font-size: inherit;
    &:hover {
      border: @input-hover-border;
    }
    &:focus {
      box-shadow: @input-focus;
      border: @input-hover-border;
      outline: none;
    }
  }
}
</style>
