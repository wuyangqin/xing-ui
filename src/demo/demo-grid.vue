<template>
  <demo-page class="demo-grid-wrapper" :option="option">
<!--    基础布局-->
    <template #primary>
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

    </template>
<!--    设置间隔-->
    <template #gutter>
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
    </template>
<!--    设置偏移-->
    <template #offset>
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
    </template>
<!--    对齐方式-->
    <template #align>
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
    </template>
    <template #responsive>
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
    </template>
  </demo-page>
</template>

<script>
import XRow from '../components/grid/row.vue'
import XCol from '../components/grid/col.vue'
import DemoPage from './common/demo-page'
import  { GRID_OPTION } from "./js/grid"

export default {
  name: 'demo-grid',
  components: {
    XRow,
    XCol,
    DemoPage
  },
  data () {
    return {
      option: GRID_OPTION
    }
  }
}
</script>

<style scoped lang="less">
@import url('../css/docs-demo');
.demo-row {
  margin-bottom: @padding-md;
  &:last-child { margin-bottom: 0; }
}
.demo-col {
  border-radius: @border-radius;
  min-height: 36px;
  background: @gray-3;
  font-size: @font-size-md;
  text-align: center;
  line-height: 36px;
  color: @gray-7;
}
.row-bg {
  padding: @padding-xs 0;
  background-color: #f9fafc;
}
.bg-gray-dark { background: @gray-4; }
.bg-gray { background: @gray-3; }
.bg-gray-light { background: @gray-2; }
</style>
