<template>
  <div class="wraper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-image" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'my-swiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1701/f1/df0a5d9e78e33e02.jpg_750x200_54d521c3.jpg'
        }
      ]
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
