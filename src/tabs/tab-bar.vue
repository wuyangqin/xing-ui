<template>
  <div class="x-tab__active-bar">
  </div>
</template>

<script>
import tabMixin from "./tabMixin";

export default {
  name: 'XTabBar',
  mixins: [tabMixin],
  components: {
  },
  props: {
    propName: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
