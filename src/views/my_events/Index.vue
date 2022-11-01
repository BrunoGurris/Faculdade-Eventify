<template>
    <div>
        <div class="d-flex justify-content-between mb-4">
            <h2>Meus Eventos</h2>
            <button @click="openModalAdd()" type="button" class="btn btn-primary">Criar Evento</button>
        </div>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <CardEvent v-for="(event, n) in events" :key="n" :event="event" />
        </div>

        <ModalAdd />
        <ModalDelete :event="modalDelete.event" />
    </div>
</template>

<script>
import CardEvent from './CardEvent'
import ModalAdd from './ModalAdd'
import ModalDelete from './ModalDelete'

export default {
    name: 'Home',

    data() {
        return {
            events: [],

            modalDelete: {
                event: ''
            }
        }
    },

    components: {
        CardEvent,
        ModalAdd,
        ModalDelete
    },

    methods: {
        async getEvents() {
            await this.$api.get('/events?my=true')
            .then((response) => {
                this.events = response.data
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },

        openModalAdd() {
            this.$root.$emit('bv::show::modal', 'modalAddMyEvent')
        },

        openModalDelete(event) {
            this.modalDelete.event = event
            this.$root.$emit('bv::show::modal', 'modalDelete')
        }
    },
    
    created() {
        this.getEvents()
    }
}
</script>
