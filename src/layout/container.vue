<template>
  <div class="x-container" :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XContainer',
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
        ['has-aside']: false,
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
        this.xError('<x-container>组件不能包含<x-container>,<x-header>,<x-footer>,<x-main>,<x-aside>以外的组件！')
        return
      }
      if (childName === 'XAside') {
        this.containerClasses['has-aside'] = true
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
  &.has-aside { flex-direction: row;}
  &.horizontal { flex-direction: row; }
  &.visibility { flex-direction: column; }
}
</style>
