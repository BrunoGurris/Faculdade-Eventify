<template>
    <b-modal id="modalDelete" centered>
        <template #modal-title>
            Excluir Evento
        </template>
        <div class="d-block">
            Você realmente deseja excluir o evento <b>{{ event.name }}</b> ?
        </div>
        <template #modal-footer>
            <button @click="closeModal()" type="button" class="btn btn-secondary">Fechar</button>
            <button @click="deleteEvent()" ref="btnDelete" type="button" class="btn btn-danger">Excluir</button>
        </template>
    </b-modal>
</template>

<script>
export default {
    name: 'ModalDelete',

    props: ['event'],

    methods: {
        async deleteEvent() {
            this.$refs.btnDelete.innerText = 'Excluindo...'
            this.$refs.btnDelete.disabled = true
 
            await this.$api.delete('/events/delete/' + this.event.id)
            .then((response) => {
                this.$parent.getEvents()
                this.$toastr.s('Evento excluido com sucesso!')
                this.closeModal()
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })

            this.$refs.btnDelete.innerText = 'Excluir'
            this.$refs.btnDelete.disabled = false
        },

        closeModal() {
            this.$root.$emit('bv::hide::modal', 'modalDelete')
        }
    }
}
</script>

<style>
</style>