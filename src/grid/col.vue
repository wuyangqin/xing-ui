<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
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
  components: {
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.col {
  height: 40px;
  background: @gray-2;
  border-radius: 4px;
  width: 50%;
  border: 1px solid @gray-4;
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
