<template>
  <div>
    <div class="title">
      热销推荐
    </div>
      <router-link tag="div" to="/detail" class="item border-bottom" v-for="(item) of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-comment">{{item.desc}}</div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'recommend11',
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

  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      padding .1rem
      width 1.7rem
      height 1.7rem
    .item-info
      position relative
      padding .1rem
      flex 1
      .item-title
        line-height .5rem
        font-size .3rem
        ellipsis()
      .item-comment
        line-height .5rem
        font-size .2rem
        ellipsis()
      .item-price
        line-height .5rem
        font-size .2rem
        ellipsis()
      .item-address
        position absolute
        top 1.2rem
        right .4rem
        ellipsis()
</style>
