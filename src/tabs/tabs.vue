<template>
  <div class="x-tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XTabs',
  components: {
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    tabPosition: {
      type: String,
      validator (value) {
        return ['top', 'left', 'right', 'bottom'].indexOf(value) > -1
      }
    }
  },
  computed: {
    selectTab: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log(this)
  },
  methods: {
  }
}
</script>

<style scoped lang="less">

</style>
