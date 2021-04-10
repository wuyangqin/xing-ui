<template>
  <x-popover class="xx-cascader" placement="bottom"
             :content-class-name="`cascader-popover ${sourceLoading?'loading':''}`"
             @onClose="rollback">
    <span class="xx-cascader-trigger__wrapper">
      <slot v-if="$slots.default"></slot>
      <x-input v-else
               class="cascader-input"
               :class="{ 'clear-visible': selectedLabels.length > 0 && clearable }"
               v-model="selectedLabels"
               readonly
               right-icon="down"
               :clearable="clearable"
               :placeholder="placeholder"
               @clear="clearSelected"
      >
      </x-input>
    </span>
    <template slot="content" slot-scope="{ contentClose }">
      <x-icon v-if="sourceLoading" name="loading" class="xx-loading"></x-icon>
      <cascader-nodes v-model="selectedNodes" v-bind="$props" ref="cascaderNodes"
                      :loading-node-value="loadingNodeValue"
                      @closePopover="contentClose"
                      @change="change" @select="select"
      >
      </cascader-nodes>
    </template>
  </x-popover>
</template>

<script>
import XPopover from '../popover'
import CascaderNodes from './cascaderNodes'
import XInput from '../input'
import XIcon from '../icon'
import cascaderMixins from './cascaderMixins';

export default {
  name: 'x-cascader',
  mixins: [cascaderMixins],
  components: {
    XPopover,
    XIcon,
    XInput,
    CascaderNodes
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sourceLoading() {
      return this.source.length === 0 && this.lazyLoad
    }
  },
  data() {
    return {
      popoverVisible: false,
      selectedNodes: [],
      defaultSelected: [],
      loadingNodeValue: '',
      selectedLabels: ''
    }
  },
  created() {
    this.setDefaultValue()
  },
  methods: {
    change(selectedNodes) {
      this.selectedNodes = selectedNodes
      selectedNodes.forEach((item, index) => {
        this.$set(this.newValue, index, item[this.valueName])
      })
      this.setDefaultSelected()
      this.getSelectedValue()
      this.$emit('change', this.newValue, this.selectedNodes)
    },
    select(selectedNode) {
      if (this.lazyLoad) {
        this.loadingNodeValue = selectedNode[this.valueName]
        const lazyLoadResolve = (nodes) => {
          this.loadingNodeValue = ''
          this.setNewSource(nodes, selectedNode, this.source)
          this.$emit('update:source', this.source)
        }
        this.lazyLoad(selectedNode, lazyLoadResolve)
      }
    },
    setNewSource(nodes, selectedNode, source) {
      const {childrenName, valueName} = this
      source.forEach(item => {
        if (item[valueName] === selectedNode[valueName]) {
          this.$set(item, childrenName, nodes)
        } else {
          if (item[childrenName] && item[childrenName].length > 0) {
            this.setNewSource(nodes, selectedNode, item[childrenName])
          }
        }
      })
    },
    setDefaultValue() {
      let {newValue, source} = this
      if (newValue.length > 0) {
        this.getSelectedNodes(source)
        this.setDefaultSelected()
        this.getSelectedValue()
      }
    },
    getSelectedValue() {
      this.selectedLabels = this.selectedNodes.map(node => node[this.labelName]).join(' / ')
    },
    getSelectedNodes(source) {
      const {childrenName, valueName} = this
      source.forEach(node => {
        if (this.newValue.includes(node[valueName])) {
          this.selectedNodes.push(node)
        }
        if (node[childrenName] && node[childrenName].length > 0) {
          this.getSelectedNodes(node[childrenName])
        }
      })
    },
    setDefaultSelected() {
      this.defaultSelected = JSON.parse(JSON.stringify(this.selectedNodes))
    },
    rollback() {
      this.selectedNodes = JSON.parse(JSON.stringify(this.defaultSelected))
    },
    clearSelected() {
      this.selectedNodes = []
      this.$emit('clear')
    }
  }
}
</script>

<style lang="less">
@import url('../../css/xing-ui');

.xx-cascader {
  position: relative;

  &-trigger__wrapper {
    .cascader-input {
      .readonly {
        cursor: default;
        background: @white;
        color: @gray-8;

        &:focus {
          border-color: @main-theme-color;
          box-shadow: none;
        }
      }

      .clear-icon.visible { display: none !important; }

      @media (any-hover: hover) {
        &:hover {
          .clear-icon.visible { display: inline-block !important; }

          &.clear-visible .right-icon {display: none;}
        }
      }
    }
  }
}

.xx-popover-content.cascader-popover {
  padding: 0;
  max-width: 100%;
  min-width: @cascader-popover-min-width;

  &.loading {
    height: 30px;
    &:extend(.flex-box);
    justify-content: center;

    .xx-icon { color: @gray-6; }
  }
}
</style>
