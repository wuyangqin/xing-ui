<template>
  <div class="x-popover-wrapper" @click.stop="trigger">
    <div class="x-popover-content" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
  .x-popover-content {
    position: absolute;
    bottom: 130%;
    left: 0;
    padding: @padding-base 1em;
    min-width: 120px;
    border: 1px solid @gray-2;
  }
}
</style>
