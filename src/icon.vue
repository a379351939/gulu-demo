<template>
  <svg class="g-icon">
    <use v-bind:xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    props:['name']
  }
</script>
<style lang="scss">
  .g-icon {
    width: 1em;
    height: 1em;
    display: inline-flex; justify-content: center; align-items: center; vertical-align: middle;
  }
</style>
