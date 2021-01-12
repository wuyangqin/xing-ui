
<script>
import './tab-nav.less'
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
      initIndex: 0,
      tabPanes: []
    }
  },
  created () {
    this.getTabPanes()
  },
  mounted () {
    let tabNames = this.tabPanes.map(item => item.name)
    this.initIndex = tabNames.indexOf(this.tabsBus.selectTab)
    this.emitToTabBar(this.initIndex)
  },
  updated () {
    this.getTabPanes()
    this.emitToTabBar(this.initIndex)
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
    emitToTabBar (index) {
      this.$nextTick(() => {
        let { selectTab } = this.tabsBus
        let navTab = this.$refs[`tab-${selectTab}`]
        this.tabsBus.$emit('tabBar', index, navTab)
      })
    },
    clickNavItem (nav, index) {
      let { name, disabled } = nav
      if (disabled) { return }
      this.tabsBus.selectTab = name
      this.$emit('change', nav.name)
    },
    getTabPanes () {
      this.tabsBus.$on('getTabPanes', (data) => {
        if (this.tabPanes.indexOf(data) === -1) {
          // console.log(data.$slots.label);
          this.tabPanes.push(data)
        }
      })
    }
  },
  render () {
    const {
      tabPanes,
      tabNavClasses,
      tabNavWrapperClasses,
      clickNavItem
    } = this
    const tabLabels = this._l(tabPanes, (pane, index) => {
      const navClass = tabNavClasses(pane)
      const label = pane.$slots.label || pane.label
      return (
          <div class={['x-tab-nav__item', ...navClass]}
               key={index}
               ref={`tab-${pane.name}`}
               on-click={(ev) => {clickNavItem(pane, index)}}
               >
              {label}
          </div>
      )
    })
    return (
        <div class="x-tab-nav__wrapper">
          <div class={['x-tab-nav__scroll', 'flex-box', ...tabNavWrapperClasses]}>
            <x-tab-bar></x-tab-bar>
            {tabLabels}
          </div>
        </div>
    )
  }
}
</script>
