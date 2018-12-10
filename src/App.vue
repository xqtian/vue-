<template>
  <div id="app" class="app">
    <v-header :seller = "seller"></v-header>
    <div class="tab">
      <div class="tab-item"><router-link class="link" to="goods">商品</router-link></div>
      <div class="tab-item"><router-link class="link" to="ratings">评论</router-link></div>
      <div class="tab-item"><router-link class="link" to="seller">商家</router-link></div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from './components/header/header'

const ERR_OK = 0;

export default {
  name: 'App',
  data() {
    return {
      seller: {
      }
    }
  },
  created(){
    this.$http.get('/api/seller').then((res) => {
      res = res.body;
      if(res.erron === ERR_OK){
        this.seller = res.data;
      }
    });
  },
  components: {
    "v-header":Header
  }
}
</script>

<style lang="stylus">
@import './common/styles/mixin';

  .app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align:center
        & > .link
          display: block
          font-size: 14px
          color: rgb(77,85,93)
          &.active
            color: rgb(240,20,20)

</style>
