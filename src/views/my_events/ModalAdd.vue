<template>
    <b-modal id="modalAddMyEvent" centered>
        <template #modal-title>
            Criar Evento
        </template>
        <div class="d-block">
            <div class="row">
                <div class="col-12 mb-3 mt-4">
                    <InputForm
                        :icon="icons.mdiFileDocumentEdit"
                        placeholder="Nome"
                        type="text"
                        @updateValue="form.name = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <TextArea
                        :icon="icons.mdiCardText "
                        placeholder="Descrição"
                        @updateValue="form.description = $event"
                    />
                </div>
                <div class="col-6 mb-3">
                    <InputForm
                        :icon="icons.mdiCalendarMonth"
                        :value="form.day"
                        type="date"
                        @updateValue="form.day = $event"
                    />
                </div>
                <div class="col-6 mb-3">
                    <InputForm
                        :icon="icons.mdiClockTimeTen"
                        :value="form.time"
                        type="time"
                        @updateValue="form.time = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <InputFile
                        :value="form.image"
                        @updateValue="form.image = $event"
                    />
                </div>
                <div class="col-12 col-md-6 mb-3 mt-4">
                    <InputForm
                        :icon="icons.mdiMap"
                        placeholder="CEP"
                        mask="#####-###"
                        :value="form.zip_code"
                        type="text"
                        @updateValue="form.zip_code = $event"
                    />
                </div>
                <div class="col-8 mb-3">
                    <InputForm
                        :icon="icons.mdiMapMarker"
                        placeholder="Rua"
                        disabled=true
                        :value="form.street"
                        type="text"
                        @updateValue="form.street = $event"
                    />
                </div>
                <div class="col-4 mb-3">
                    <InputForm
                        :icon="icons.mdiNumeric0Box"
                        placeholder="Nº"
                        :value="form.number"
                        type="text"
                        @updateValue="form.number = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <InputForm
                        :icon="icons.mdiMapMarker"
                        placeholder="Bairro"
                        disabled=true
                        :value="form.neighborhood"
                        type="text"
                    />
                </div>
                <div class="col-9 mb-3">
                    <InputForm
                        :icon="icons.mdiMapMarker"
                        placeholder="Cidade"
                        disabled=true
                        :value="form.city"
                        type="text"
                    />
                </div>
                <div class="col-3 mb-3">
                    <InputForm
                        :icon="icons.mdiMapMarker"
                        placeholder="UF"
                        disabled=true
                        :value="form.state"
                        type="text"
                    />
                </div>
            </div>
        </div>
        <template #modal-footer>
            <button @click="closeModal()" type="button" class="btn btn-secondary">Fechar</button>
            <button @click="addEvent()" ref="btnAdd" type="button" class="btn btn-primary">Criar</button>
        </template>
    </b-modal>
</template>

<script>
import InputForm from '../../components/forms/InputForm'
import TextArea from '../../components/forms/TextArea'
import InputFile from '../../components/forms/InputFile'
import { 
    mdiAccount, mdiLock, mdiFileDocumentEdit, mdiMap,
    mdiCardText, mdiMapMarker, mdiNumeric0Box, mdiClockTimeTen,
    mdiCalendarMonth 
} from '@mdi/js';

export default {
    name: 'ModalAdd',

    data() {
        return {
            form: {
                name: '',
                description: '',
                day: '',
                time: '',
                zip_code: '',
                street: '',
                number: '',
                neighborhood: '',
                city: '',
                state: '',
                image: '',
            },
            
            icons: {
                mdiAccount : mdiAccount,
                mdiLock: mdiLock,
                mdiFileDocumentEdit: mdiFileDocumentEdit,
                mdiMap: mdiMap,
                mdiCardText: mdiCardText,
                mdiMapMarker: mdiMapMarker,
                mdiNumeric0Box: mdiNumeric0Box,
                mdiClockTimeTen: mdiClockTimeTen,
                mdiCalendarMonth: mdiCalendarMonth
            }
        }
    },

    components: {
        InputForm,
        TextArea,
        InputFile,
    },

    methods: {
        async addEvent() {
            const formData = new FormData();
            formData.append('name', this.form.name)
            formData.append('description', this.form.description)
            formData.append('date', this.form.day + ' ' + this.form.time)
            formData.append('zip_code', this.form.zip_code)
            formData.append('street', this.form.street)
            formData.append('number', this.form.number)
            formData.append('neighborhood', this.form.neighborhood)
            formData.append('city', this.form.city)
            formData.append('state', this.form.state)
            formData.append('image', this.form.image)

            this.$refs.btnAdd.innerText = 'Criando...'
            this.$refs.btnAdd.disabled = true
 
            await this.$api.post('/events/create', formData)
            .then((response) => {
                this.$toastr.s('Evento criado com sucesso!')
                this.closeModal()
                this.$parent.events.unshift(response.data)
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })

            this.$refs.btnAdd.innerText = 'Criar'
            this.$refs.btnAdd.disabled = false
        },

        closeModal() {
            this.$root.$emit('bv::hide::modal', 'modalAddMyEvent')
            this.clearFields()
        },

        async searchAddress() {
            await this.$api.get('https://viacep.com.br/ws/' + this.form.zip_code + '/json/')
            .then((response) => {
                this.form.street = response.data.logradouro
                this.form.neighborhood = response.data.bairro
                this.form.city = response.data.localidade
                this.form.state = response.data.uf
            })
        },

        clearFields() {
            this.form.name = ''
            this.form.description = ''
            this.form.street = ''
            this.form.number = ''
            this.form.neighborhood = ''
            this.form.city = ''
            this.form.state = ''
        }
    },

    watch: {
        'form.zip_code'() {
            if(this.form.zip_code.length == 9) {
                this.searchAddress();
            }
            else
            {
                this.form.street = ''
                this.form.neighborhood = ''
                this.form.city = ''
                this.form.state = ''
            }
        }
    }
}
</script>

<style>
</style>