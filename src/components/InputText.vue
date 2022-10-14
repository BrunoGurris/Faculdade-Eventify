<template>
    <div class="input-group" :class="className">
        <span class="input-group-text">@</span>
        <input v-model="value" type="text" class="form-control shadow-sm" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    props: ['placeholder', 'className'],

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