<template>
    <div>
        <div class="d-flex justify-content-between mb-4">
            <h2>Meus Eventos</h2>
            <button @click="openModalAdd()" type="button" class="btn btn-primary">Criar Evento</button>
        </div>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <CardMyEvent v-for="(event, n) in events" :key="n" :event="event" />
        </div>

        <ModalAdd />
    </div>
</template>

<script>
import CardMyEvent from '../../components/events/CardMyEvent'
import ModalAdd from './ModalAdd'

export default {
    name: 'Home',

    data() {
        return {
            events: [],
        }
    },

    components: {
        CardMyEvent,
        ModalAdd
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
        }
    },
    
    created() {
        this.getEvents()
    }
}
</script>
