// button
const BUTTON_OPTION = [
  {
    name: 'primary',
    title: '基础用法',
    introduction: '基础的按钮用法',
    code: `
<x-button>主要按钮</x-button>
<x-button icon="setting">图标按钮</x-button>
<x-button :loading="loading" @click="loading = !loading">加载按钮</x-button>
          `,
    description: `
         图标可由<code>icon</code>属性设置, loading状态可由<code>loading</code>属性设置。
        `
  },
  {
    name: 'group',
    title: '按钮组',
    introduction: '以按钮组的方式出现，常用于多项类似操作',
    description: `使用<code> x-button-group </code>标签来嵌套你的按钮`,
    code: `
<x-button-group>
  <x-button icon="left">上一页</x-button>
  <x-button icon="right" icon-position="right">下一页</x-button>
</x-button-group>
<x-button-group>
  <x-button icon="download"></x-button>
  <x-button icon="setting"></x-button>
  <x-button icon="thumbs-up"></x-button>
</x-button-group>
          `
  }
]

export {
  BUTTON_OPTION
}
