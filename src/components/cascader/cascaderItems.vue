<template>
  <div class="xx-cascader-item" :style="{ height: height + 'px' }">
    <ul class="xx-cascader-item-left xx-scrollbar">
      <li class="label" :class="getLabelClasses(node)"
          v-for="node in source" :key="node.name"
          @click="onClickLabel(node)">
        <span>{{ node.name }}</span>
        <x-icon v-if="rightArrowVisible(node)" name="right"></x-icon>
      </li>
    </ul>
    <div class="xx-cascader-item-right" v-if="rightItems">
      <x-cascader-items v-model="newValue" :source="rightItems" :level="level+1" :lazy-load="lazyLoad"
                        @closePopover="$listeners.closePopover" @change="change" @select="select($event)">
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
      selectedNode: null
    }
  },
  methods: {
    getLabelClasses(node) {
      const {selectedNode, currentItem} = this
      const isSelected = (currentItem) => currentItem && node.value === currentItem.value
      return {
        'active': isSelected(currentItem),
        'focus': isSelected(selectedNode)
      }
    },
    rightArrowVisible(node) {
      return this.lazyLoad ? !node.isLeaf : node.children && node.children.length > 0
    },
    onClickLabel(node) {
      this.$parent.selectedNode = null;
      this.selectedNode = node
      this.newValue.splice(this.level)
      this.$set(this.newValue, this.level, node)
      this.changeHandler(node)
    },
    changeHandler(node) {
      const {closePopover} = this.$listeners
      if (!node.children || node.children.length === 0) {
        if (!this.lazyLoad || node.isLeaf) {
          closePopover()
          this.change()
          return
        }
        this.select(node)
      }
    },
    select(node) {
      this.$emit('select', node)
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
