<template>
    <div class="input-group" :class="className">
        <span class="input-group-text">
            <svg style="width:24px; height:24px">
                <path :d="icon" />
            </svg>
        </span>
        <textarea v-model="value" class="form-control" rows="5" :placeholder="placeholder" style="resize: none"></textarea>
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