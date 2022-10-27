<template>
    <input class="form-control" type="file">
</template>

<script>
export default {
    props: [],

    data() {
        return {
            value: ''
        }
    },

    watch: {
        value() {
            this.$emit('updateValue', this.value)
        }
    }
}
</script>

<style>
</style>