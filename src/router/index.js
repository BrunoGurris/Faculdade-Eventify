import Vue from 'vue'
import VueRouter from 'vue-router'
import middleware from '@/services/middleware'
import Template from '../components/Template'

import Login from '../views/login/Index'
import Home from '../views/home/Index'
import MyEvents from '../views/my_events/Index'
import AnEvent from '../views/my_events/AnEvent'

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
                component: Home,
                meta: { title: 'Eventify - Todos Eventos' }
            },
            {
                path: 'events',
                name: 'MyEvents',
                component: MyEvents,
                meta: { title: 'Eventify - Meus Eventos' }
            },
            {
                path: 'anevent',
                name: 'AnEvent',
                component: AnEvent,
            },
            
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
