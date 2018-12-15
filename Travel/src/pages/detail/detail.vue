<template>
  <div>
    <banner :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :sightName="sightName"></banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import banner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    banner,
    detailHeader,
    detailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.bannerImg = res.data.bannerImg
        this.categoryList = res.data.categoryList
        this.gallaryImgs = res.data.gallaryImgs
        this.sightName = res.data.sightName
      }
      console.log(res)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
