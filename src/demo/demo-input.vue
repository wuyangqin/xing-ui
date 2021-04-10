<template>
  <demo-page class="demo-input-wrapper" :option="option">
    <template #primary>
      <x-input v-model="value" placeholder="请输入内容"></x-input>
      <p> 双向绑定的值：{{ value }} </p>
    </template>
    <template #disabled>
      <x-input placeholder="请输入内容" disabled></x-input>
      <x-input style="marginTop: 16px" value="只读的输入框" placeholder="请输入内容" readonly></x-input>
    </template>
    <template #error>
      <x-input v-model="errorDemoValue" placeholder="请输入内容" :error="errorDemoValue ? '':'请输入内容'"></x-input>
    </template>
    <template #clearable>
      <x-input v-model="clearableDemoValue" placeholder="显示清除图标" clearable></x-input>
    </template>
    <template #icon>
      <div>
        <p style="margin-top:0">属性设置</p>
        <x-input v-model="iconDemoVal1" left-icon="setting"></x-input>
        <x-input v-model="iconDemoVal2" right-icon="down"></x-input>
      </div>
      <div>
        <p>插槽设置</p>
        <x-input v-model="iconDemoVal3">
          <x-icon name="setting" slot="left-icon"></x-icon>
        </x-input>
        <x-input v-model="iconDemoVal4">
          <x-icon name="down" slot="right-icon"></x-icon>
        </x-input>
      </div>
    </template>
  </demo-page>
</template>

<script>
import XInput from '../components/input.vue'
import XIcon from '../components/icon'
import DemoPage from './common/demo-page'
import {INPUT_OPTION} from "./js/input"

export default {
  name: 'demo-input',
  components: {
    XInput,
    XIcon,
    DemoPage
  },
  props: {
    propName: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      value: '',
      errorDemoValue: '',
      option: INPUT_OPTION,
      clearableDemoValue: '',
      iconDemoVal1: '',
      iconDemoVal2: '',
      iconDemoVal3: '',
      iconDemoVal4: '',
    }
  }
}
</script>

<style lang="less">
.demo-input-wrapper {
  .xx-input-wrapper {
    > input { width: 180px; }
  }
}
</style>
