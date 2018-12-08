<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
    <home-recommend></home-recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import homeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import HomeRecommend from './components/recommend'
import Weekend from './components/weekend'

export default {
  name: 'home',
  components: {
    homeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend,
    Weekend
  }
}
</script>

<style scoped>

</style>
