import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Cascader from '../../src/components/cascader/index'
import {source} from "../demo/cascaderSource";

chai.use(sinonChai)

describe('Cascader', () => {
  it('存在.', () => {
    expect(Cascader).to.be.ok
  })
  describe('Props', () => {
    let wrapper
    afterEach(() => {
      wrapper.destroy()
    })
    it('可以设置默认值', () => {
      wrapper = shallowMount(Cascader, {
        propsData: {
          value: ['zhejiang', 'hangzhou', 'xiacheng'],
          source
        }
      })
      expect(wrapper.vm.selectedLabels).to.eq('浙江 / 杭州 / 下城')
    })
    it('可以设置height', async () => {
      wrapper = mount(Cascader, {
        propsData: {
          height: 200,
          source
        }
      })
      wrapper.find('.xx-popover-trigger').trigger('click')
      await wrapper.vm.$nextTick()
      const cascaderItem = document.querySelector('.xx-cascader-item')
      expect(cascaderItem.style.height).to.eq('200px')
    })
    it('lazyLoad方法被正常触发', async () => {
      const callback = sinon.fake()
      wrapper = mount(Cascader, {
        propsData: {
          source,
          lazyLoad: callback
        }
      })
      wrapper.find('.xx-popover-trigger').trigger('click')
      await wrapper.vm.$nextTick()
      wrapper.vm.$refs.cascaderNodes.$emit('select', [{label: 'changsha'}])
      expect(callback).to.have.been.called
    })
    
    it('可以设置clearable, 点击清除按钮触发clear事件', () => {
      wrapper = mount(Cascader, {
        propsData: {
          value: ['hunan', 'changsha'],
          clearable: true,
          source
        }
      })
      const callback = sinon.fake()
      const vm = wrapper.vm
      vm.$on('clear', callback)
      const clearButton = wrapper.find('.clear-icon')
      expect(clearButton.exists()).to.eq(true)
      clearButton.trigger('click')
      expect(vm.selectedLabels).to.eq('')
      expect(callback).to.have.been.called
    })
    describe('options',() => {
      let value=['hunan', 'changsha']
      it('可以设置label',() => {
        const source = [{
          name: '湖南',
          value: 'hunan',
          children: [
            {
              name: '长沙',
              value: 'changsha'
            }
          ]
        }]
        wrapper = shallowMount(Cascader, {
          propsData: {
            value,
            source,
            options:{ label:'name' }
          }
        })
        expect(wrapper.vm.selectedLabels).to.eq('湖南 / 长沙')
      })
      it('可以设置children',()=>{
        const source = [{
          label: '湖南',
          value: 'hunan',
          subNode: [
            {
              label: '长沙',
              value: 'changsha'
            }
          ]
        }]
        wrapper = shallowMount(Cascader, {
          propsData: {
            value,
            source,
            options:{ children:'subNode' }
          }
        })
        expect(wrapper.vm.selectedLabels).to.eq('湖南 / 长沙')
      })
      it('可以设置value',()=>{
        const source = [{
          label: '湖南',
          id: 'hunan',
          children: [
            {
              label: '长沙',
              id: 'changsha'
            }
          ]
        }]
        wrapper = shallowMount(Cascader, {
          propsData: {
            value,
            source,
            options:{ value:'id' }
          }
        })
        expect(wrapper.vm.selectedLabels).to.eq('湖南 / 长沙')
      })
      it('可以设置isLeaf',async()=>{
        const source = [{
          label: '湖南',
          value: 'hunan',
          leaf:true,
          children: [
            {
              label: '长沙',
              value: 'changsha'
            }
          ]
        }]
        wrapper = mount(Cascader, {
          propsData: {
            value:[],
            source,
            options:{ isLeaf:'leaf' }
          }
        })
        const {vm} = wrapper
        wrapper.find('.xx-popover-trigger').trigger('click')
        await vm.$nextTick()
        wrapper.find('.label').trigger('click')
        expect(wrapper.vm.selectedLabels).to.eq('湖南')
      })
    })
  })
  describe('Events', () => {
    let wrapper
    afterEach(() => {
      wrapper.destroy()
    })
    it('选中最后一个叶子节点才触发change事件', async () => {
      const callback = sinon.fake()
      wrapper = mount(Cascader, {
        propsData: {
          source
        }
      })
      const {vm} = wrapper
      vm.$on('change', callback)
      wrapper.find('.xx-popover-trigger').trigger('click')
      await vm.$nextTick()
      wrapper.find('.label').trigger('click')
      expect(callback).to.have.not.been.called
      await vm.$nextTick()
      wrapper.find('.xx-cascader-item-right .label').trigger('click')
      expect(callback).to.have.been.called
      expect(vm.selectedLabels).to.eq('湖南 / 长沙')
    })
  })
})
