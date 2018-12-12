<template>
    <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1710/9a/9a1d6bad7eb0ac0aa3.img.jpg_600x330_1d4cb895.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          轿子雪山
        </div>
        <div class="banner-number">
          <span class="iconfont arrow-icon">&#xe674;</span>
          21
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'banner'
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        font-size .24rem
        padding 0 .4rem
        background: rgba(0,0,0,0.8);
        border-radius .2rem

</style>
