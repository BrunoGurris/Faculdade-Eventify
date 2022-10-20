<template>
    <div class="input-group" :class="className">
        <span class="input-group-text">
            <svg style="width:24px; height:24px">
                <path :d="icon" />
            </svg>
        </span>
        <input v-model="value" v-mask="mask" type="text" class="form-control" :placeholder="placeholder" :disabled="disabled">
    </div>
</template>

<script>
export default {
    props: ['placeholder', 'className', 'icon', 'disabled', 'mask'],

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