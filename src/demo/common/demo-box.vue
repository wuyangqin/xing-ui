<template>
  <div class="demo-box-wrapper">
    <h3>{{ title }}</h3>
    <p>{{ introduction }}</p>
    <div class="demo-box"
         :class="{ hover: wrapperHover }"
         @mouseenter="wrapperHover = true"
         @mouseleave="wrapperHover = false">
      <div class="components-box" :class="{ show: codeShow }">
        <slot name="components"></slot>
      </div>
      <div class="code-wrapper" ref="codeWrapper">
        <div ref="codeContent">
          <div class="code-description">
            <slot name="description"></slot>
          </div>
          <pre-code :code="code"></pre-code>
        </div>
      </div>
      <div class="code-show-control flex-box"
           :class="{ hover: controlHover }"
           @mouseenter="controlHover = true"
           @mouseleave="controlHover = false"
           @click="toggleCode">
        <x-icon :name="`${codeShow ? 'up' : 'down'}-fill`"></x-icon>
        <span>{{ codeShow ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import XIcon from '../../icon'
import PreCode from './pre-code'

export default {
  name:'x-ui-demo-box',
  components: {
    XIcon,
    PreCode
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    introduction: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      codeShow: false,
      wrapperHover: false,
      controlHover: false
    }
  },
  mounted () {
    this.getCodeWrapperHeight()
  },
  methods: {
    toggleCode () {
      this.codeShow = !this.codeShow
      this.getCodeWrapperHeight()
    },
    getCodeWrapperHeight () {
      let { codeWrapper, codeContent } = this.$refs
      let { height } = codeContent.getBoundingClientRect()
      codeWrapper.style.height = this.codeShow ? height + 'px' : 0
    }
  }
}
</script>

<style scoped lang="less">
@import url('../../css/docs-demo');
</style>
