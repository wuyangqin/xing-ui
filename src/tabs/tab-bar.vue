<template>
  <div class="x-tab__active-bar" :style="barStyle">
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
    width: {
      type: Number,
      default: 0
    },
    navLeft: {
      type: Number,
      default: 0
    }
  },
  computed: {
    barStyle () {
      let { width,navLeft } = this
      return {
        width: width + 'px',
        left: navLeft + 'px'
      }
    }
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
@import url('../css/xing-ui');
.x-tab__active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 2px;
  background: @main-theme-color;
  transition: all .5s;
}
</style>
