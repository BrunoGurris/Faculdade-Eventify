import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './services/axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueToastr from "vue-toastr";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.prototype.$api = api

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToastr)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
