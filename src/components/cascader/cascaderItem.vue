<template>
  <div class="x-cascader-item">
    <div v-for="item in source">
      {{item.name}}
      <x-cascader-item v-if="item.children" :source="item.children"></x-cascader-item>
    </div>
  </div>
</template>

<script>

export default {
  name: 'xCascaderItem',
  components: {
  },
  props: {
    source: {
      type: Array,
      default: ()=>[]
    },
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less">

</style>
