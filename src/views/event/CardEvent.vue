<template>
    <div class="card mb-3">
        <img :src="$store.state.api_images + event.image" class="card-img-top" height="500">
        <div class="card-body">
            <div>
                <b-form-rating @change="rating()" variant="success" v-model="rating_me" stars="10"></b-form-rating>
                <p class="text-end mt-2">Média de avaliação: {{ event.rating }}</p>
            </div>

            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text mt-5">{{ event.description }}</p>
            <p class="card-text m-0 mt-5"><b><small class="text-muted">Horário: {{ formatDate(event.date) }}</small></b></p>
            <p class="card-text m-0"><i><small class="text-muted">{{ event.street }}, {{ event.number }}, {{ event.neighborhood }} - CEP: {{ event.zip_code }} - {{ event.city }}/{{ event.state }}</small></i></p>
            
            <p class="text-end m-0 mt-2">Participantes: {{ event.count_participants }}</p>
            <div class="d-flex justify-content-end">
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

    data() {
        return {
            rating_me: this.event.rating_me
        }
    },

    methods: {
        async participate() {
            await this.$api.put('/events/'+ this.event.id + '/participate')
            .then((response) => {
                this.$parent.event = response.data
                this.$toastr.s('Agora você esta participando do evento!')
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },

        async departicipate() {
            await this.$api.put('/events/'+ this.event.id + '/departicipate')
            .then((response) => {
                this.$parent.event = response.data
                this.$toastr.w('Você não esta mais participando do evento!')
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },

        async rating() {
            const formData = new FormData();
            formData.append('rating', this.rating_me)

            await this.$api.post('/events/'+ this.event.id + '/rating', formData)
            .then(() => {
                this.$toastr.i('Evento avaliado com sucesso!')
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },

        formatDate(value) {
            var date = new Date(value)
            return ("0" + date.getDate()).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' as ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2)
        }
    },

    watch: {
        'event.rating_me'() {
            this.rating_me = this.event.rating_me
        }
    }
}
</script>

<style>
</style>