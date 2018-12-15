<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import banner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
export default {
  name: 'detail',
  components: {
    banner,
    detailHeader,
    detailList
  },
  data () {
    return {
      list: [
        {title: '一级成人票',
          child: [
            {title: '二级成人票',
              child: [
                {title: '三级成人票'}
              ]
            }
          ]
        }, {title: '一级学生票',
          child: [
            {title: '二级学生票',
              child: [
                {title: '三级学生票'}
              ]
            }
          ]
        }, {title: '一级儿童票',
          child: [
            {title: '二级儿童票',
              child: [
                {title: '三级儿童票'}
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
