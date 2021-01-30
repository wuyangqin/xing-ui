<template>
  <demo-page class="demo-layout-wrapper" :option="demoOption">
    <template #primary>
      <x-container>
        <x-header > header </x-header>
        <x-main> main </x-main>
      </x-container>
    </template>
    <template #1>
      <x-container>
        <x-header > header </x-header>
        <x-main> main </x-main>
        <x-footer> footer </x-footer>
      </x-container>
    </template>
    <template #2>
      <x-container>
        <x-aside > aside </x-aside>
        <x-main> main </x-main>
      </x-container>
    </template>
    <template #3>
      <x-container>
        <x-header>header</x-header>
        <x-container>
          <x-aside>aside</x-aside>
          <x-main>main</x-main>
        </x-container>
      </x-container>
    </template>
    <template #4>
      <x-container>
        <x-header>header</x-header>
        <x-container>
          <x-aside>aside</x-aside>
          <x-main>main</x-main>
        </x-container>
        <x-footer>footer</x-footer>
      </x-container>
    </template>
    <template #5>
      <x-container>
        <x-aside>aside</x-aside>
        <x-container>
        <x-header>header</x-header>
          <x-main>main</x-main>
        </x-container>
      </x-container>
    </template>
    <template #6>
      <x-container>
        <x-aside>aside</x-aside>
        <x-container>
          <x-header>header</x-header>
          <x-main>main</x-main>
          <x-footer>footer</x-footer>
        </x-container>
      </x-container>
    </template>
  </demo-page>
</template>

<script>
import DemoPage from './common/demo-page'
import XContainer from '../layout/container.vue'
import XAside from '../layout/aside.vue'
import XFooter from '../layout/footer.vue'
import XHeader from '../layout/header.vue'
import XMain from '../layout/main.vue'
import { LAYOUT_OPTION } from './js/layout'

export default {
  name: 'demo-layout',
  components: {
    DemoPage,
    XContainer,
    XAside,
    XFooter,
    XHeader,
    XMain
  },
  data () {
    return {
      demoOption: LAYOUT_OPTION
    }
  }
}
</script>

<style lang="less">
@import url('../css/docs-demo');
.demo-layout-wrapper {
  color: @text-color;
  .container-header, .container-footer {
    height: 50px !important;
    background: @gray-4;
  }
  .container-main {
    min-height: 150px;
    background: @gray-2;
  }
  .container-aside {
    background: @gray-3;
  }
}
</style>
