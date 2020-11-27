import Vue from 'vue'
import  XButton from './button'
import  XIcon from './icon'
import  ButtonGroup from './button-group'

Vue.component('x-button', XButton)
Vue.component('x-button-group', ButtonGroup)
Vue.component('x-icon', XIcon)

new Vue ({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
})
