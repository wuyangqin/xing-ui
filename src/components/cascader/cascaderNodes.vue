<template>
  <div class="xx-cascader-item" :style="{ height: height + 'px' }">
    <ul class="xx-cascader-item-left xx-scrollbar">
      <li class="label" :class="getLabelClasses(node)"
          v-for="node in source" :key="node[labelName]"
          @click="onClickLabel(node)">
        <span>{{ node[labelName] }}</span>
        <x-icon v-if="rightArrowVisible(node)" name="right"></x-icon>
        <x-icon v-if="loadingNodeValue === node[valueName]" name="loading" class="xx-loading"></x-icon>
      </li>
    </ul>
    <div class="xx-cascader-item-right" v-if="rightItems">
      <x-cascader-items v-model="newValue" :source="rightItems" :level="level+1" :lazy-load="lazyLoad"
                        :loading-node-value="loadingNodeValue" :options="options"
                        @closePopover="$listeners.closePopover" @change="change" @select="select($event)">
      </x-cascader-items>
    </div>
  </div>
</template>

<script>
import XIcon from '../icon'
import cascaderMixins from './cascaderMixins';

export default {
  name: 'xCascaderItems',
  mixins: [cascaderMixins],
  components: {
    XIcon
  },
  props: {
    loadingNodeValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentItem() {
      const {level, newValue} = this
      return newValue[level]
    },
    rightItems() {
      const {currentItem, childrenName} = this
      return currentItem && currentItem[childrenName] ? currentItem[childrenName] : null
    }
  },
  data() {
    return {
      selectedNode: null
    }
  },
  methods: {
    getLabelClasses(node) {
      const {selectedNode, currentItem, valueName} = this
      const isSelected = (currentItem) => currentItem && node[valueName] === currentItem[valueName]
      return {
        'active': isSelected(currentItem),
        'focus': isSelected(selectedNode)
      }
    },
    rightArrowVisible(node) {
      const {lazyLoad, loadingNodeValue, childrenName, valueName, isLeafName} = this
      return lazyLoad ? !node[isLeafName] && loadingNodeValue !== node[valueName] : node[childrenName] && node[childrenName].length > 0
    },
    onClickLabel(node) {
      this.$parent.selectedNode = null;
      this.selectedNode = node
      this.newValue.splice(this.level)
      this.$set(this.newValue, this.level, node)
      this.changeHandler(node)
    },
    changeHandler(node) {
      const {childrenName, lazyLoad, isLeafName} = this
      const {closePopover} = this.$listeners
      if (!node[childrenName] || node[childrenName].length === 0 || node[isLeafName]) {
        if (!lazyLoad || node[isLeafName]) {
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
        font-size: @font-size-sm;
        color: @icon-color-light !important;
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
