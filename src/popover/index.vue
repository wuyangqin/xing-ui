<template>
  <div class="x-popover-wrapper" @click.stop="trigger">
    <div class="x-popover-content" ref="content" v-if="visible" @click.stop>
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
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    trigger () {
      this.visible = !this.visible
      let { visible } = this
      if (visible) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.content)
          let { top, left } = this.$refs.trigger.getBoundingClientRect()
          this.$refs.content.style.top = top + window.scrollY + 'px'
          this.$refs.content.style.left = left + window.scrollX + 'px'
          let triggerHandler = () => {
            this.visible = false
            document.removeEventListener('click', triggerHandler)
          }
          document.addEventListener('click', triggerHandler)
        })
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
  padding: @padding-base 1em;
  min-width: 120px;
  border: 1px solid @gray-2;
  transform: translateY(-130%);
}
</style>
