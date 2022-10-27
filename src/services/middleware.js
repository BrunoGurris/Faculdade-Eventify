import api from '@/services/axios'

export default {
    async auth(to, from, next) {
        await api.get('/me').then(() => {
            next() 
        })
        .catch(() => {
            next({
                path: '/login'
            })
        })
    }
}