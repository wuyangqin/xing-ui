<template>
  <div class="x-tab-nav__wrapper">
    <div class="x-tab-nav__scroll flex-box">
      <x-tab-bar :width="navWidth" :nav-left="navLeft"></x-tab-bar>
      <div class="x-tab-nav__item"
           v-for="(nav, index) in tabPanes" :key="index"
           :ref="`tab-${nav.name}`"
           :id="`tab-${nav.name}`"
           :class="tabNavClasses(nav)"
           @click="clickNavItem(nav, index)">
        {{nav.label}}
      </div>
    </div>
  </div>
</template>

<script>
import tabMixin from "./tabMixin";
import XTabBar from "./tab-bar";

export default {
  name: 'XTabNav',
  mixins: [tabMixin],
  components: {
    XTabBar
  },
  data () {
    return {
      navWidth: 0,
      navLeft: 0
    }
  },
  mounted () {
    let tabNames = this.tabPanes.map(item => item.name)
    let index = tabNames.indexOf(this.tabsBus.selectTab)
    this.getNavWidth(index)
  },
  methods: {
    tabNavClasses (nav) {
      let { name, disabled } = nav
      let { selectTab } = this.tabsBus
      return [
          selectTab === name ? 'nav-active' : '',
          disabled ? 'nav-disabled' : ''
      ]
    },
    getNavWidth (index) {
      this.$nextTick(() => {
        let { selectTab } = this.tabsBus
        let { tabPanes } = this
        let tabNames = tabPanes.map(item => item.name)
        let width = index === 0 || index === tabPanes.length - 1 ? 16 : 32
        let navTab = this.$refs[`tab-${selectTab}`][0]
        this.navWidth = navTab.getBoundingClientRect().width - width
        this.navLeft = navTab.offsetLeft + ( index === 0 ? 0 : 16 )
      })
    },
    clickNavItem (nav, index) {
      let { name, disabled } = nav
      if (disabled) { return }
      this.tabsBus.selectTab = name
      this.getNavWidth(index)
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.x-tab-nav__wrapper {
  .x-tab-nav__scroll {
    position: relative;
    height: @item-height-regular;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: @gray-2;
    }
    .x-tab-nav__item {
      box-sizing: border-box;
      padding: 0 @padding-md;
      font-weight: 600;
      font-size: @font-size-md;
      &:nth-of-type(2) { padding-left: 0; }
      &:last-of-type { padding-right: 0;}
      &.nav-active, &:hover { color: @main-theme-color; cursor: pointer; }
      &.nav-disabled { color: @gray-3; cursor: default; }
    }
  }
}
</style>
