export default {
  bind: function (el, bindings) {
    document.addEventListener('click', (e) => {
      if (el == e.target || el.contains(e.target)) {
        console.log('inside');
        return
      }
      bindings.value()
    })
  }
}
