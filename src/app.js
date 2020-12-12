import Vue from 'vue'
import  Button from './button'
import  Icon from './icon'
import  ButtonGroup from './button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'

Vue.component('x-button', Button)
Vue.component('x-button-group', ButtonGroup)
Vue.component('x-icon', Icon)
Vue.component('x-input', Input)
Vue.component('x-row', Row)
Vue.component('x-col', Col)

new Vue ({
  el: '#app',
  data() {
    return {
      loading1: false,
      value: ''
    }
  },
  methods: {
    inputChange (e) {
      console.log(e.target.value)
    },
    inputEvent (e) {
      console.log(e)
    }
  }
})
