import Vue from 'vue'
import  XButton from './button'
import  XIcon from './icon'

Vue.component('x-button', XButton)
Vue.component('x-icon', XIcon)

new Vue ({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
})
