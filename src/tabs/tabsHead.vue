<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabsHead',
    inject: ['eventBus'],
    mounted(){
      this.eventBus.$on('update:selected', (item, vm) => {
        let {width, height, left, top} = vm.$el.getBoundingClientRect()
        let {left: left2} = this.$refs.head.getBoundingClientRect()
        this.$refs.line.style.left = left - left2 + 'px'
        this.$refs.line.style.width = `${width}px`
      })
    }
  }
</script>
<style lang="scss" scoped>
  $tab-height: 40px;
  $border-color: #ddd;
  $blue: blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: $blue solid 1px;
      transition: all 250ms;
    }

    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>
