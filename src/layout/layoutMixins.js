
const layoutMixins = {
  props: {
    height: {
      type: [Number, String],
      default: 60
    },
    width: {
      type: [Number, String],
      default: 200
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
