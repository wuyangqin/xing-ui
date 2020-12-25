import Toast from '../toast/index'

function getPropsData (type, toastOptions) {
  return type === 'object' ? toastOptions : { message: toastOptions }
}

export default {
  install (Vue, option) {
    Vue.prototype.$toast = function (toastOptions) {
      if (arguments.length === 0) {
        console.error('【X-UI错误】请输入提示信息！')
        return
      }
      let propsData = getPropsData(typeof arguments[0], toastOptions)
      console.log(propsData);
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData
      })
      toast.$slots.default = propsData.message
      toast.$mount()
      document.body.appendChild(toast.$el)
    };
  }
}
