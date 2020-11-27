<template>
  <div class="x-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="less">
.x-button-group {
  display: inline-flex;
  vertical-align: middle;
  //border-radius: var(--border-radius);
  //overflow: hidden;
  .x-button {
    border-radius: 0;
    border-right: 1px solid rgba(255, 255, 255, .5);
    &:first-child {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:last-child {
      border-right: none;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }
}
</style>
