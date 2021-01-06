<template>
  <div class="x-tabs">
    <tab-nav></tab-nav>
    <div class="x-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TabNav from './tabNav'

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

</style>
