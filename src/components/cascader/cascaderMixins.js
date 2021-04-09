const cascaderMixins = {
  props: {
    source: {
      type: Array,
      default: () => []
    },
    height: {
      type: [Number, String],
      default: 150
    }
  },
}

export default cascaderMixins
