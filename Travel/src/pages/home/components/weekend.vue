<template>
  <div>
    <div class="title">
      周末去哪
    </div>
    <div class="border-bottom" v-for="(item) of list" :key="item.id">
      <div class="image-wraper">
        <img class="item-img" :src="item.imgUrl" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-comment">{{item.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weeked',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixmins.styl"
  .title
    background-color: #eee
    text-indent .2rem
    line-height .8rem
    margin-top .2rem
      height 0
  .image-wraper
    overflow hidden
    padding-bottom 33.9%
    height 0
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
    .item-comment
      line-height .32rem
</style>
