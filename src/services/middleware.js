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

    // guest(to, from, next) {
    //     http.get('auth/me', {
    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem('_token')
    //         }
    //     })
    //     .then((response) => {
    //         if(response.data.username == undefined) {
    //             next()
    //         }
    //         else
    //         {
    //             next({
    //                 path: '/painel'
    //             })
    //         }
    //     })
    //     .catch(() => {
    //         console.log('Ocorreu um erro inesperado')
    //     })
    // }
}