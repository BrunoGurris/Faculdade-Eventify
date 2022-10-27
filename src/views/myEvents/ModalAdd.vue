<template>
    <b-modal id="modalAddMyEvent" centered>
        <template #modal-title>
            Criar Evento
        </template>
        <div class="d-block">
            <div class="row">
                <div class="col-12 mb-3 mt-4">
                    <InputText
                        :icon="icons.mdiFileDocumentEdit"
                        placeholder="Nome"
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
                <div class="col-12 mb-3">
                    <InputFile
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-12 col-md-6 mb-3 mt-4">
                    <InputText
                        :icon="icons.mdiMap"
                        placeholder="CEP"
                        @updateValue="form.zip_code = $event"
                        mask="#####-###"
                        :value="form.zip_code"
                    />
                </div>
                <div class="col-8 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="Rua"
                        @updateValue="form.street = $event"
                        disabled=true
                        :value="form.street"
                    />
                </div>
                <div class="col-4 mb-3">
                    <InputText
                        :icon="icons.mdiNumeric0Box"
                        placeholder="Nº"
                        @updateValue="form.number = $event"
                        :value="form.number"
                    />
                </div>
                <div class="col-12 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="Bairro"
                        disabled=true
                        :value="form.neighborhood"
                    />
                </div>
                <div class="col-9 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="Cidade"
                        disabled=true
                        :value="form.city"
                    />
                </div>
                <div class="col-3 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="UF"
                        disabled=true
                        :value="form.state"
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
import InputText from '../../components/InputText'
import TextArea from '../../components/TextArea'
import InputFile from '../../components/InputFile'
import { 
    mdiAccount, mdiLock, mdiFileDocumentEdit, mdiMap,
    mdiCardText, mdiMapMarker, mdiNumeric0Box
} from '@mdi/js';

export default {
    name: 'ModalAdd',

    data() {
        return {
            form: {
                name: '',
                description: '',
                image: '',
                zip_code: '',
                street: '',
                number: '',
                neighborhood: '',
                city: '',
                state: '',
            },
            
            icons: {
                mdiAccount : mdiAccount,
                mdiLock: mdiLock,
                mdiFileDocumentEdit: mdiFileDocumentEdit,
                mdiMap: mdiMap,
                mdiCardText: mdiCardText,
                mdiMapMarker: mdiMapMarker,
                mdiNumeric0Box: mdiNumeric0Box
            }
        }
    },

    components: {
        InputText,
        TextArea,
        InputFile
    },

    methods: {
        async addEvent() {
            const formData = new FormData();
            formData.append('name', this.form.name)
            formData.append('description', this.form.description)
            formData.append('zip_code', this.form.zip_code)
            formData.append('street', this.form.street)
            formData.append('number', this.form.number)
            formData.append('neighborhood', this.form.neighborhood)
            formData.append('city', this.form.city)
            formData.append('state', this.form.state)

            this.$refs.btnAdd.innerText = 'Criando...'
            this.$refs.btnAdd.disabled = true
 
            await this.$api.post('/events/create', formData)
            .then(() => {
                this.$toastr.s('Evento criado com sucesso!')
                this.closeModal()
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