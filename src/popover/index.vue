<template>
  <div class="x-popover-wrapper" ref="popover">
    <div class="x-popover-content" :class="contentClasses" ref="content" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div class="x-popover-trigger" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'XPopover',
  components: {
  },
  props: {
    placement: {
      type: String,
      default: 'top',
      validator (value) {
        return [ 'top', 'left', 'bottom', 'right' ].indexOf(value) > -1
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return [ 'click', 'hover' ].indexOf(value) > -1
      }
    }
  },
  computed: {
    contentClasses () {
      let { placement } = this
      return [
          `popover-content__${placement}`
      ]
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    let { popover } = this.$refs
    switch (this.trigger) {
      case 'click':
        popover.addEventListener('click', this.onClick)
        break
      case 'hover':
        popover.addEventListener('mouseenter', this.contentOpen)
        popover.addEventListener('mouseleave', this.contentClose)
        break
    }
  },
  destroyed () {
    let { popover } = this.$refs
    switch (this.trigger) {
      case 'click':
        popover.removeEventListener('click', this.onClick)
        break
      case 'hover':
        popover.removeEventListener('mouseenter', this.contentOpen)
        popover.removeEventListener('mouseleave', this.contentClose)
        break
    }
  },
  methods: {
    positionContent () {
      document.body.appendChild(this.$refs.content)
      const { content, trigger } = this.$refs
      const { top, left, height, width } = trigger.getBoundingClientRect()
      const { placement } = this
      const { height:contentHeight } = content.getBoundingClientRect()
      const leftRightTop = top - ( contentHeight - height ) / 2
      let positions = {
        top: { top, left },
        bottom: { top: top + height, left },
        left: { top: leftRightTop, left },
        right: { top: leftRightTop, left: left + width }
      }
      content.style.top = positions[placement].top + window.scrollY + 'px'
      content.style.left = positions[placement].left + window.scrollX + 'px'
    },
    toggleHandler (e) {
      if (this.$refs.popover !== e.target && !this.$refs.popover.contains(e.target)) {
        this.contentClose()
      }
    },
    contentOpen () {
      this.visible = true
      setTimeout(() => {
        this.positionContent()
        document.addEventListener('click', this.toggleHandler)
      })
    },
    contentClose () {
      this.visible = false
      document.removeEventListener('click', this.toggleHandler)
    },
    onClick (event) {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.visible) {
          this.contentClose()
        } else {
          this.contentOpen()
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/xing-ui.less');

.x-popover-wrapper {
  position: relative;
  display: inline-block;
  font-size: @font-size-md;
  .x-popover-trigger { display: inline-block; }
}
.x-popover-content {
  position: absolute;
  padding: @padding-sm 1em;
  min-width: 150px;
  max-width: 20em;
  background: @white;
  border: @main-border;
  border-radius: @border-radius;
  filter: drop-shadow(@popover-shadow);
  font-size: @font-size-md;
  word-break: break-all;
  &::after, &&::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
  }
  &.popover-content__top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::after, &&::before { left: 10px; }
    &::before { top: 100%; border-top-color: @border-color-main; }
    &::after { top: calc(100% - 1px); border-top-color: @white; }
  }
  &.popover-content__left {
    transform: translateX(-105%);
    &::after, &&::before { top: 50%; transform: translateY(-50%);}
    &::before { left: 100%; border-left-color: @border-color-main; }
    &::after { left: calc(100% - 1px); border-left-color: @white; }
  }
  &.popover-content__right {
    margin-left: @padding-sm + 2;
    &::after, &&::before { top: 50%; transform: translateY(-50%);}
    &::before { right: 100%; border-right-color: @border-color-main; }
    &::after { right: calc(100% - 1px); border-right-color: @white; }
  }
  &.popover-content__bottom {
    margin-top: 10px;
    &::after, &&::before { left: 10px; }
    &::before { bottom: 100%; border-bottom-color: @border-color-main; }
    &::after { bottom: calc(100% - 1px); border-bottom-color: @white; }
  }
}
</style>
