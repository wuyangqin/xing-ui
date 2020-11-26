<template>
  <button class="x-button" :class="{[`icon-${iconPosition}`]:true}">
    <x-icon class="icon" v-if="icon" :name="icon"></x-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  components: {
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
    }
  },
  data() {
    return {
      msg: 'hhh'
    }
  },
  computed: {
    name() {
    }
  },
}
</script>

<style lang="less">
.x-button {
  padding: 0 1em; font-size: var(--font-size); height: var(--button-height);
  border-radius: var(--border-radius); background: var(--main-theme-color); border: none; color: #fff;
  display: inline-flex; justify-content: center; align-items: center;
  vertical-align: middle;
  &:hover { background: var(--main-hover-color); }
  &:active { background: var(--main-active-color); }
  &:focus { outline: none; }
  > .icon { order: 1; margin-right: .3em;}
  > .content { order: 2; }
  &.icon-right {
    > .icon { order: 2; fill:currentColor; color: #fff; margin-left: .3em; margin-right: 0}
    > .content { order: 1 }
  }
}
</style>
