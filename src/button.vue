<template>
  <div>
    <button class="x-button">hi</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      msg: 'hhh'
    }
  },
  computed: {
    name() {
      this.m
    }
  },
}
</script>

<style lang="less">
.x-button {
  padding: 0 1em;
  font-size: var(--font-size);
  height: var(--button-height);
  border-radius: var(--border-radius);
  background: var(--main-theme-color);
  border: none;
  &.hover {
    background: var(--main-hover-color);
  }
  &.active {
    background: var(--main-active-color);
  }
  &.focus {
    outline: none;
  }
}
</style>
