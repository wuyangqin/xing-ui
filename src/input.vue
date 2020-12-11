<template>
  <div class="x-input-wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" :class="{disabled, readonly}"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)"/>
    <template v-if="error">
      <x-icon name="warning" class="icon-error"></x-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import XIcon from './icon'

export default {
  components: {
    XIcon
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
    },
    error: {
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
  &.error {
    > input {
      border-color: @red;
    }
    .icon-error {
      width: 1.2em;
      height: 1.2em;
    }
  }
}
</style>
