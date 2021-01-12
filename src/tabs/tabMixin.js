const tabMixin = {
  inject: ['tabsBus'],
  computed: {
    tabNavWrapperClasses () {
      let { tabPosition } = this.tabsBus
      return [
        `tab-${tabPosition}`
      ]
    },
    isVertical () {
      let { tabPosition } = this.tabsBus
      return tabPosition === 'left' || tabPosition === 'right'
    }
  }
}

export default tabMixin
