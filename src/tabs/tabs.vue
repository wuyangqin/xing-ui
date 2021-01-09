<template>
  <div class="x-tabs" :class="tabsClasses">
    <div class="x-tab__header">
      <tab-nav @change="$emit('change', $event)"></tab-nav>
    </div>
    <div class="x-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TabNav from './tab-nav'

export default {
  name: 'XTabs',
  components: {
    TabNav
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    tabPosition: {
      type: String,
      default: top,
      validator (value) {
        return ['top', 'left', 'right', 'bottom'].indexOf(value) > -1
      }
    }
  },
  provide () {
    return {
      tabsBus: this.tabsBus
    }
  },
  computed: {
    selectTab: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    },
    tabsClasses () {
      let { tabPosition } = this
      return [
        `tabs-${tabPosition}`
      ]
    }
  },
  data () {
    return {
      tabsBus: this
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.x-tabs {
  display: flex;
  flex-direction: column;
  .x-tab__header {
    margin-bottom: @padding-xs;
  }
  &.tabs-bottom {
    flex-direction: column-reverse;
    .x-tab__header { margin-top: @padding-xs; }
  }
  &.tabs-left, &.tabs-right {
    flex-direction: row;
    .x-tab__header { height: 100%; }
  }
  &.tabs-left {
    flex-direction: row;
    .x-tab__header { margin-right: @padding-xs; }
  }
  &.tabs-right {
    flex-direction: row-reverse;
    .x-tabs__content { width: 100%; }
    .x-tab__header { margin-left: @padding-xs; flex-shrink: 0; }
  }
}
</style>
