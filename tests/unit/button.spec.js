import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Button from '@/components/button'

chai.use(sinonChai)

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
    // expect(1).to.equal(1)
  })
  it('可以设置icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#x-settings')
    wrapper.destroy()
  })
  it('可以设置loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    const vm = wrapper.vm
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#x-loading')
    wrapper.destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Button, {
      attachTo: div,
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    div.remove()
    wrapper.destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Button, {
      attachTo: div,
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    div.remove()
    wrapper.destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})
