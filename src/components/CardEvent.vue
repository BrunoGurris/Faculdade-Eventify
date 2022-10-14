<template>
    <div class="col">
        <div class="card h-100">
            <img :src="event.image" class="card-img-top" height="250">
            <div class="card-body">
                <h5 class="card-title">{{ event.name }}</h5>
                <p class="card-text mt-3">{{ event.description }}</p>
                <p class="card-text mt-3"><i>{{ event.address }}</i></p>
            </div>
            <div class="card-footer text-right">
                <button type="button" class="btn btn-primary">Participar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardEvent',

    props: ['event']
}
</script>

<style>
</style>