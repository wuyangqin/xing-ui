<template>
  <div class="toast flex-box" ref="toast">
    <div class="message">
      <slot></slot>
    </div>
    <div class="line" ref="line" v-if="showClose"></div>
    <div class="close-button flex-box" v-if="showClose" @click.stop="clickCloseButton">
      <span v-if="closeButton.text">{{closeButton.text}}</span>
      <x-icon v-if="closeButton.icon" :name="closeButton.icon"></x-icon>
    </div>
  </div>
</template>

<script>
import XIcon from '../icon'
export default {
  name: 'XToast',
  components: {
    XIcon
  },
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    showClose: {
      type: Boolean,
      default: false
    },
    closeButton: {
      type: Object,
      default: () => ({
        text: '关闭',
        icon: '',
        onClose: () => {}
      })
    }
  },
  computed: {
  },
  created () {
    if (this.duration) {
      this.close()
    }
  },
  mounted () {
    this.updateStyle()
  },
  methods: {
    updateStyle () {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
      })
    },
    clickCloseButton () {
      this.close()
      if (this.closeButton && this.closeButton.onClose) {
        this.closeButton.onClose(this)
      }
    },
    close () {
      setTimeout(() => {
        this.$el.remove()
        this.$destroy()
      }, this.duration)
    }
  }
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
  padding: 0 1.2em;
  box-sizing: border-box;
  color: @toast-color;
  font-size: @font-size-md;
  line-height: 2;
  min-height: 40px;
  .message { padding: 8px 1.2em 8px 0; flex-shrink: 0; }
  .close-button {
    flex-shrink: 0;
    > span { padding-left: 1.2em; flex-shrink: 0}
  }
  .line {
    width: 1px;
    background: @gray-7;
    flex-shrink: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
