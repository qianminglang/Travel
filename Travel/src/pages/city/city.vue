<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import cityHeader from './components/header'
import citySearch from './components/search'
export default {
  name: 'list',
  components: {
    cityHeader,
    citySearch
  }
}
</script>

<style scoped>

</style>
