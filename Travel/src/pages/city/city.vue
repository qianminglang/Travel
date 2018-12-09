<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleAlphabetChange"></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
import axious from 'axios'
export default {
  name: 'list',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  },
  methods: {
    getCityInfo () {
      axious.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      const dataReturn = res.data
      if (dataReturn.ret) {
        this.cities = dataReturn.data.cities
        this.hotCities = dataReturn.data.hotCities
        console.log(this.cities)
      }
    },
    handleAlphabetChange (data) {
      this.letter = data
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped>

</style>
