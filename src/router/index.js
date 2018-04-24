import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'components/Recommend/Recommend'
import Singer from 'components/Singer/Singer'
import Search from 'components/Search/Search'
import Rank from 'components/rank/rank'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Recommend
        },
        {
            path: '/recommend',
            component: Recommend
        },
        {
            path: '/singer',
            component: Singer
        },
        {
            path: '/rank',
            component: Rank
        },
        {
            path: '/search',
            component: Search
        }
    ]
})