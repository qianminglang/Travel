<template>
  <div>
    <div class="title">
      周末去哪
    </div>
    <div class="border-bottom" v-for="(item) of itemList" :key="item.id">
      <div class="image-wraper">
        <img class="item-img" :src="item.imgUlr" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-comment">{{item.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      itemList: [{
        id: '0001',
        imgUlr: 'http://img1.qunarzz.com/sight/source/1811/1b/37db15b1c4c90f.jpg_r_640x214_f950b08c.jpg',
        title: '七彩云南古滇温泉山庄',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0002',
        imgUlr: 'http://img1.qunarzz.com/sight/source/1507/f5/012149e670d36.jpg_r_640x214_6f073b91.jpg',
        title: '轿子雪山',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0003',
        imgUlr: 'http://img1.qunarzz.com/sight/source/1505/4f/a09503e4b9ee85.jpg_r_640x214_3c128df5.jpg',
        title: '花之城',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0004',
        imgUlr: 'http://img1.qunarzz.com/sight/source/1505/1e/e93461ee0c18c0.jpg_r_640x214_036d725c.jpg',
        title: '云南映象',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0005',
        imgUlr: 'http://img1.qunarzz.com/sight/source/1505/21/8c02c117e856b7.jpg_r_640x214_a9c95205.jpg',
        title: '金方森林温泉',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixmins.styl"
  .title
    background-color: #eee
    text-indent .2rem
    line-height .8rem
    margin-top .2rem
      height 0
  .image-wraper
    overflow hidden
    padding-bottom 33.9%
    height 0
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
    .item-comment
      line-height .32rem
</style>
