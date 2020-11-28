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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

try {
  //单元测试
  {
    const  Constructor = Vue.extend(XButton)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount() // 挂载实例
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#x-setting')
    vm.$el.remove() // 测试完了之后销毁button
    vm.$destroy()
  }
  {
    const  Constructor = Vue.extend(XButton)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        loading: true
      }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#x-loading')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const  Constructor = Vue.extend(XButton)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const  Constructor = Vue.extend(XButton)
    const vm = new Constructor({
      propsData: {
        icon: 'setting',
        iconPosition: 'right'
      }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const  Constructor = Vue.extend(XButton)
    const vm = new Constructor({
      propsData: {
        icon: 'setting'
      }
    })
    vm.$mount()
    let spy = chai.spy(function(){}) // 间谍函数
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called // 期望这个间谍函数被调用
    vm.$el.remove()
    vm.$destroy()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach((error) => {
    console.error(error.message)
  })
}
