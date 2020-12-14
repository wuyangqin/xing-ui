<template>
  <div class="col" :class="[span && `col-${span}`]" :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
    <div style="border: 1px solid #ccc;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    colStyle () {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  },
  mounted () {
    this.$nextTick(()=> {

    // console.log(this)
    })
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.col {
  height: 40px;
  //background: @gray-2;
  //border: 1px solid @gray-4;
  border-radius: 4px;
  width: 50%;
  box-sizing: border-box;
}
.col-loop(@index) when (@index > 0) { /* recursive mixin with guard expression - condition */
  /* the statement */
  .col-@{index} {
    width: (@index / 24) * 100%;
  }
  /* end of the statement */
  .col-loop(@index - 1); /* the next iteration's call - final-expression*/
}
.col-loop(24);
</style>
