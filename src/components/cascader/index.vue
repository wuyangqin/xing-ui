<template>
  <div class="x-cascader">
    <div class="x-cascader-trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="x-cascader-popover" v-if="popoverVisible">
      <cascader-items v-bind="$props"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascaderItems'

export default {
  name: 'x-cascader',
  components: {
    CascaderItems
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
