import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Input from '../../src/components/input'

chai.use(sinonChai)

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  describe('Props', () => {
    let wrapper
    afterEach(() => {
      wrapper.destroy()
    })
    it('可以接收value', () => {
      wrapper = shallowMount(Input, {
        propsData: {
          value: '1234'
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('可以设置disabled', () => {
      wrapper = shallowMount(Input, {
        propsData: {
          disabled: true
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('可以设置readonly', () => {
      wrapper = shallowMount(Input, {
        propsData: {
          readonly: true
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('可以设置error', () => {
      wrapper = mount(Input, {
        propsData: {
          error: 'error'
        }
      })
      const el = wrapper.vm.$el
      const useElement = el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#x-warning')
      const errorMessage = el.querySelector('.error-message')
      expect(errorMessage.innerText).to.equal('error')
    })
    it('可以设置placeholder', () => {
      wrapper = shallowMount(Input, {
        propsData: {
          placeholder: '请输入内容'
        }
      })
      const inputElement = wrapper.vm.$el.querySelector('input')
      expect(inputElement.placeholder).to.equal('请输入内容')
    })
  })
  describe('Events', () => {
    it('支持 change input focus blur事件', () => {
      ['change', 'input', 'focus', 'blur'].forEach(eventName => {
        const wrapper = mount(Input)
        const vm = wrapper.vm
        const callback = sinon.fake(); // 声明一个callback 是sinon提供的假函数
        let event = new Event(eventName);
        vm.$on(eventName, callback)
        Object.defineProperty(
          event, 'target', {
            value: {value: 'hi'}, enumerable: true
          }
        )
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
        wrapper.destroy()
      })
    })
  })
})
