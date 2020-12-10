import Vue from 'vue'
import  XButton from './button'
import  XIcon from './icon'
import  ButtonGroup from './button-group'
import XInput from './input'

Vue.component('x-button', XButton)
Vue.component('x-button-group', ButtonGroup)
Vue.component('x-icon', XIcon)
Vue.component('x-input', XInput)

new Vue ({
  el: '#app',
  data() {
    return {
      loading1: false
    }
  },
  methods: {
    inputChange (e) {
      console.log(e.target.value)
    }
  }
})
