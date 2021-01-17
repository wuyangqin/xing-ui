const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import Tab from '../src/tabs/tab'
Vue.component('x-tabs', Tabs)
Vue.component('x-tab', Tab)

Vue.config.productionTip = false
Vue.config.devtools = false

describe ('Tabs', () => {
  it ('Tabs存在.', () => {
    expect(Tabs).to.be.ok
  })
  describe ('props', () => {
    const Constructor = Vue.extend(Tabs)
    let vm
    it ('可以接收value', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <x-tabs value="kaixin">
          <x-tab label="开心" name="kaixin"></x-tab>
          <x-tab label="快乐" name="kuaile"></x-tab>
        </x-tabs>
      `
      const vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        const activeNavBar = vm.$el.querySelectorAll('.nav-active')
        expect(activeNavBar.length).to.eq(1)
        expect(activeNavBar[0].innerHTML).to.eq('开心')
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })
    it ('可以接收tabPosition', () => {
      vm = new Constructor({
        propsData: {
          value: '1',
          tabPosition: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('tabs-bottom')).to.eq(true)
      vm.$destroy()
    })
  })
  describe ('events', () => {
    it ('切换事件change被触发', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <x-tabs ref="tabs" v-model="selectTab">
          <x-tab label="开心" name="kaixin"></x-tab>
          <x-tab label="快乐" name="kuaile"></x-tab>
        </x-tabs>
      `
      const vm = new Vue({
        el: div,
        data () {
          return {
            selectTab: 'kaixin'
          }
        }
      })
      vm.$nextTick(() => {
        const tabs = vm.$refs.tabs
        const tabNav = tabs.$refs.tabNav.$refs['tab-kuaile']
        const callback = sinon.fake()
        tabs.$on('change', callback)
        tabNav.click()
        expect(callback).to.have.been.calledWith('kuaile')
        expect(vm.selectTab).to.eq('kuaile')
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })
  })
})
