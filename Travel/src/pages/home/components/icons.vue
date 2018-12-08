<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page) of pages" >
        <div class="icon" v-for="(item) of page" :key="item.id">
          <div class="image-icon">
            <img class="image-content" :src="item.imgUrl" alt=""/>
          </div>
          <p class="icon-desc">
            {{item.desc}}
          </p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixmins.styl"
  .icons>>> .swiper-container
    overflow: hidden
    height 0
    padding-bottom 50%
    .icon
      position relative
      overflow hidden
      width 25%
      float left
      padding-bottom 25%
      .image-icon
        position absolute
        top:0
        left 0
        right 0
        bottom 0.44rem
        box-sizing border-box
        padding .1rem
        .image-content
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height 0.44rem
        line-height .44rem
        text-align center
        color: $dareTextColor
        ellipsis()
</style>
