<template>
    <div>
        <CardEvent :event="event" />

        <div class="row mt-5">
            <div class="col-12">
                <TextArea
                    :icon="icons.mdiCardText "
                    placeholder="Escreva seu comentário"
                    @updateValue="form.message = $event"
                    @click="comment()"
                />
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button @click="comment()" type="button" class="btn btn-primary mt-2">Comentar</button>
            </div>
        </div>

        <h5 class="mt-5">Comentários</h5>
        <div class="row">
            <Comment v-for="(comment, n) in event.comments" :key="n" :comment="comment" />
        </div>
    </div>
</template>

<script>
import CardEvent from './CardEvent'
import Comment from './Comment'
import TextArea from '../../components/forms/TextArea'
import { mdiCardText } from '@mdi/js';

export default {
    name: 'Event',

    data() {
        return {
            event: {},

            form: {
                message: ''
            },

            icons: {
                mdiCardText: mdiCardText
            }
        }
    },

    components: {
        CardEvent,
        Comment,
        TextArea
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

        async comment() {
            const formData = new FormData();
            formData.append('message', this.form.message)

            await this.$api.post('/events/' + this.$route.params.id + '/comments/create', formData)
            .then(() => {
                this.getEvent()
                this.$toastr.s('Comentario criado com sucesso!')
                this.form.message = ''
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