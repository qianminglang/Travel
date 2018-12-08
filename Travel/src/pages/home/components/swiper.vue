<template>
  <div class="wraper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-image" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'my-swiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*因为下面的这个样式是在home页面设置的，如果是常规的写法我们修改不了样式，
    下面写法的意思是wrapdom元素的子元素中有swiper-pagination-bullet-active
    类的修饰样式都进行穿透，那不是本页面scoped范围的样式可以穿透分支是，这个时候dev分支
  */
  .wraper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wraper
    width 100%
    height 0
    overflow hidden
    padding-bottom 27.25%
  .swiper-image
    width 100%
</style>
