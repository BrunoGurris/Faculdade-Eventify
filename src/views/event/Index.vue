<template>
    <div>
        <CardEvent :event="event" />
    </div>
</template>

<script>
import CardEvent from './CardEvent'

export default {
    name: 'Event',

    data() {
        return {
            event: {}
        }
    },

    components: {
        CardEvent
    },

    methods: {
        async getEvent() {
            await this.$api.get('/events/' + this.$route.params.id)
            .then((response) => {
                this.event = response.data
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })
        },
    },

    created() {
        this.getEvent()
    }
}
</script>

<style>
</style>