<template>
    <div class="card mb-3">
        <img :src="$store.state.api_images + event.image" class="card-img-top" height="400">
        <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text mt-5">{{ event.description }}</p>
            <p class="card-text m-0 mt-5"><b><small class="text-muted">Horário: {{ formatDate(event.date) }}</small></b></p>
            <p class="card-text m-0"><i><small class="text-muted">{{ event.street }}, {{ event.number }}, {{ event.neighborhood }} - CEP: {{ event.zip_code }} - {{ event.city }}/{{ event.state }}</small></i></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardEvent',

    props: ['event'],

    methods: {
        formatDate(value) {
            var date = new Date(value)
            return ("0" + date.getDate()).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' as ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2)
        }
    }
}
</script>

<style>
</style>