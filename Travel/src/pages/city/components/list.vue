<template>
  <div class="list" ref="wraper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper" v-for="(item ,index) of hotCities" :key="index">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item ,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="(innerItem ) of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'city-list',
  mounted () {
    this.scroll = new BScroll(this.$refs.wraper)
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  watch: {
    letter () {
      const letterDom = this.$refs[this.letter][0]
      this.scroll.scrollToElement(letterDom)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color: #ccc

  .list
    position absolute
    top 1.58rem
    bottom 0
    left 0
    right 0
    overflow hidden
    .area
      overflow hidden
      .title
        background-color: #eee
        line-height .44rem
        padding-left .2rem
        font-size .26rem
      .button-list
        padding .1rem .6rem .1rem .1rem
        .button-wraper
          float left
          width 33.33%
          .button
            margin .1rem
            padding .1rem 0
            text-align center
            border: .02rem solid #ccc
            border-radius .06rem
      .item-list
        .item
          line-height .76rem
          padding-left .2rem
</style>
