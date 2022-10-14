import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterUser from '../views/RegisterUser'
import Login from '../views/Login'
import Teste from '../components/HelloWorld'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Teste,
        children: [
            {
                path: '',
                name: 'Login',
                component: Login
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
