<template>
  <div class="xx-tab__item"
       v-show="tabsBus.selectTab === name">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'XTab',
  inject: ['tabsBus'],
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  updated () {
    this.$parent.$emit('tab-nav-update');
  }
}
</script>
