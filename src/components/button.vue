<template>
  <button class="xx-button" :class="buttonClasses" @click="$emit('click')">
    <x-icon class="icon" v-if="icon && !loading" :name="icon"></x-icon>
    <x-icon class="icon xx-loading" v-if="loading" name="loading"></x-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import XIcon from './icon'

export default {
  name: 'x-button',
  components: {
    XIcon
  },
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses () {
      let { iconPosition } = this
      return {
        [`icon-${iconPosition}`]:true,
      }
    }
  }
}
</script>

<style lang="less">
@import url('../css/xing-ui');
.xx-button {
  padding: 0 1em; font-size: @font-size-md; height: @item-height-regular;
  border-radius: @border-radius; background: @main-theme-color; border: none; color: #fff;
  display: inline-flex; justify-content: center; align-items: center;
  vertical-align: middle;
  @media (any-hover: hover){ // 解决移动端hover事件样式影响问题
    &:hover { background: @main-hover-color;}
  }
  &:active { background: @main-active-color; }
  &:focus { outline: none; }
  > .icon { order: 1; margin-right: .3em;}
  > .content { order: 2; }
  &.icon-right {
    > .icon { order: 2; fill:currentColor; color: #fff; margin-left: .3em; margin-right: 0}
    > .content { order: 1 }
  }
}
</style>
