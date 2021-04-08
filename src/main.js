import Vue from 'vue'
import App from "./App.vue";
import  toast  from './plugin/toast'

import { isMobile } from './utils/env'
import actions from './common/action'

Vue.prototype.xWarning = actions.xWarning
Vue.prototype.xError = actions.xError
Vue.prototype.isMobile = isMobile

Vue.use(toast)

Vue.config.productionTip = false;

const vueApp = new Vue({
  render: (h) => h(App),
})
vueApp.$mount("#app")
export default vueApp
