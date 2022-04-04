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
            }]
        }
    ]
})