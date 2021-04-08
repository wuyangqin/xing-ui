<template>
  <div class="x-cascader">
    <div class="x-cascader-trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="x-cascader-popover" v-if="popoverVisible">
      <cascader-item v-bind="$props"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascaderItem'

export default {
  name: 'x-cascader',
  components: {
    CascaderItem
  },
  props: {
    source: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      popoverVisible:false,
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
