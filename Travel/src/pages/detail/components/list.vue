<template>
  <div>
    <div v-for="(item, index) of list" class="item" :key="index">
      <div class="item-title border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div class="item-child border-bottom" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-list',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title
    line-height .4rem
    padding 0.06 .5rem
    .item-icon
      display inline-block
      top .06rem
      left .06rem
      position relative
      width .36rem
      height .36rem

      background url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .item-child
    padding-left  .2rem
</style>
