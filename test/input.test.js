const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe ('Input', () => {
  it ('存在.', () => {
    expect(Input).to.be.ok
  })
  describe ('Props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach (() => {
      vm.$destroy()
    })
    it ('可以接收value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it ('可以设置disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it ('可以设置readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it ('可以设置error', () => {
      vm = new Constructor({
        propsData: {
          error: 'error'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#x-warning')
      const errorMessage = vm.$el.querySelector('.error-message')
      expect(errorMessage.innerText).to.equal('error')
    })
  })
  describe('Events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach (() => {
      vm.$destroy()
    })
    it ('支持 change input focus blur', () => {
      ['change', 'input', 'focus', 'blur'].forEach(eventName => {
        vm = new Constructor().$mount()
        const callback = sinon.fake(); // 声明一个callback 是sinon提供的假函数
        let event = new Event(eventName);
        vm.$on(eventName, callback)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})
