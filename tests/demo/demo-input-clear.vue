<template>
  <div>
    <x-input v-model="inputValue" ref="demoInput" clearable ></x-input>
  </div>
</template>

<script>
import XInput from '@/components/input'

export default {
  name: 'demoInputClear',
  components: {
    XInput,
  },
  data() {
    return {
      inputValue:'',
    }
  }
}
</script>

<style scoped>
</style>
