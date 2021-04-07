<template>
<div id="app">
  <tabs v-model="select">
    <tab label="211" name="2"></tab>
    <tab label="123123" name="1"></tab>
  </tabs>
</div>
</template>

<script>
import Tab from './components/tabs/tab'
import Tabs from './components/tabs/tabs'
export default {
name: "App",
  components:{
    Tabs,
    Tab
  },
  data(){
  return {
    select:'1'
  }
  }
}
</script>

<style scoped>

</style>
