<template>
  <div class="x-popover-wrapper" @click="togglePopover" ref="popover">
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
  data () {
    return {
      visible: true
    }
  },
  methods: {
    positionContent () {
      document.body.appendChild(this.$refs.content)
      let { top, left } = this.$refs.trigger.getBoundingClientRect()
      this.$refs.content.style.top = top + window.scrollY + 'px'
      this.$refs.content.style.left = left + window.scrollX + 'px'
    },
    toggleHandler (e) {
      if (this.$refs.popover !== e.target && !this.$refs.popover.contains(e.target)) {
        this.contentClose()
      }
    },
    contentShow () {
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
    togglePopover (event) {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.visible) {
          this.contentClose()
        } else {
          this.contentShow()
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
  .x-popover-trigger {
    display: inline-block;
  }
}
.x-popover-content {
  position: absolute;
  padding: @padding-sm 1em;
  min-width: 150px;
  max-width: 20em;
  background: @white;
  border: @main-border;
  border-radius: @border-radius;
  //box-shadow: @popover-shadow;
  filter: drop-shadow(@popover-shadow);
  font-size: @font-size-md;
  word-break: break-all;
  margin-top: -10px;
  transform: translateY(-100%);
  &::after, &&::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: 100%;
    left: 10px;
    border: 6px solid transparent;
    border-top-color: @border-color-main;
  }
  &::after {
    top: calc(100% - 1px);
    border-top-color: @white;
  }
}
</style>
