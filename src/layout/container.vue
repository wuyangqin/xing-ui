<template>
  <div class="x-container" :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XContainer',
  components: {
  },
  props: {
    direction: {
      type: String,
      validator (value) {
        return ['vertical', 'horizontal'].includes(value);
      }
    }
  },
  data() {
    return {
      containerClasses: {
        ['has-slider']: false
      }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'XSlider') {
        this.containerClasses['has-slider'] = true
      }
    })
  }
}
</script>

<style scoped lang="less">
.x-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.has-slider {
    flex-direction: row;
  }
}
</style>
