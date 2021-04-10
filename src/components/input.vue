<template>
  <div class="xx-input-wrapper" :class="{error}">
    <input :value="value" type="text"
           :style="inputStyle"
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
      <span class="error-message">{{ error }}</span>
    </template>
    <div v-if="hasRightIcon" ref="rightIcons" class="input-icons right">
      <x-icon v-if="rightIcon && !$slots['right-icon']"
              class="right-icon" :name="rightIcon">
      </x-icon>
      <slot v-if="$slots['right-icon']" name="right-icon"></slot>
      <x-icon v-if="clearable" class="clear-icon"
              :class="{'visible': clearIconVisible}"
              name="close-fill"
              @click="clearValue">
      </x-icon>
    </div>
    <div v-if="hasLeftIcon" class="input-icons left">
      <slot v-if="$slots['left-icon']" name="left-icon"></slot>
      <x-icon v-else :name="leftIcon" class="left-icon"></x-icon>
    </div>
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
    },
    clearable: {
      type: Boolean,
      default: false
    },
    rightIcon: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasLeftIcon() {
      return this.leftIcon || this.$slots['left-icon']
    },
    hasRightIcon() {
      return this.clearable || this.rightIcon || this.$slots['right-icon']
    },
    clearIconVisible() {
      return this.value.length > 0 && this.clearable
    },
    inputStyle() {
      const {hasLeftIcon, hasRightIcon} = this
      return {
        paddingRight: hasRightIcon ? '2.5em' : '1em',
        paddingLeft: hasLeftIcon ? '2.5em' : '1em'
      }
    }
  },
  methods: {
    clearValue() {
      this.$emit('input', '')
      this.$emit('clear', '')
    }
  }
}
</script>

<style lang="less">
@import url('../css/xing-ui');

.xx-input-wrapper {
  position: relative;
  display: inline-block;
  font-size: @font-size-md;

  > input {
    height: @item-height-regular;
    border-radius: @border-radius;
    border: @input-border;
    transition: all .3s;
    padding: 0 1em;
    box-sizing: border-box;
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

  .input-icons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: inline-flex;
    align-items: center;

    &.right { right: 1em; }

    &.left { left: 1em; }

    .xx-icon {
      color: @icon-color-light;
      font-size: @font-size-md15;

      &.clear-icon {
        margin-left: @padding-sm;
        display: none;
        transition: all @animate-duration-regular;
        @media (any-hover: hover) {
          &:hover {
            color: @icon-color-dark;
          }
        }

        &.visible { display: inline-block; }
      }
    }
  }
}
</style>
