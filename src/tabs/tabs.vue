<template>
  <div class="x-tabs">
    <div class="x-tab__header">
      <tab-nav></tab-nav>
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
    }
  },
  data () {
    return {
      tabsBus: this
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.x-tabs {
  .x-tab__header {
    margin-bottom: @padding-xs;
  }
}
</style>
