<template>
  <x-popover class="xx-cascader" placement="bottom"
             content-class-name="cascader-popover"
             @onClose="rollback">
    <span class="xx-cascader-trigger__wrapper">
    <slot v-if="$slots.default"></slot>
    <x-input v-else class="cascader-input" readonly :placeholder="placeholder" :value="selectedValue"></x-input>
    </span>
    <cascader-items slot="content" slot-scope="{ contentClose }"
                    v-model="selectedItems" v-bind="$props"
                    @closePopover="contentClose" @change="change">
    </cascader-items>
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
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data() {
    return {
      popoverVisible: false,
      selectedItems: [],
      defaultSelected: [],
      selectedValue: ''
    }
  },
  created() {
    this.setDefaultValue()
  },
  methods: {
    change(data) {
      this.selectedItems = data
      data.forEach((item, index) => {
        this.$set(this.newValue, index, item.value)
      })
      this.setDefaultSelected()
      this.getSelectedValue()
      this.$emit('change', this.newValue)
    },
    setDefaultValue() {
      let {newValue, source} = this
      if (newValue.length > 0) {
        this.getSelectedItems(source)
        this.setDefaultSelected()
        this.getSelectedValue()
      }
    },
    getSelectedValue() {
      this.selectedValue = this.selectedItems.map(item => item.name).join(' / ')
    },
    getSelectedItems(source) {
      source.forEach(item => {
        if (this.newValue.includes(item.value)) {
          this.selectedItems.push(item)
        }
        if (item.children && item.children.length > 0) {
          this.getSelectedItems(item.children)
        }
      })
    },
    setDefaultSelected(){
      this.defaultSelected = JSON.parse(JSON.stringify(this.selectedItems))
    },
    rollback() {
      this.selectedItems = JSON.parse(JSON.stringify(this.defaultSelected))
    }
  }
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
      color: @gray-8;

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
