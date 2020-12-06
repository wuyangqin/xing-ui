<template>
  <div class="x-input-wrapper">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" :class="{disabled, readonly}">
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
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
    line-height: @item-height-regular;
    &:hover {
      border: @input-hover-border;
    }
    &:focus {
      box-shadow: @input-focus;
      border: @input-hover-border;
      outline: none;
    }
    &.disabled, &.readonly {
      color: @gray-5;
      background: @gray-1;
    }
    &.disabled {
      cursor: not-allowed;
      &:hover {
        border: @input-border;
      }
    }
  }
}
</style>
