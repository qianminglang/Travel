<template>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>

export default {
  name: 'city-search'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    background-color: $bgColor;
    padding 0 .1rem
    .search-input
      box-sizing border-box
      padding 0 .1rem
      border-radius .06rem
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      color #666,
</style>
