<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand">品牌</span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟
        </div>
        <div  v-if="seller.supports"  class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div  v-if="seller.supports" @click="showDetail"  class="support-count">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <!-- <i class="icon-keyboard_arrow_right"></i> -->
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail">

      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <splitLine message="优惠信息"></splitLine>
          <ul v-if="seller.supports" class="supports">
            <li v-for="(item, index) in seller.supports" class="support-item">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <splitLine message="商家公告"></splitLine>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="showDetail">
        <i class="iconfont icon-close"></i>
      </div>
    </div>
    </transition>

    </div>
  </div>
</template>
<script>
import star from '@/components/star/star.vue'
import splitLine from '@/components/line/splitLine.vue'
export default {
  props: {
    seller: {
      type: Object,
      require: true
    }
  },
  components: {
    star, splitLine
  },
  data(){
    return {
      detailShow: false
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special','invoice', 'guarantee']
  },
  methods: {
    showDetail(){
      this.detailShow = !this.detailShow
    }
  }
}
</script>
<style lang="stylus">
@import '../../common/styles/mixin'

  .header
    position: relative
    color: #ffffff
    background: rgba(7,17,27,.5)
    overflow: hidden
    .content-wrapper
      position: relative
      color: #fff
      padding: 24px 12px 18px 24px
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        margin-left: 16px
        font-size: 14px
        .title
          font-size: 0;
          margin: 2px 0 8px 0;
          .brand
            display: inline-block
            vertical-align:top
            width: 30px
            height: 18px
            bg-image('brand')
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height: 18px
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          font-size: 0
          .icon
            display: inline-block
            vertical-align: top
            margin-right: 4px
            pading: 0 2px
            width 12px
            height 12px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size: 10px
            line-height: 12px
      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        padding: 0 8px
        height: 24px
        line-height: 24px
        border-radius: 14px
        background: rgba(0,0,0,.2)
        text-align: center
        .count
          font-size: 10px
        .icon-right
          font-size: 10px
      // &:after
      //   position: absolute
      //   content: ''
      //   bottom: 26px
      //   right: 17px
      //   width: 4px
      //   height: 4px
      //   border-top: 2px solid #ffffff
      //   border-right: 2px solid #ffffff
      //   transform: rotate(45deg)
    .bulletin-wrapper
      position relative
      height: 28px
      line-height: 28px
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background: rgba(7,17,27,.2)
      .bulletin-title
        vertical-align: top
        display: inline-block
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align: top
        margin: 0 4px
        font-size: 10px
        font-weight: 200
      .icon-keyboard_arrow_right
        position: absolute
        font-size: 10px
        right: 12px
        top: 8px
      &:after
        position: absolute
        content: ''
        right: 12px
        top: 12px
        width: 4px
        height: 4px
        border-top: 2px solid #fff
        border-right: 2px solid #fff
        transform:rotate(45deg)
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(7,17,27,.8)
      backdrop-filter: blur(10px) /*仅支持*/
      &.fade-enter-active, .fade-leave-active
        transition: opacity  0.5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
      .detail-wrapper
        min-height: 100%
        width: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          .name
            line-height: 16px
            text-align: center
            font-size: 16px
            font-weight: 700
          .star-wrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center
          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              font-size: 0
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                width: 16px
                height: 16px
                vertical-align: top
                margin-right: 6px
                background-size: 16px 16px
                background-repeat: no-repeat
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')
              .text
                line-height: 16px
                font-size: 12px
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              padding: 0 12px
              line-height: 24px
              font-size: 14px
      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto
        clear: both
        font-size: 32px

</style>


