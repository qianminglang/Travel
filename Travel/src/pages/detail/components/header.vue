<template>
  <div class="header">
    <router-link  v-show="showAbs" tag="div" to="/" class="header-abs" >
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back-icon">&#xe624;</div>
      </router-link>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log(document.documentElement.scrollTop);
      const top = document.documentElement.scrollTop;
      if ( top > 40) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    position absolute
    top .2rem
    left .2rem
    background-color rgba(0,0,0,0.8)
    width .8rem
    height .8rem
    border-radius .4rem
    line-height .8rem
    text-align center
    .back-icon
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height .86rem
    line-height $headerHeight
    text-align center
    background-color: $bgColor;
    color: #ffffff
    font-size .32rem
    .header-back-icon
      position absolute
      top 0
      left 0
      color #fff
  .content
    height 50rem
</style>
