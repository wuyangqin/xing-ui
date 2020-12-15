<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
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
    phone: {
      type: Object,
      validator (value) {
        let keys = Object.keys(value);
        let valid = true
        keys.forEach(key => {
          valid = ['span', 'offset'].includes(key)
        })
        return valid
      }
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colClasses () {
      let { span, offset, phone } = this
      let phoneClass = []
      if (phone) {
        phoneClass = [`col-phone-${phone.span}`,`phone-offset-${phone.offset}`]
      }
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...phoneClass
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
  height: 40px;
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
@media (max-width: 576px) {
  .col-phone-loop(@index) when (@index > 0) {
    .col-phone-@{index} { width: (@index / 24) * 100%; }
    .col-phone-loop(@index - 1);
  }
  .col-phone-loop(24);
  .phone-offset-loop(@index) when (@index > 0) {
    .phone-offset-@{index} { margin-left: (@index / 24) * 100%; }
    .phone-offset-loop(@index - 1);
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  .col-ipad-loop(@index) when (@index > 0) {
    .col-ipad-@{index} { width: (@index / 24) * 100%; }
    .col-ipad-loop(@index - 1);
  }
  .col-ipad-loop(24);
  .ipad-offset-loop(@index) when (@index > 0) {
    .ipad-offset-@{index} { margin-left: (@index / 24) * 100%; }
    .ipad-offset-loop(@index - 1);
  }
}
@media (min-width: 768px) and (max-width: 992px) {
  .col-narrow-pc-loop(@index) when (@index > 0) {
    .col-narrow-pc-@{index} { width: (@index / 24) * 100%; }
    .col-narrow-pc-loop(@index - 1);
  }
  .col-narrow-pc-loop(24);
  .narrow-pc-offset-loop(@index) when (@index > 0) {
    .narrow-pc-offset-@{index} { margin-left: (@index / 24) * 100%; }
    .narrow-pc-offset-loop(@index - 1);
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .col-pc-loop(@index) when (@index > 0) {
    .col-pc-@{index} { width: (@index / 24) * 100%; }
    .col-pc-loop(@index - 1);
  }
  .col-narrow-pc-loop(24);
  .pc-offset-loop(@index) when (@index > 0) {
    .pc-offset-@{index} { margin-left: (@index / 24) * 100%; }
    .pc-offset-loop(@index - 1);
  }
}
@media (min-width: 1201px){
  .col-wide-pc-loop(@index) when (@index > 0) {
    .col-wide-pc-@{index} { width: (@index / 24) * 100%; }
    .col-wide-pc-loop(@index - 1);
  }
  .col-narrow-pc-loop(24);
  .wide-pc-offset-loop(@index) when (@index > 0) {
    .wide-pc-offset-@{index} { margin-left: (@index / 24) * 100%; }
    .wide-pc-offset-loop(@index - 1);
  }
}

</style>
