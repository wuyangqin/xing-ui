<template>
  <demo-page class="demo-tabs-box" :option="option">
    <template #primary>
      <x-tabs v-model="activeName" @change="changeTab">
        <x-tab label="星星" name="xingxing">星星</x-tab>
        <x-tab label="羊咩" name="mie">羊咩</x-tab>
        <x-tab label="开心" name="kaixin">开心</x-tab>
        <x-tab label="好耶" name="ye" disabled>好耶</x-tab>
      </x-tabs>
    </template>
    <template #position>
      <x-button-group style="margin-bottom: 20px;">
        <x-button @click="tabPosition = 'top'">top</x-button>
        <x-button @click="tabPosition = 'bottom'">bottom</x-button>
        <x-button @click="tabPosition = 'left'">left</x-button>
        <x-button @click="tabPosition = 'right'">right</x-button>
      </x-button-group>
      <x-tabs v-model="activeName2" :tab-position="tabPosition" @change="changeTab">
        <x-tab label="星星" name="xingxing">星星</x-tab>
        <x-tab label="羊咩" name="mie">羊咩</x-tab>
        <x-tab label="开心" name="kaixin">开心</x-tab>
        <x-tab label="好耶" name="ye">好耶</x-tab>
      </x-tabs>
    </template>
    <template #slot>
      <x-tabs v-model="activeName3">
        <x-tab label="星星" name="xingxing">星星</x-tab>
        <x-tab label="羊咩" name="mie">羊咩</x-tab>
        <x-tab label="开心" name="kaixin">开心</x-tab>
        <x-tab name="ye">
          <template #label>
            <span style="marginRight: 4px">好耶</span>
            <x-icon name="thumbs-up"></x-icon>
          </template>
          好耶
        </x-tab>
      </x-tabs>
    </template>
  </demo-page>
</template>

<script>
import DemoPage from './common/demo-page'
import XTabs from '../components/tabs/tabs.vue'
import XTab from '../components/tabs/tab'
import XButton from '../components/button.vue'
import XButtonGroup from '../components/button-group'
import XIcon from '../components/icon.vue'
import { TABS_OPTION } from './js/tabs'

export default {
  name: 'demo-tabs',
  components: {
    XIcon,
    XButton,
    XButtonGroup,
    DemoPage,
    XTabs,
    XTab
  },
  data () {
    return {
      activeName: 'xingxing',
      activeName2: 'xingxing',
      activeName3: 'ye',
      tabPosition: 'top',
      option: TABS_OPTION
    }
  },
  methods: {
    changeTab (tab) {
      console.log(tab)
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/docs-demo');
</style>
