<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
export default {
  name: 'list',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
}
</script>

<style scoped>

</style>
