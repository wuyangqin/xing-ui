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
      // 避免出现多个 toast 重叠
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(Vue, propsData)
    };
  }
}


/**
 * helper
 */
function getPropsData (type, toastOptions) {
  // 当只接收一个字符串时转换为message配置
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
