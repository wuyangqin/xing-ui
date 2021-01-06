<template>
  <div class="x-tab__item"
       v-show="tabsBus.selectTab === name">
    <slot></slot>
  </div>
</template>

<script>
// import tabMixin from "./tabMixin";

export default {
  name: 'XTab',
  // mixins: [tabMixin],
  components: {
  },
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
  data () {
    return {
    }
  },
  created () {
    this.tabsBus.$emit('getTabProps', this.$props)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
