<template>
  <div class="alpahbet">
    <ul class="item-list">
      <li class="item-alphabet">A</li>
      <li class="item-alphabet">B</li>
      <li class="item-alphabet">C</li>
      <li class="item-alphabet">D</li>
      <li class="item-alphabet">E</li>
      <li class="item-alphabet">F</li>
      <li class="item-alphabet">G</li>
      <li class="item-alphabet">H</li>
      <li class="item-alphabet">I</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'city-alpahbet'
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
