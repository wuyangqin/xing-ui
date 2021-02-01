import Vue from 'vue'
import  Button from './components/button'
import  Icon from './components/icon'
import  ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/grid/row'
import Col from './components/grid/col'
import Container from './components/layout/container'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Main from './components/layout/main'
import Aside from './components/layout/aside'
import actions from './common/action'
import  toast  from './plugin/toast'
import  Tabs  from './components/tabs/tabs'
import  Tab  from './components/tabs/tab'
import XPopover from "./components/popover/index";

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
