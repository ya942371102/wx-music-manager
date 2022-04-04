import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: resolve => require(['../pages/Login.vue'], resolve)
        },
        {
            path: '/home',
            component: resolve => require(['../components/Home.vue'], resolve),
            children: [{
                    path: '/info',
                    component: resolve => require(['../pages/Info.vue'], resolve)
                },
                {
                    path: '/consumer',
                    component: resolve => require(['../components/Consumer.vue'], resolve)
                },
                {
                    path: '/singer',
                    component: resolve => require(['../components/Singer.vue'], resolve)
                },
                {
                    path: '/songList',
                    component: resolve => require(['../components/SongList.vue'], resolve)
                },
                {
                    path: '/movieList',
                    component: resolve => require(['../components/MovieList.vue'], resolve)
                }
            ]
        }
    ]
})