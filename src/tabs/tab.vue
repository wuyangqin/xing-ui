<template>
  <div class="x-tabs-tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XTabsTab',
  components: {
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
