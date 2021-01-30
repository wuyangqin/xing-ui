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
  }
]

export { INPUT_OPTION }
