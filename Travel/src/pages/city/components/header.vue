<template>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
</template>

<script>

export default {
  name: 'city-header'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    height .86rem
    line-height $headerHeight
    text-align center
    background-color: $bgColor;
    color: #ffffff
    font-size .32rem
    .back-icon
      position absolute
      top 0
      left 0
      color #fff
</style>
