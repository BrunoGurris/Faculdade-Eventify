<template>
    <div>
        <CardEvent :event="event" />

        <div class="row mt-5">
            <div class="col-12">
                <div class="input-group">
                    <span class="input-group-text">
                        <svg style="width:24px; height:24px">
                            <path :d="icons.mdiCardText" />
                        </svg>
                    </span>
                    <textarea v-model="form.message" class="form-control" rows="5" placeholder="Escreva seu comentário" style="resize: none"></textarea>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button @click="comment()" type="button" class="btn btn-primary mt-2">Comentar</button>
            </div>
        </div>

        <h5 class="mt-5">Comentários</h5>

        <div class="row">
            <div class="col-12">
                <NoList 
                    :array="event.comments"
                    text="Este evento não possui comentários!"
                    textLoad="Carregando comentários..."
                    :isLoaded="isLoaded"
                />
            </div>
        </div>

        <div class="row">
            <Comment v-for="(comment, n) in event.comments" :key="n" :comment="comment" />
        </div>
    </div>
</template>

<script>
import CardEvent from './CardEvent'
import Comment from './Comment'
import { mdiCardText } from '@mdi/js';
import NoList from '../../components/NoList'

export default {
    name: 'Event',

    data() {
        return {
            event: {},
            isLoaded: false,

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
        NoList
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
        this.isLoaded = true
    }
}
</script>

<style>
</style>