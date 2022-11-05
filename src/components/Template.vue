<template>
    <div>
        <div id="header-template">
            <div class="d-flex justify-content-between">
                <div class="text-center mt-2 ms-16 ps-5">
                    <h2 class="text-white m-0">Eventify</h2>
                    <h6 class="text-white m-0">Seu site de eventos</h6>
                </div>

                <div class="d-flex align-items-center mt-2 w-25">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Buscar evento...">
                        <button class="btn bg-white" type="button">
                            <v-icon>{{ icons.mdiMagnify }}</v-icon>
                        </button>
                    </div>
                </div>

                <div>
                    <b-dropdown ref="dropdown" dropleft variant="none" :html="`<button id='user-header-template' class='rounded-circle mt-2 text-center text-white'>U</button>`">
                        <b-dropdown-item-button>Perfil</b-dropdown-item-button>
                        <b-dropdown-item-button @click="logout()">Sair</b-dropdown-item-button>
                    </b-dropdown>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 d-flex">
                <div id="menu-template">
                    <div v-for="(item_menu, n) in items_menu"
                        :key="n" class="item-menu-template rounded"
                        :class="item_menu.route == route ? 'active-item-menu-template' : ''"
                        @click="changeRoute(item_menu.route)"
                    >
                        {{ item_menu.label }}
                    </div>
                </div>
                <div id="body-template" class="w-100 h-100 p-4">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mdiMagnify, mdiAccountOutline  } from '@mdi/js';

export default {
    name: 'Template',

    data() {
        return {
            route: this.$route.path,

            items_menu: [
                {
                    route: '/',
                    label: 'Home'
                },
                {
                    route: '/events',
                    label: 'Meus Eventos'
                },
            ],

            icons: {
                mdiMagnify: mdiMagnify,
                mdiAccountOutline: mdiAccountOutline
            }
        }
    },

    methods: {
        changeRoute(path) {
            this.$router.push(path)
        },

        async logout() {
            await this.$api.get('/logout')
            .then(() => {
                localStorage.setItem('_token', '')
                this.$router.push('/login')
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },
    },

    watch: {
        '$route' (to) {
            this.route = to.path
        }
    }
}
</script>

<style>
#header-template{
    width: 100%;
    height: 80px;

    position: fixed;
    background: #131E2F;
    z-index: 2;
}

#menu-template{
    width: 300px;
    height: calc(100vh - 80px);

    margin-top: 80px;
    padding: 10px;

    position: fixed;
    background: #01A5B1;
    z-index: 2;

}

#body-template{
    margin-top: 80px;
    overflow: auto;

    margin-left: 300px;
}

.item-menu-template {
    width: 280px;
    height: 60px;

    font-size: 20px;
    font-weight: bold;
    color: white;

    text-align: center;
    line-height: 60px;
}

.item-menu-template:hover{
    cursor: pointer;
    background: #086F7D;
    transition: 0.5s;
}

.active-item-menu-template {
    background: #086F7D;
}

#user-header-template{
    width: 60px;
    height: 60px;

    background: #086F7D;
}

#user-header-template:hover{
    cursor: pointer;
    background: #06555f;
    transition: 0.5s;
}
</style>
