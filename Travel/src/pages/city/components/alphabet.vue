<template>
  <div class="alpahbet">
    <ul class="item-list">
      <li class="item-alphabet" v-for="(item ,key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'city-alpahbet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .item-list
    position absolute
    display flex
    flex-direction column
    justify-content center
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item-alphabet
      line-height .44rem
      text-align center
      color: $bgColor
</style>
