document.addEventListener('click', (e) => {
  let {target} = e
  callbacks.forEach(item => {
    let {el, callback} = item
    if (el !== target && !el.contains(target)) {
      callback()
    }
  })
  
})
let callbacks = []
export default {
  bind: function (el, bindings) {
    callbacks.push({el, callback: bindings.value})
  }
}
