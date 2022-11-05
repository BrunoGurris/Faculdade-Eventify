<template>
    <div class="input-group" :class="className">
        <input type="file" ref="inputFile" class="form-control" :disabled="disabled" @change="changeFile">
    </div>
</template>

<script>
export default {
    props: ['value', 'className', 'disabled'],

    data() {
        return {
            valueComponent: ''
        }
    },

    methods: {
        changeFile(e) {
            this.valueComponent = e.target.files[0]
        }
    },

    watch: {
        valueComponent() {
            this.$emit('updateValue', this.valueComponent)
        },

        value() {
            this.valueComponent = this.value
        }
    }
}
</script>

<style>
</style>