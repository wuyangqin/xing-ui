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
        ['has-slider']: false,
        vertical: this.direction === 'vertical',
        horizontal: this.direction === 'horizontal',
      }
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      let childName = vm.$options.name
      let childVm = ['XAside', 'XHeader', 'XFooter', 'XMain', 'XContainer']
      if (!childVm.includes(childName)) {
        console.error('<x-container>组件不能包含<x-container>,<x-header>,<x-footer>,<x-main>,<x-slider>以外的组件！')
        return
      }
      if (childName === 'XAside') {
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
  &.has-slider { flex-direction: row;}
  &.horizontal { flex-direction: row; }
  &.visibility { flex-direction: column; }
;
}
</style>
