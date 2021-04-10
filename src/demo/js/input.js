const INPUT_OPTION = [
  {
    name: 'primary',
    title: '基础用法',
    description: `使用<code>v-model</code>实现双向绑定`,
    code: `
<x-input v-model="value" placeholder="请输入内容"></x-input>
<span> 双向绑定的值：{{value}} </span>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
    `
  },
  {
    name: 'disabled',
    title: '禁用和只读状态',
    description: `通过 <code>disabled</code> 属性指定是否禁用 input 组件, <code>readonly</code>属性指定是否只读`,
    code: `
<x-input v-model="value" placeholder="请输入内容" disabled></x-input>
<x-input value="只读的输入框" placeholder="请输入内容" readonly></x-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
    `
  },
  {
    name: 'error',
    title: '错误提示',
    description: `通过 <code>error</code> 属性传入错误提示`,
    code: `
<x-input v-model="value" placeholder="请输入内容"
        :error="value ? '':'请输入内容'">
</x-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
    `
  },
  {
    name: 'clearable',
    title: '可以清除',
    description: `通过设置 <code>clearable</code> 在输入过程中展示清除图标`,
    code: `
<x-input v-model="value" placeholder="显示清除图标" clearable></x-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
    `
  },
  {
    name: 'icon',
    title: '显示左右图标',
    description: `通过 <code>left-icon</code> 和 <code>right-icon</code> 属性或具名插槽 配置输入框两侧的图标`,
    code: `
<div>
  <p>属性设置</p>
  <x-input v-model="value1" left-icon="setting"></x-input>
  <x-input v-model="value2" right-icon="down"></x-input>
</div>
<div>
  <p>插槽设置</p>
  <x-input v-model="value3">
    <x-icon name="setting" slot="left-icon"></x-icon>
  </x-input>
  <x-input v-model="value4">
    <x-icon name="down" slot="right-icon"></x-icon>
  </x-input>
</div>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>
    `
  }
]

export { INPUT_OPTION }
