<template>
  <div class="xx-tab__active-bar" :class="tabNavWrapperClasses" :style="barStyle"></div>
</template>

<script>
import tabMixin from "./tabMixin";

export default {
  name: 'XTabBar',
  mixins: [tabMixin],
  data () {
    return {
      barStyle: {}
    }
  },
  mounted () {
    this.tabsBus.$on('tabBar', (index, navTab) => {
      if (navTab) {
        let { isVertical } = this
        let { tabPosition } = this.tabsBus
        let navTabStyle = window.getComputedStyle(navTab)
        let { paddingLeft, paddingRight } = navTabStyle
        let width = navTab.getBoundingClientRect().width - (parseFloat(paddingLeft) + parseFloat(paddingRight))
        let translate = isVertical ? navTab.offsetTop : navTab.offsetLeft + parseFloat(paddingLeft)
        let style = isVertical ?
            {
              top: `${translate}px`,
              width: '2px',
              height: '40px',
              left: tabPosition === 'left' ? '' : 0,
              right: tabPosition === 'left' ? 0 : ''
            } :
            {
              left: `${translate}px`, width: `${width}px`
            }
        this.barStyle = style
      }
    })
  }
}
</script>

<style lang="less">
@import url('../../css/xing-ui');
.xx-tab__active-bar {
  position: absolute;
  bottom: 0;
  z-index: 99;
  height: @tab-bar-narrow;
  background: @main-theme-color;
  &.tab-top, &.tab-bottom { transition: left @tab-bar-duration, width @tab-bar-duration; }
  &.tab-left, &.tab-right { transition: top @tab-bar-duration }
}
</style>
