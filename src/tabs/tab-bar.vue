<template>
  <div class="x-tab__active-bar" :class="tabNavWrapperClasses" :style="barStyle">
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
    translate: {
      type: Number,
      default: 0
    }
  },
  computed: {
    barStyle () {
      let { width,translate, isVertical } = this
      let { tabPosition } = this.tabsBus
      let translateStyle = isVertical ?
          {
            top: translate + 'px',
            width: 2 + 'px',
            height: 40 + 'px',
            left: tabPosition === 'left' ? '' : 0,
            right: tabPosition === 'left' ? 0 : ''
          } :
          {
            left: translate + 'px', width: width + 'px'
          }
      return translateStyle
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
  z-index: 99;
  height: 2px;
  background: @main-theme-color;
  transition: all .5s;
}
</style>
