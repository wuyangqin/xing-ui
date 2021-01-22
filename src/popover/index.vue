<template>
  <div class="x-popover-wrapper" @click="triggle">
    <div class="x-popover-content" v-if="visible">
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
    triggle () {
      this.visible = !this.visible
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
    bottom: 40px;
    left: 0;
    padding: @padding-base 1em;
    min-width: 120px;
    border: 1px solid @gray-2;
  }
}
</style>
