<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  props: {
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  /*@import "../../../assets/styles/varibles.styl"*/
 /* css文件引入css文件需要在import前面加@符号，
    文件路径中的@符号表示src目录，但是在css文件总引入css文件需要在@符号前面加~，如下*/
  @import "~styles/varibles.styl"
  .header
    display:flex
    line-height:$headerHeight
    background: $bgColor
    color: #ffffff
    .header-left
      width:0.64rem
      float:left
      .back-icon
        text-align center
        font-size 0.4rem
    .header-input
      flex:1
      border-radius 0.1rem
      margin-top: 0.12rem
      margin-left 0.2rem
      padding-left 0.2rem
      height:0.64rem
      line-height:0.64rem
      background: #fff
      color: #cccccc
    .header-right
      min-width :1.04rem
      padding .1rem
      text-align center
      color #fff
      .arrow-icon
        margin-left: -0.12rem
</style>
