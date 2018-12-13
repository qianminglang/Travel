<template>
  <div class="container" @click="close">
    <div class="wraper">
      <swiper :options="SwiperOptions">
        <swiper-slide v-for="(item , index) of imgs">
          <img class="gallary-img" :src="item" alt="" :key="index">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      SwiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: {
      type: Array
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    right 0
    bottom 0
    left  0
    background-color: #000;
    .wraper
      height: 0
      width: 100%
      padding-bottom 100%
      .gallary-img
        width  100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
