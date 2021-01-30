<template>
  <div class="demo-button-box">
    <demo-box v-for="(demo, index) in option" :key="index"
              :title="demo.title" :introduction="demo.introduction"
              :code="demo.code" :code-type="demo.type">
      <template #components>
        <slot :name="demo.name"></slot>
      </template>
      <p slot="description" v-if="demo.description" v-html="demo.description"></p>
    </demo-box>
  </div>
</template>

<script>
import DemoBox from './demo-box'

export default {
  name: 'demo-page',
  components: {
    DemoBox
  },
  props: {
    option: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
@import url('../../css/docs-demo');
</style>
