import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Input from '../../src/components/input'
import DemoClear from '../demo/demo-input-clear'

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
    it('可以设置左右icon',()=>{
      wrapper = mount(Input, {
        propsData: {
          rightIcon: 'down',
          leftIcon: 'check'
        }
      })
      const em = wrapper.vm.$el
      const rightIcon = em.querySelector('.right-icon').querySelector('use')
      const leftIcon = em.querySelector('.left-icon').querySelector('use')
      expect(rightIcon.getAttribute('xlink:href')).to.equal('#x-down')
      expect(leftIcon.getAttribute('xlink:href')).to.equal('#x-check')
    })
  })
  describe('slots',()=>{
    let wrapper
    afterEach(()=>{
      wrapper.destroy()
    })
    it('left-icon && right-icon',() => {
      wrapper = mount(Input, {
        slots: {
          ['right-icon']: 'right',
          ['left-icon']: 'left'
        }
      })
      const leftIconSlot = wrapper.find('.left')
      const rightIconSlot = wrapper.find('.right')
      expect(leftIconSlot.text()).to.eq('left')
      expect(rightIconSlot.text()).to.eq('right')
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
  describe('设置clearable 及 触发clear事件',() =>{
    let wrapper
    beforeEach(() => {
      wrapper = mount(DemoClear)
      wrapper.find('input').setValue('开心')
    })
    afterEach(() => {
      wrapper.destroy()
    })
    it('可以设置clearable', () => {
      const vm = wrapper.vm
      let valueBeforeClear = vm.inputValue
      const clearIcon = wrapper.find('.clear-icon')
      expect(clearIcon.exists()).to.eq(true)
      wrapper.find('.clear-icon').trigger('click')
      expect(valueBeforeClear).to.eq('开心')
      expect(vm.inputValue).to.eq('')
    })
    it('点击清除按钮 触发clear事件',()=>{
      const demoInput = wrapper.vm.$refs.demoInput
      const callback = sinon.fake()
      demoInput.$on('clear',callback)
      wrapper.find('.clear-icon').trigger('click')
      expect(callback).to.have.been.called
    })
  })
})
