<template>
    <div class="col">
        <div class="card h-100">
            <img v-if="event.image" :src="$store.state.api_images + event.image" class="card-img-top" height="250">
            <div class="card-body">
                <h5 class="card-title">{{ event.name }}</h5>
                <p class="card-text m-0 mt-5"><b>Horário: </b>{{ formatDate(event.date) }}</p>
                <p class="card-text m-0"><b>Endereço: </b><i>{{ event.street }}, {{ event.number }}, {{ event.neighborhood }} - CEP: {{ event.zip_code }} - {{ event.city }}/{{ event.state }}</i></p>
            </div>
            <div class="card-footer text-right">
                <button @click="goToDetails(event)" type="button" class="btn btn-dark">Detalhes</button>
                <button type="button" class="btn btn-primary ms-3" disabled>Editar</button>
                <button @click="openModalDelete(event)" type="button" class="btn btn-outline-danger ms-3">Excluir</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardEvent',

    props: ['event'],

    methods: {
        goToDetails(event) {
            this.$router.push({ path: '/events/' + event.id })
        },

        openModalEdit(event) {
            this.$parent.openModalEdit(event)
        },

        openModalDelete(event) {
            this.$parent.openModalDelete(event)
        },

        formatDate(value) {
            var date = new Date(value)
            return ("0" + date.getDate()).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' as ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2)
        }
    }
}
</script>

<style>
</style>