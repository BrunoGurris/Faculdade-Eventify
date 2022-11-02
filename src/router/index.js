import Vue from 'vue'
import VueRouter from 'vue-router'
import middleware from '@/services/middleware'
import Template from '../components/Template'

import Login from '../views/login/Index'
import Home from '../views/home/Index'
import MyEvents from '../views/my_events/Index'
import Event from '../views/event/Index'

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
            },
            {
                path: 'events',
                name: 'MyEvents',
                component: MyEvents,
            },
            {
                path: 'events/:id',
                name: 'Event',
                component: Event,
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
