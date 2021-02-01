// popover
const POPOVER_OPTION = [
  {
    name: 'primary',
    title: '基础用法',
    introduction: '点击触发，支持4种展示方位',
    description: `
         Popover通过默认插槽设置触发popover的元素,通过<code>slot="content"</code>具名插槽设置popover内容。
         <br>通过<code>placement</code>属性设置4个展示方位：<code>top/left/bottom/right</code>。
        `,
    code: `
<div class="popover-box">
  <div class="top">
    <x-popover placement="top">
      <template #content>羊儿摘了一颗小星星</template>
      <x-button>上边</x-button>
    </x-popover>
  </div>
  <div class="left">
    <x-popover placement="left">
      <template slot="content">羊儿摘了一颗小星星</template>
      <x-button>左边</x-button>
    </x-popover>
  </div>
  <div class="right">
    <x-popover placement="right">
      <template #content>羊儿摘了一颗小星星</template>
      <x-button>右边</x-button>
    </x-popover>
  </div>
  <div class="bottom">
    <x-popover placement="bottom">
      <template #content>羊儿摘了一颗小星星</template>
      <x-button>下边</x-button>
    </x-popover>
  </div>
</div>
          `,
  },
  {
    name: 'trigger',
    title: 'Hover触发',
    introduction: `通过<code>trigger</code>属性设置触发方式为<code>hover</code>`,
    code: `
<div class="popover-box">
  <div class="top">
    <x-popover placement="top" trigger="hover">
      <template #content>羊儿摘了一颗小星星</template>
      <x-button>上边</x-button>
    </x-popover>
  </div>
  <div class="left">
    <x-popover placement="left" trigger="hover">
      <template slot="content">羊儿摘了一颗小星星</template>
      <x-button>左边</x-button>
    </x-popover>
  </div>
  <div class="right">
    <x-popover placement="right" trigger="hover">
      <template #content>羊儿摘了一颗小星星</template>
      <x-button>右边</x-button>
    </x-popover>
  </div>
  <div class="bottom">
    <x-popover placement="bottom" trigger="hover">
      <template #content>羊儿摘了一颗小星星</template>
      <x-button>下边</x-button>
    </x-popover>
  </div>
</div>
          `
  },
  {
    name: 'close',
    title: '关闭Popover',
    introduction: `调用<code>contentClose</code>方法关闭Popover`,
    code: `
<x-popover placement="right">
  <template slot="content" slot-scope="{ contentClose }">
    羊儿摘了一颗小星星
    <span @click="contentClose">
      <x-icon name="close-fill"></x-icon>
    </span>
  </template>
  <x-button>关闭操作</x-button>
</x-popover>
    `
  }
]

export {
  POPOVER_OPTION
}
