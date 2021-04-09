<template>
  <div class="xx-cascader-item" :style="{ height: height + 'px' }">
    <ul class="xx-cascader-item-left x-scrollbar">
      <li class="label" v-for="item in source" @click="selectedItem=item" :key="item.name">
        <span>{{ item.name }}</span>
        <x-icon v-if="item.children" name="right"></x-icon>
      </li>
    </ul>
    <div class="xx-cascader-item-right" v-if="rightItems">
      <x-cascader-items :source="rightItems"></x-cascader-items>
    </div>
  </div>
</template>

<script>
import XIcon from '../icon'
import cascaderMixins from "@/components/cascader/cascaderMixins";

export default {
  name: 'xCascaderItems',
  mixins:[cascaderMixins],
  components: {
    XIcon
  },
  computed: {
    rightItems() {
      const {selectedItem} = this
      return selectedItem && selectedItem.children ? selectedItem.children : null
    }
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {}
}
</script>

<style lang="less">
@import url('../../css/xing-ui');

.xx-cascader-item {
  &:extend(.flex-box);
  align-items: flex-start;
  &-left{
    height: 100%;
    padding: .3em 0;
    overflow: auto;
    .label {
      min-width: @cascader-popover-min-width;
      padding: .5em 1em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      white-space: nowrap;
      .xx-icon {
        font-size: @font-size-sm13;
        color: @gray-5 !important;
      }
    }
  }
  &-right {
    border-left: @main-border;
  }

}
</style>
