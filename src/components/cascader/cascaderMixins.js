const cascaderMixins = {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    source: {
      type: Array,
      default: () => []
    },
    height: {
      type: [Number, String],
      default: 150
    },
    lazyLoad: {
      type: Function
    }
  },
  computed: {
    newValue: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
}

export default cascaderMixins
