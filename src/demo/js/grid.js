const GRID_OPTION = [
  {
    name: 'primary',
    title: '基础布局',
    introduction: '使用单一分栏创建基础的栅格布局',
    description: `通过row和col组件，及col组件的<code>span</code>属性设置栏数，实现自由的组合布局，<code>span</code>属性支持传入String和Number`,
    code: `
<x-row class="demo-row">
  <x-col :span="24"><div class="demo-col bg-gray-dark"> 24 </div></x-col>
</x-row>

<x-row class="demo-row">
  <x-col :span="12"><div class="demo-col"> 12 </div></x-col>
  <x-col :span="12"><div class="demo-col bg-gray-light"> 12 </div></x-col>
</x-row>

<x-row class="demo-row">
  <x-col span="8"> <div class="demo-col"> 8 </div> </x-col>
  <x-col span="8"> <div class="demo-col bg-gray-light"> 8 </div> </x-col>
  <x-col span="8"> <div class="demo-col"> 8 </div> </x-col>
</x-row>

<x-row class="demo-row">
  <x-col span="6"> <div class="demo-col"> 6 </div></x-col>
  <x-col span="6"> <div class="demo-col bg-gray-light"> 6 </div></x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div></x-col>
  <x-col span="6"> <div class="demo-col bg-gray-light"> 6 </div></x-col>
</x-row>

<x-row class="demo-row">
  <x-col span="4"> <div class="demo-col"> 4 </div> </x-col>
  <x-col span="4"> <div class="demo-col bg-gray-light"> 4 </div> </x-col>
  <x-col span="4"> <div class="demo-col"> 4 </div> </x-col>
  <x-col span="4"> <div class="demo-col bg-gray-light"> 4 </div> </x-col>
  <x-col span="4"> <div class="demo-col"> 4 </div> </x-col>
  <x-col span="4"> <div class="demo-col bg-gray-light"> 4 </div> </x-col>
</x-row>
    `
  },
  {
    name: 'gutter',
    title: '设置间隔',
    introduction: '分栏之间可以存在间隔',
    description: `row组件通过 <code>gutter</code> 属性设置每一栏之间的间隔，默认为0`,
    code: `
<x-row :gutter="30" class="demo-row">
  <x-col span="8"> <div class="demo-col"> 8 </div> </x-col>
  <x-col span="8"> <div class="demo-col"> 8 </div> </x-col>
  <x-col span="8"> <div class="demo-col"> 8 </div> </x-col>
</x-row>
<x-row :gutter="20" class="demo-row">
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
</x-row>
    `
  },
  {
    name: 'offset',
    title: '设置偏移',
    introduction: '支持偏移指定的栏数',
    description: `col组件通过 <code>offset</code> 属性设置分栏偏移的栏数`,
    code: `
<x-row class="demo-row" gutter="10">
  <x-col span="8"> <div class="demo-col"> 8 </div> </x-col>
  <x-col span="8" offset="8"> <div class="demo-col">8</div> </x-col>
</x-row>
<x-row class="demo-row" gutter="10">
  <x-col span="6" offset="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6" offset="6"> <div class="demo-col"> 6 </div> </x-col>
</x-row>
<x-row class="demo-row" gutter="10">
  <x-col span="4"> <div class="demo-col"> 4 </div> </x-col>
  <x-col span="4" offset="4"> <div class="demo-col"> 4 </div> </x-col>
  <x-col span="4" offset="8"> <div class="demo-col"> 4 </div> </x-col>
</x-row>
    `
  },
  {
    name: 'align',
    title: '对齐方式',
    introduction: '指定分栏的对齐方式',
    description: `row组件通过 <code>align</code> 属性设置left,center,right三种分栏的对齐方式`,
    code: `
<x-row class="demo-row row-bg" align="left">
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col bg-gray-light"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
</x-row>
<x-row class="demo-row row-bg" align="center">
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col bg-gray-light"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
</x-row>
<x-row class="demo-row row-bg" align="right">
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col bg-gray-light"> 6 </div> </x-col>
  <x-col span="6"> <div class="demo-col"> 6 </div> </x-col>
</x-row>
    `
  },
  {
    name: 'responsive',
    title: '响应式布局',
    introduction: `默认移动端优先，支持四个响应式尺寸: <code>ipad</code>、<code>narrowPc</code>、<code>pc</code>、<code>widePc</code>`,
    code: `
<x-row class="demo-row">
  <x-col :span="24" :ipad="{ span: 12 }"  :pc="{ span: 4 }" :narrow-pc="{span: 8}" :wide-pc="{span: 2, offset: 2}">
    <div class="demo-col"></div>
  </x-col>
  <x-col :span="24" :ipad="{ span: 12 }"  :pc="{ span: 4 }" :narrow-pc="{span: 8}" :wide-pc="{span: 2, offset: 2}">
    <div class="demo-col bg-gray-light"></div>
  </x-col>
  <x-col :span="24" :ipad="{ span: 12 }"  :pc="{ span: 4 }" :narrow-pc="{span: 8}" :wide-pc="{span: 2, offset: 2}">
    <div class="demo-col"></div>
  </x-col>
  <x-col :span="24" :ipad="{ span: 12 }"  :pc="{ span: 4 }" :narrow-pc="{span: 8}" :wide-pc="{span: 2, offset: 2}">
    <div class="demo-col bg-gray-light"></div>
  </x-col>
  <x-col :span="24" :ipad="{ span: 12 }"  :pc="{ span: 4 }" :narrow-pc="{span: 8}" :wide-pc="{span: 2, offset: 2}">
    <div class="demo-col"></div>
  </x-col>
  <x-col :span="24" :ipad="{ span: 12 }"  :pc="{ span: 4 }" :narrow-pc="{span: 8}" :wide-pc="{span: 2, offset: 2}">
    <div class="demo-col bg-gray-light"></div>
  </x-col>
</x-row>
    `
  },
]

export { GRID_OPTION }
