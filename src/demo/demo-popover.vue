<template>
  <demo-page class="demo-popover-box" :option="option">
    <template #primary>
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
    </template>
    <template #trigger>
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
    </template>
    <template #close>
      <x-popover placement="right">
        <template slot="content" slot-scope="{ contentClose }">
          羊儿摘了一颗小星星
          <span style="vertical-align:middle" @click="contentClose">
            <x-icon name="close-fill"></x-icon>
          </span>
        </template>
        <x-button>关闭操作</x-button>
      </x-popover>
    </template>
  </demo-page>
</template>

<script>
import DemoPage from './common/demo-page'
import XButton from '../components/button.vue'
import XIcon from '../components/icon'
import XPopover from '../components/popover/index'
import { POPOVER_OPTION } from './js/popover'

export default {
  name: 'demo-popover',
  components: {
    DemoPage,
    XPopover,
    XButton,
    XIcon
  },
  data () {
    return {
      option: POPOVER_OPTION
    }
  }
}
</script>

<style lang="less">
@import url('../css/docs-demo');
.demo-popover-box {
  .components-box {
    .popover-box {
      margin: auto;
      padding: 10px;
      width: 45%;
      .top, .bottom { text-align: center; }
      .left {
        float: left;
        text-align: left;
      }
      .right {
        float: right;
        text-align: right;
      }
      .bottom { clear: both; }
    }
    &.mobile{
      .popover-box {
        width: 70%;
      }
    }
  }
}
</style>
