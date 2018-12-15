<template>
  <div>
    <div class="banner" @click="bannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont arrow-icon">&#xe674;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animate>
      <common-gallery :imgs="gallaryImgs" v-show="showGallery"
                      @close="closeGallary"
      >
      </common-gallery>
    </fade-animate>
  </div>
</template>

<script>
import commonGallery from 'common/gallery/gallery'
import fadeAnimate from 'common/gallery/fadeAnimation'
export default {
  name: 'banner',
  components: {
    commonGallery,
    fadeAnimate
  },
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    sightName: String
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    bannerClick () {
      this.showGallery = true
    },
    closeGallary () {
      this.showGallery = false
    }
  }
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
