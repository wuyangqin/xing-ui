const TABS_OPTION = [
  {
    name: 'primary',
    title: '基础用法',
    description: `通过 Tabs 和 Tab 组件实现基础的选项卡，通过<code> v-model/value </code>指定选中的标签。Tab 组件的 <code> disabled </code>属性可设置禁用`,
    code: `
<x-tabs v-model="activeName" @change="changeTab">
  <x-tab label="星星" name="xingxing">星星</x-tab>
  <x-tab label="羊咩" name="mie">羊咩</x-tab>
  <x-tab label="开心" name="kaixin">开心</x-tab>
  <x-tab label="好耶" name="ye" disabled>好耶</x-tab>
</x-tabs>

<script >
export default {
  data () {
    return {
      activeName: 'xingxing',
    }
  },
  methods: {
    changeTab (tab) {
      console.log(tab)
    }
  }
}
</script>
          `,
  },
  {
    name: 'position',
    title: '位置',
    description: `Tabs 组件可通过<code> tab-position </code>属性设置标签的四个位置：<code>tabPosition="left|right|top|bottom"</code>`,
    code: `
<x-button-group>
  <x-button @click="tabPosition = 'top'">top</x-button>
  <x-button @click="tabPosition = 'bottom'">bottom</x-button>
  <x-button @click="tabPosition = 'left'">left</x-button>
  <x-button @click="tabPosition = 'right'">right</x-button>
</x-button-group>
<x-tabs v-model="activeName" :tab-position="tabPosition" @change="changeTab">
  <x-tab label="星星" name="xingxing">星星</x-tab>
  <x-tab label="羊咩" name="mie">羊咩</x-tab>
  <x-tab label="开心" name="kaixin">开心</x-tab>
  <x-tab label="好耶" name="ye">好耶</x-tab>
</x-tabs>

<script >
export default {
  data () {
    return {
      tabPosition: 'top',
      activeName: 'xingxing',
    }
  },
  methods: {
    changeTab (tab) {
      console.log(tab)
    }
  }
}
</script>
          `
  }
]

export {
  TABS_OPTION
}
