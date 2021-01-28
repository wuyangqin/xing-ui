<template>
  <div class="demo-button-wrapper">
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
  </div>
</template>

<script>

export default {
  name: 'docs-demo',
  props: {
    demoSrc: {
      type: String
    }
  },
  data () {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    this.getDemoComponent()
  },
  methods: {
    getDemoComponent () {
      import(`../../../src/demo/${this.demoSrc}.vue`).then(module => {
        this.dynamicComponent = module.default
      })
    }
  }
}
</script>

<style lang="less">
@import url('../../../src/css/xing-ui');
</style>
