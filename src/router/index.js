import Vue from 'vue'
import VueRouter from 'vue-router'
import middleware from '@/services/middleware'
import Template from '../components/Template'

import RegisterUser from '../views/RegisterUser'
import Login from '../views/Login'
import Home from '../views/Home'
import MyEvents from '../views/MyEvents'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Template,
        beforeEnter: middleware.auth,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'events',
                name: 'MyEvents',
                component: MyEvents
            },
            // {
            //     path: 'dashboard',
            //     beforeEnter: middleware.isClient,
            //     component: resolve => require(['./components/pages/dashboard/Dashboard.vue'], resolve),
            //     meta: {
            //         title: 'Dashboard',
            //         breadcrumb: [
            //             {
            //                 html:'<i class="ti-home"></i> Dashboard',
            //                 href: '/dashboard',
            //             }
            //         ]
            //     }
            // },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: RegisterUser
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
