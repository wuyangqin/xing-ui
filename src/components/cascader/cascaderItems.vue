<template>
  <div class="xx-cascader-item" :style="{ height: height + 'px' }">
    <ul class="xx-cascader-item-left x-scrollbar">
      <li class="label" :class="getItemClasses(item)"
          v-for="item in source" :key="item.name"
          @click="onClickLabel(item)">
        <span>{{ item.name }}</span>
        <x-icon v-if="item.children" name="right"></x-icon>
      </li>
    </ul>
    <div class="xx-cascader-item-right" v-if="rightItems">
      <x-cascader-items v-model="newValue" :source="rightItems" :level="level+1"
                        @closePopover="$listeners.closePopover" @change="change">
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
    currentItem() {
      const {level, newValue} = this
      return newValue[level]
    },
    rightItems() {
      const {currentItem} = this
      return currentItem && currentItem.children ? currentItem.children : null
    }
  },
  data() {
    return {
      selectedItem: null
    }
  },
  methods: {
    getItemClasses(item) {
      const {selectedItem, currentItem} = this
      const isSelected = (currentItem) => currentItem && item.value === currentItem.value
      return {
        'active': isSelected(currentItem),
        'focus': isSelected(selectedItem)
      }
    },
    onClickLabel(item) {
      this.$parent.selectedItem = null;
      this.selectedItem = item
      this.newValue.splice(this.level)
      this.$set(this.newValue, this.level, item)
      const {closePopover} = this.$listeners
      if (!item.children) {
        closePopover()
        this.change()
      }
    },
    change() {
      this.$emit('change', this.newValue)
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
