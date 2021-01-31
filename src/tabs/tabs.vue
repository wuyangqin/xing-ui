<template>
  <div class="x-tabs" :class="tabsClasses">
    <div class="x-tab__header">
      <tab-nav ref="tabNav" :tab-panes="tabPanes" @change="$emit('change', $event)"></tab-nav>
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
      default: 'top',
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
      tabsBus: this,
      tabPanes: []
    }
  },
  created () {
    this.$on('tab-nav-update', this.getTabPanes.bind(null, true))
  },
  mounted () {
    this.getTabPanes()
  },
  updated () {
    this.getTabPanes()
  },
  methods: {
    getTabPanes (isForceUpdate = false) {
      if (this.$slots.default) {
        const paneSlots = this.$slots.default.filter (vnode => vnode.tag &&  vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === 'XTab')
        const tabPanes = paneSlots.map(({ componentInstance }) => componentInstance)
        const panesChanged = !(tabPanes.length === this.tabPanes.length && tabPanes.every((pane, index) => pane === this.tabPanes[index]));
        if (isForceUpdate || panesChanged) {
          this.tabPanes = tabPanes;
        }
      } else if (this.tabPanes.length !== 0) {
        this.tabPanes = [];
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.x-tabs {
  display: flex;
  flex-direction: column;
  .x-tab__header {
    margin-bottom: @tabs-margin-num;
  }
  &.tabs-bottom {
    flex-direction: column-reverse;
    .x-tab__header { margin-top: @tabs-margin-num; }
  }
  &.tabs-left, &.tabs-right {
    flex-direction: row;
    .x-tab__header { height: 100%; }
  }
  &.tabs-left {
    flex-direction: row;
    .x-tab__header { margin-right: @tabs-margin-num; }
  }
  &.tabs-right {
    flex-direction: row-reverse;
    .x-tabs__content { width: 100%; }
    .x-tab__header { margin-left: @tabs-margin-num; flex-shrink: 0; }
  }
}
</style>
