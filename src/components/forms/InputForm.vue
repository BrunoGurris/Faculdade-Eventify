<template>
    <div class="input-group">
        <span class="input-group-text">
            <svg style="width:24px; height:24px">
                <path :d="icon" />
            </svg>
        </span>
        <input v-model="valueComponent" v-mask="mask" :type="type" :class="className" class="form-control" :placeholder="placeholder" :disabled="disabled">
    </div>
</template>

<script>
export default {
    props: ['value', 'placeholder', 'className', 'icon', 'disabled', 'mask', 'type'],

    data() {
        return {
            valueComponent: ''
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