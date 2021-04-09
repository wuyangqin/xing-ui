<template>
  <div class="xx-cascader-item" :style="{ height: height + 'px' }">
    <ul class="xx-cascader-item-left x-scrollbar">
      <li class="label" :class="getCascaderItemClasses(item)"
          v-for="item in source" :key="item.name"
          @click="onClickCascaderItem(item)">
        <span>{{ item.name }}</span>
        <x-icon v-if="item.children" name="right"></x-icon>
      </li>
    </ul>
    <div class="xx-cascader-item-right" v-if="rightItems">
      <x-cascader-items v-model="newValue" :source="rightItems" :level="level+1"
                        @closePopover="$listeners.closePopover">
      </x-cascader-items>
    </div>
  </div>
</template>

<script>
import XIcon from '../icon'
import cascaderMixins from "@/components/cascader/cascaderMixins";

export default {
  name: 'xCascaderItems',
  mixins: [cascaderMixins],
  components: {
    XIcon
  },
  computed: {
    rightItems() {
      const {level, newValue} = this
      const currentItem = newValue[level]
      return currentItem && currentItem.children ? currentItem.children : null
    }
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    getCascaderItemClasses(item) {
      const {newValue, level, selectedItem} = this
      const currentItem = newValue[level]
      const isSelected = (currentItem)=> currentItem && item.value === currentItem.value
      return {
        'active': isSelected(currentItem),
        'focus': isSelected(selectedItem)
      }
    },
    onClickCascaderItem(item) {
      this.$parent.selectedItem = null;
      this.selectedItem = item
      this.newValue.splice(this.level)
      this.newValue.push(item)
      // console.log(this.newValue, 'newValue');
      const {closePopover} = this.$listeners
      if (!item.children) {
        closePopover()
      }
    }
  }
}
</script>

<style lang="less">
@import url('../../css/xing-ui');

.xx-cascader-item {
  &:extend(.flex-box);
  align-items: flex-start;

  &-left {
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
      @media (any-hover: hover) {
        &:hover {
          background: @gray-1;
        }
      }

      .xx-icon {
        font-size: @font-size-sm13;
        color: @gray-5 !important;
      }

      &.active {
        font-weight: 600;
        color: @cascader-active-color;

        .xx-icon { color: @cascader-active-color !important; }
      }

      &.focus { background: @gray-1; }

    }
  }

  &-right {
    border-left: @main-border;
  }

}
</style>
