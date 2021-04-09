<template>
  <div class="xx-input-wrapper" :class="{error}">
    <input :value="value" type="text"
           :class="{ disabled, readonly }"
           :disabled="disabled"
           :readonly="readonly"
           :placeholder="placeholder"
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
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
@import url('../css/xing-ui');
.xx-input-wrapper {
  display: inline-block;
  font-size: @font-size-md;
  > input {
    height: @item-height-regular;
    border-radius: @border-radius;
    border: @input-border;
    transition: all .3s;
    text-indent: 1em;
    font-size: inherit;
    color: @gray-7;
    line-height: @item-height-regular;
    &::placeholder { color: @gray-5; }
    @media (any-hover: hover) {
      &:hover {
        border: @input-hover-border;
      }
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
      border-color: @error;
    }
    .icon-error {
      width: 1.2em;
      height: 1.2em;
      color: @error;
    }
  }
}
</style>
