<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true
  keys.forEach(key => {
    if (!['span', 'offset'].includes(key)) {
      valid = false
    }
  })
  return valid
}
export default {
  props: {
    span: {
      type: [String, Number],
      default: ''
    },
    offset: {
      type: [String, Number],
      default: ''
    },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  data () {
    return {
      gutter: 0
    }
  },
  methods: {
    createClass (props, className = '') {
      if (!props) {
        return []
      }
      let classArr = []
      if (props.span) {
        classArr.push(`col-${className}${props.span}`)
      }
      if (props.offset) {
        classArr.push(`offset-${className}${props.offset}`)
      }
      return classArr
    }
  },
  computed: {
    colClasses () {
      let { span, offset, ipad, narrowPc, pc, widePc } = this
      let createClass = this.createClass
      return [
        ...createClass({ span, offset }),
        ...createClass(ipad, 'ipad-'),
        ...createClass(narrowPc, 'narrow-pc-'),
        ...createClass(pc, 'pc-'),
        ...createClass(widePc, 'wide-pc-'),
      ]
    },
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.col {
  border-radius: 4px;
  box-sizing: border-box;
}
.col-loop(@index) when (@index > 0) {
  .col-@{index} { width: (@index / 24) * 100%; }
  .col-loop(@index - 1);
}
.col-loop(24);
.offset-loop(@index) when (@index > 0) {
  .offset-@{index} { margin-left: (@index / 24) * 100%; }
  .offset-loop(@index - 1);
}
.offset-loop(24);
@media (min-width: 577px) {
  .offset-ipad-loop(@index) when (@index > 0) {
    .offset-ipad-@{index} { margin-left: (@index / 24) * 100%; }
    .offset-ipad-loop(@index - 1);
  }
  .offset-ipad-loop(24)
}
@media (min-width: 769px) {
  .col-narrow-pc-loop(@index) when (@index > 0) {
    .col-narrow-pc-@{index} { width: (@index / 24) * 100%; }
    .col-narrow-pc-loop(@index - 1);
  }
  .col-narrow-pc-loop(24);
  .offset-narrow-pc-loop(@index) when (@index > 0) {
    .offset-narrow-pc-@{index} { margin-left: (@index / 24) * 100%; }
    .offset-narrow-pc-loop(@index - 1);
  }
  .offset-narrow-pc-loop(24)
}
@media (min-width: 993px) {
  .col-pc-loop(@index) when (@index > 0) {
    .col-pc-@{index} { width: (@index / 24) * 100%; }
    .col-pc-loop(@index - 1);
  }
  .col-pc-loop(24);
  .offset-pc-loop(@index) when (@index > 0) {
    .offset-pc-@{index} { margin-left: (@index / 24) * 100%; }
    .offset-pc-loop(@index - 1);
  }
  .offset-pc-loop(24)
}
@media (min-width: 1201px){
  .col-wide-pc-loop(@index) when (@index > 0) {
    .col-wide-pc-@{index} { width: (@index / 24) * 100%; }
    .col-wide-pc-loop(@index - 1);
  }
  .col-wide-pc-loop(24);
  .offset-wide-pc-loop(@index) when (@index > 0) {
    .offset-wide-pc-@{index} { margin-left: (@index / 24) * 100%; }
    .offset-wide-pc-loop(@index - 1);
  }
  .offset-wide-pc-loop(24)
}

</style>
