import Vue from 'vue'
import  Button from './button'
import  Icon from './icon'
import  ButtonGroup from './button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Container from './layout/container'
import Header from './layout/header'
import Footer from './layout/footer'
import Main from './layout/main'
import Aside from './layout/aside'
import actions from './common/action'
import  toast  from './plugin/toast'
import  Tabs  from './tabs/tabs'
import  Tab  from './tabs/tab'
import XPopover from "./popover/index";

Vue.component('x-button', Button)
Vue.component('x-button-group', ButtonGroup)
Vue.component('x-icon', Icon)
Vue.component('x-input', Input)
Vue.component('x-row', Row)
Vue.component('x-col', Col)
Vue.component('x-container', Container)
Vue.component('x-header', Header)
Vue.component('x-footer', Footer)
Vue.component('x-main', Main)
Vue.component('x-aside', Aside)
Vue.component('x-tabs', Tabs)
Vue.component('x-tab', Tab)
Vue.component('x-popover', XPopover)

Vue.prototype.xWarning = actions.xWarning
Vue.prototype.xError = actions.xError

Vue.use(toast)

new Vue ({
  el: '#app',
  data() {
    return {
    }
  },
  methods: {
    xxx () {
      console.log('xxx');
    }
  }
})
