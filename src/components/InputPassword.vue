<template>
    <div class="input-group" :class="className">
        <span class="input-group-text">
            <svg style="width:20px; height:20px">
                <path :d="icon" />
            </svg>
        </span>
        <input v-model="value" type="password" class="form-control" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    props: ['placeholder', 'className', 'icon'],

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