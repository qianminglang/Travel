<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <icons :list="iconsList"></icons>
    <home-recommend :list="recommentList"></home-recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
import homeHeader from './components/header'
import HomeSwiper from './components/swiper'
import Icons from './components/icons'
import HomeRecommend from './components/recommend'
import Weekend from './components/weekend'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    homeHeader,
    HomeSwiper,
    Icons,
    HomeRecommend,
    Weekend
  },
  data () {
    return {
      city: '',
      iconsList: [],
      recommentList: [],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      console.log('嘿嘿')
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.data.ret) {
        const resData = res.data.data
        this.city = resData.city
        this.iconsList = resData.iconList
        this.recommentList = resData.recommendList
        this.swiperList = resData.swiperList
        this.weekendList = resData.weekendList
        console.log(this.weekendList)
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
