<template>
  <x-popover class="xx-cascader" placement="bottom" content-class-name="cascader-popover">
    <span class="xx-cascader-trigger__wrapper">
    <slot v-if="$slots.default"></slot>
    <x-input v-else class="cascader-input" readonly></x-input>
    </span>
    <cascader-items slot="content" v-bind="$props"></cascader-items>
  </x-popover>
</template>

<script>
import XPopover from '../popover'
import CascaderItems from './cascaderItems'
import XInput from '../input'
import cascaderMixins from "@/components/cascader/cascaderMixins";

export default {
  name: 'x-cascader',
  mixins: [cascaderMixins],
  components: {
    XPopover,
    XInput,
    CascaderItems
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  methods: {}
}
</script>

<style lang="less">
@import url('../../css/xing-ui');

.xx-cascader {
  position: relative;

  &-trigger__wrapper {
    .cascader-input .readonly {
      cursor: default;
      background: @white;

      &:focus {
        border-color: @main-theme-color;
        box-shadow: none;
      }
    }
  }
}

.xx-popover-content.cascader-popover {
  padding: 0;
  max-width: 100%;
  min-width: @cascader-popover-min-width;
}
</style>
