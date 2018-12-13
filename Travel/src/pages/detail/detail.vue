<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import banner from './components/banner'
import detailHeader from './components/header'
export default {
  name: 'detail',
  components: {
    banner,
    detailHeader
  }
}
</script>

<style scoped>

</style>
