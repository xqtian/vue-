<template>
  <div class="cartcontrl">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count > 0" @click="decreaseCart">
        <i class="inner  iconfont icon-jian-xianxingyuankuang"></i>
      </div>
    </transition>
    <div class="cart-count"  v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add iconfont icon-plus-circle-fill" @click="addCart"></div>

  </div>
</template>
<script>
import Vue from 'vue'
export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    },
    food: {
      type: Object
    }
  },
  created() {

  },
  methods: {
    decreaseCart(event) {
      if(!event._constructed) {
        return;
      }
      if(this.food.count){
        this.food.count--;
      }
    },
    addCart(event) {
      if(!event._constructed) {
        return; //
      }
      if(!this.food.count){
         Vue.set(this.food, 'count', 1); // 给元素没有的属性，用作判断或者之类的，通过Vue.set引入
         this.food.count = 1;
      }else{
        this.food.count++;
      }
      this.$emit('cart-add', event.target);
    }
  }
}
</script>
<style lang="stylus" scoped>
.cartcontrl
  .cart-decrease
    display: inline-block
    padding: 6px
    transition: all .4s linear
    .inner
      display: inline-block;
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
      transition: all .4s linear
    &.move-enter-active, &.move-leave-active
      opacity: 1
      transform: translate3d(0, 0, 0)
      .inner
        transform: translate3d(24px, 0, 0)
        transform: rotate(0)
    &.move-enter, &.move-leave-active
      opacity: 0
      transform: translate3d(24px, 0, 0)
      .inner
        transform: rotate(180deg)
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    // color: rgb()
  .cart-add
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)

</style>
