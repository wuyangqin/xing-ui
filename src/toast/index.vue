<template>
  <div class="toast">
<!--    <transition name="fade">-->
      <slot></slot>
<!--    </transition>-->
  </div>
</template>

<script>
export default {
  name: 'XToast'
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui');
.toast {
  position: fixed;
  top: @padding-lg;
  left: 50%;
  transform: translateX(-50%);
  background: @toast-bg;
  border-radius: @border-radius;
  box-shadow: @toast-box-shadow;
  padding: 0 1.5em;
  color: @toast-color;
  font-size: @font-size-md;
  line-height: 2;
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
