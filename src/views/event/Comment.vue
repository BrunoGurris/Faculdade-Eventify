<template>
    <div class="col-12">
        <div class="card text-dark bg-light my-3">
            <div class="card-header fw-bold">{{ comment.user.name }}</div>
            <div class="card-body">
                <p class="card-text">{{ comment.message }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    props: ['comment'],

    data() {
        return {

        }
    }
}
</script>

<style>
</style>