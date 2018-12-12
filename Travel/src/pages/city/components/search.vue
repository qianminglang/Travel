<template>
    <div>
      <div class="search">
        <input v-model="keyWord" class="search-input" type="text" placeholder="输入城市名或拼音">
      </div>
      <div class="search-content" ref="search"
           v-show="keyWord"
      >
        <ul>
          <li class="item border-topbottom" v-for="(item) of list" :key="item.id"
            @click="handleCityClick(item.name)"
          >{{item.name}}</li>
          <li class="item border-topbottom" v-show="hasNoData">未查询到结果</li>
        </ul>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'city-search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      timer: null,
      list: [],
      showContent: ''
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      /* 派发一个名字叫changeCity的action，并传递参数city
       * 但是这个changeCity的action必须在创建store的时候有对应名字的action
        * 且这个action的第一个参数是上下文，第二个参数表示dispatch传递过去的参数
        * */
      this.$store.dispatch('changeCity', city)
      // 直接调用mutations方法,将index中的actions注释掉也是可以的
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
          this.list = result
        }
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    background-color: $bgColor;
    padding 0 .1rem
    .search-input
      box-sizing border-box
      padding 0 .1rem
      border-radius .06rem
      height .62rem
      line-height .62rem
      width 100%
      text-align center
      color #666
  .search-content
    position absolute
    z-index 1
    overflow hidden
    background-color: #eee
    top 1.58rem
    right 0
    left 0
    bottom 0
    .item
      line-height .62rem
      padding-left  .2rem
      color #666
</style>
