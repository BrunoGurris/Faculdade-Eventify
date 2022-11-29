<template>
    <div class="col">
        <div class="card h-100">
            <img :src="$store.state.api_images + event.image" class="card-img-top" height="250">
            <div class="card-body">
                <h5 class="card-title">{{ event.name }}</h5>
                <p class="card-text m-0 mt-5"><b>Horário: </b>{{ formatDate(event.date) }}</p>
                <p class="card-text m-0"><b>Endereço: </b><i>{{ event.street }}, {{ event.number }}, {{ event.neighborhood }} - CEP: {{ event.zip_code }} - {{ event.city }}/{{ event.state }}</i></p>
                <p class="text-end m-0 mt-2">Participantes: {{ event.count_participants }}</p>
            </div>
            <div class="card-footer text-right">
                <button @click="goToDetails(event)" type="button" class="btn btn-dark me-3">Detalhes</button>
                <button v-if="event.participate" @click="departicipate()" type="button" class="btn btn-danger">Desparticipar</button>
                <button v-else @click="participate()" type="button" class="btn btn-success">Participar</button>
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

        async participate() {
            await this.$api.put('/events/'+ this.event.id + '/participate')
            .then((response) => {
                this.$parent.getEvents()
                this.$toastr.s('Agora você esta participando do evento: ' + response.data.name)
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },

        async departicipate() {
            await this.$api.put('/events/'+ this.event.id + '/departicipate')
            .then((response) => {
                this.$parent.getEvents()
                this.$toastr.w('Você não esta mais participando do evento: ' + response.data.name)
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
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