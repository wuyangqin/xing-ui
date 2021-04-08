<template>
  <div class="x-cascader-item">
    <div class="left">
      <div v-for="item in source" @click="selectedItem=item" :key="item.name">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <x-cascader-items :source="rightItems"></x-cascader-items>
    </div>
  </div>
</template>

<script>

export default {
  name: 'xCascaderItems',
  components: {},
  props: {
    source: {
      type: Array,
      default: () => []
    },
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

.x-cascader-item {
  border: @main-border;
  &:extend(.flex-box);
}
</style>
