<template>
  <div>
    <div class="title">
      热销推荐
    </div>
    <div class="item border-bottom" v-for="(item) of itemList">
      <img class="item-img" :src="item.imgUlr" alt="">
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-comment">{{item.comment}}</div>
        <div class="item-price">{{item.price}}</div>
        <div class="item-address">{{item.address}}</div>
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
        imgUlr: 'http://img1.qunarzz.com/sight/p0/1808/fb/fb02599f5f7ea8f9a3.img.jpg_200x200_4525b394.jpg',
        title: '七彩云南古滇温泉山庄',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0002',
        imgUlr: 'http://img1.qunarzz.com/sight/p0/201405/22/9fe3286bde7dd013112e133f09f71967.jpg_200x200_5417288e.jpg',
        title: '轿子雪山',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0003',
        imgUlr: 'http://img1.qunarzz.com/sight/p0/1710/9a/9a1d6bad7eb0ac0aa3.img.jpg_200x200_57fb41be.jpg',
        title: '花之城',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0004',
        imgUlr: 'http://img1.qunarzz.com/sight/p0/1708/21/215c0b092e140ef3a3.img.jpg_200x200_7a01f355.jpg',
        title: '云南映象',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0005',
        imgUlr: 'http://img1.qunarzz.com/sight/p0/1412/80/86fc620a3e6857725324fbe7ec76d9ba.water.jpg_200x200_15f27799.jpg',
        title: '金方森林温泉',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0006',
        imgUlr: 'http://img1.qunarzz.com/sight/p0/201308/12/2da3b965fe830849c8d65eac.jpg_200x200_d8e44d91.jpg',
        title: '昆明柏联SPA温泉',
        comment: '26条评论',
        price: '60',
        address: '晋宁县'
      }, {
        id: '0007',
        imgUlr: 'http://img1.qunarzz.com/sight/p43/201211/06/f743115a14e33a7293835fbb.jpg_200x200_60b8e1a9.jpg',
        title: '东川红土地',
        comment: '417条评论',
        price: '190',
        address: '东川区'
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      padding .1rem
      width 1.7rem
      height 1.7rem
    .item-info
      position relative
      padding .1rem
      flex 1
      .item-title
        line-height .5rem
        font-size .3rem
        ellipsis()
      .item-comment
        line-height .5rem
        font-size .2rem
        ellipsis()
      .item-price
        line-height .5rem
        font-size .2rem
        ellipsis()
      .item-address
        position absolute
        top 1.2rem
        right .4rem
        ellipsis()
</style>
