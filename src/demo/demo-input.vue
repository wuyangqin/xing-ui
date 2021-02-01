<template>
  <demo-page class="demo-input-wrapper" :option="option">
    <template #primary>
      <x-input v-model="value" placeholder="请输入内容"></x-input>
      <span> 双向绑定的值：{{value}} </span>
    </template>
    <template #disabled>
      <x-input placeholder="请输入内容" disabled></x-input>
      <x-input value="只读的输入框" placeholder="请输入内容" readonly></x-input>
    </template>
    <template #error>
      <x-input v-model="errorValue" placeholder="请输入内容" :error="errorValue ? '':'请输入内容'"></x-input>
    </template>
  </demo-page>
</template>

<script>
import XInput from '../components/input.vue'
import DemoPage from './common/demo-page'
import  { INPUT_OPTION } from "./js/input"

export default {
  name: 'demo-input',
  components: {
    XInput,
    DemoPage
  },
  props: {
    propName: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      value: '',
      errorValue: '',
      option: INPUT_OPTION
    }
  }
}
</script>
