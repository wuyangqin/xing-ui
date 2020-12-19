const expect = chai.expect;
import Vue from 'vue'
import Container from '../src/layout/container'
import Aside from '../src/layout/aside'
import Header from '../src/layout/header'
import Footer from '../src/layout/footer'
import Main from '../src/layout/footer'

Vue.config.productionTip = false
Vue.config.devtools = false

describe ('container', () => {
  it ('存在.', () => {
    expect(Container).to.be.ok
  })
  describe ('Props', () => {
    const Constructor = Vue.extend(Container)
    let vm
    const div = document.createElement('div')
    document.body.appendChild(div)
    afterEach (() => {
      div.remove()
      vm.$destroy()
    })
    it ('container可以接收direction', () => {
      vm = new Constructor({
        propsData: {
          direction: 'horizontal'
        }
      }).$mount(div)
      const element = vm.$el
      expect(getComputedStyle(element).flexDirection).to.equal('row')
    })
  })
  describe ('promsRules', () => {
    it ('有aside组件时为row', (done) => {
      Vue.component('x-container', Container)
      Vue.component('x-aside', Aside)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <x-container>
          <x-aside ></x-aside>
        </x-container>
      `
      const vm = new Vue({
        el: div
      })
      setTimeout (() => {
        const container = vm.$el.querySelector('.x-container')
        expect(getComputedStyle(container).flexDirection).to.equal('row')
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })
  })
})

describe('layout-children', () => {
  it ('Aside存在.', () => {
    expect(Aside).to.be.ok
  })
  it ('Header存在.', () => {
    expect(Header).to.be.ok
  })
  it ('Main存在.', () => {
    expect(Main).to.be.ok
  })
  it ('Footer存在.', () => {
    expect(Footer).to.be.ok
  })
  describe ('Props', () => {
    it ('header/footer可以接收height, aside可以接收weight', (done) => {
      Vue.component('x-container', Container)
      Vue.component('x-header', Header)
      Vue.component('x-footer', Footer)
      Vue.component('x-aside', Aside)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <x-container>
          <x-aside width="80"></x-aside>
          <x-header height="70"></x-header>
          <x-footer height="60"></x-footer>
        </x-container>
      `
      const vm = new Vue({
        el: div
      })
      setTimeout (() => {
        const aside = vm.$el.querySelector('.container-aside')
        const header = vm.$el.querySelector('.container-header')
        const footer = vm.$el.querySelector('.container-footer')
        expect(getComputedStyle(aside).width).to.equal('80px')
        expect(getComputedStyle(header).height).to.equal('70px')
        expect(getComputedStyle(footer).height).to.equal('60px')
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })
  })
})
