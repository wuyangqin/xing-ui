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

Vue.prototype.xWarning = actions.xWarning
Vue.prototype.xError = actions.xError

new Vue ({
  el: '#app',
  data() {
    return {
      loading1: false,
      value: ''
    }
  },
  methods: {
  }
})
