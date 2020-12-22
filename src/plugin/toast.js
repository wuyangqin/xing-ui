import Toast from '../toast/index'

export default {
  install (Vue, option) {
    Vue.prototype.$toast = function ({
      message,
      duration,
      closeButton,
      showClose
      // closeButtonText,
      // onClose
    }) {
      if (arguments.length === 0) {
        console.error('【X-UI错误】请输入提示信息！')
        return
      }
      if (typeof arguments[0] === 'string') {
        message = arguments[0]
      }
      const Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          duration,
          closeButton,
          showClose,
          // closeButtonText,
          // onClose
        }
      })
      toast.$slots.default = message
      toast.$mount()
      document.body.appendChild(toast.$el)
    };
  }
}
