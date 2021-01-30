
const layoutMixins = {
  props: {
    height: {
      type: [Number, String],
      default: 60,
      validator (value) {
        return !isNaN(Number(value))
      }
    },
    width: {
      type: [Number, String],
      default: 200,
      validator (value) {
        return !isNaN(Number(value))
      }
    }
  },
  methods: {
    fatherDetermine (text = 'x-header') {
      if (this.$parent.$options.name !== 'XContainer') {
        this.xError(`<${text}> 父组件只能为 <x-container>!`)
      }
    }
  }
}

export default layoutMixins
