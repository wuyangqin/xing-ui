import Toast from '../toast/index'

let currentToast

export default {
  install (Vue, option) {
    Vue.prototype.$toast = function (toastOptions) {
      let { xError } = Vue.prototype
      if (arguments.length === 0) {
        xError('请输入提示信息！')
        return
      }
      let propsData = getPropsData(typeof arguments[0], toastOptions)
      if (currentToast) {
        currentToast.close(1)
      }
      currentToast = createToast(Vue, propsData)
    };
  }
}


/**
 * helper
 */
function getPropsData (type, toastOptions) {
  return type === 'object' ? toastOptions : { message: toastOptions }
}
function createToast (Vue, propsData) {
  const Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = propsData.message
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
