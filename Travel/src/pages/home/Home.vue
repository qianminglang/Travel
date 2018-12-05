<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
  </div>
</template>

<script>
import homeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'

export default {
  name: 'home',
  components: {
    homeHeader,
    HomeSwiper,
    Icons
  }
}
</script>

<style scoped>

</style>
