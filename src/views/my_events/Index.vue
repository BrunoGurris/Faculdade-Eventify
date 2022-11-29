<template>
    <div>
        <div class="d-flex justify-content-between mb-4">
            <h2>Meus Eventos</h2>
            <button @click="openModalAdd()" type="button" class="btn btn-primary">Criar Evento</button>
        </div>

        <div class="row">
            <div class="col-12">
                <NoList 
                    :array="events"
                    text="Você não possui eventos criado!"
                    textLoad="Carregando seus eventos..."
                    :isLoaded="isLoaded"
                />
            </div>
        </div>
        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <CardEvent v-for="(event, n) in events" :key="n" :event="event" />
        </div>

        <ModalAdd />
        <ModalEdit :event="modalEdit.event" />
        <ModalDelete :event="modalDelete.event" />
    </div>
</template>

<script>
import CardEvent from './CardEvent'
import ModalAdd from './ModalAdd'
import ModalEdit from './ModalEdit'
import ModalDelete from './ModalDelete'
import NoList from '../../components/NoList'

export default {
    name: 'Home',

    data() {
        return {
            events: [],
            isLoaded: false,

            modalEdit: {
                event: ''
            },

            modalDelete: {
                event: ''
            }
        }
    },

    components: {
        CardEvent,
        ModalAdd,
        ModalEdit,
        ModalDelete,
        NoList
    },

    methods: {
        async getEvents() {
            this.events = []
            this.isLoaded = false

            await this.$api.get('/events?my=true')
            .then((response) => {
                this.events = response.data
                this.isLoaded = true
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },

        openModalAdd() {
            this.$root.$emit('bv::show::modal', 'modalAddMyEvent')
        },

        openModalEdit(event) {
            this.modalEdit.event = event
            this.$root.$emit('bv::show::modal', 'modalEdit')
        },

        openModalDelete(event) {
            this.modalDelete.event = event
            this.$root.$emit('bv::show::modal', 'modalDelete')
        }
    },
    
    created() {
        this.getEvents()
        this.isLoaded = false
    }
}
</script>
