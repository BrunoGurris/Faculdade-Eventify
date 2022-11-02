<template>
    <div>
        <p v-if="array.length == 0 && isLoaded == true" class="text-center border rounded p-5">{{ text }}</p>
        <div v-else-if="isLoaded == false" class="d-flex justify-content-center border rounded p-5">
            <div class="spinner-border me-4" role="status"></div>
            {{ textLoad }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoList',

    props: ['array', 'text', 'textLoad', 'isLoaded']
}
</script>

<style>
</style>