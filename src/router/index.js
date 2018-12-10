import Vue from 'vue'
import Router from 'vue-router'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'
import Goods from '@/components/goods/goods'
import App from '../App'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/ratings',
            name: 'ratings',
            component: Ratings
        },
        {
            path: '/seller',
            name: 'seller',
            component: Seller
        },
        {
            path: '/goods',
            name: 'goods',
            component: Goods
        }
    ],
    linkActiveClass: 'active' //动态配置router-link 生成的class
})