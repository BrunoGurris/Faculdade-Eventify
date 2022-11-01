<template>
    <b-modal id="modalRegister" centered>
        <template #modal-title>
            Cadastrar
        </template>
        <div class="d-block">
            <div class="row">
                <div class="col-12 mb-3 mt-4">
                    <InputForm
                        :icon="icons.mdiAccount"
                        placeholder="Nome Completo"
                        type="text"
                        @updateValue="form.name = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <InputForm
                        :icon="icons.mdiAccountCircle"
                        placeholder="Usuário"
                        type="text"
                        @updateValue="form.username = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <InputForm
                        :icon="icons.mdiAt"
                        placeholder="Email"
                        type="text"
                        @updateValue="form.email = $event"
                    />
                </div>
                <div class="col-6 mb-3">
                    <InputForm
                        :icon="icons.mdiLock"
                        :value="form.day"
                        placeholder="Senha"
                        type="password"
                        @updateValue="form.password = $event"
                    />
                </div>
                <div class="col-6 mb-3">
                    <InputForm
                        :icon="icons.mdiLock"
                        :value="form.day"
                        placeholder="Confirmar Senha"
                        type="password"
                        @updateValue="form.password_confirm = $event"
                    />
                </div>
            </div>
        </div>
        <template #modal-footer>
            <button @click="closeModal()" type="button" class="btn btn-secondary">Fechar</button>
            <button @click="register()" ref="btnRegister" type="button" class="btn btn-primary">Cadastrar</button>
        </template>
    </b-modal>
</template>

<script>
import InputForm from '../../components/forms/InputForm'
import { 
    mdiAccount, mdiAccountCircle, mdiAt, mdiLock
} from '@mdi/js';

export default {
    name: 'ModalRegister',

    data() {
        return {
            form: {
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirm: '',
            },
            
            icons: {
                mdiAccount : mdiAccount,
                mdiAccountCircle: mdiAccountCircle,
                mdiAt: mdiAt,
                mdiLock: mdiLock,
            }
        }
    },

    components: {
        InputForm,
    },

    methods: {
        async register() {
            const formData = new FormData();
            formData.append('name', this.form.name)
            formData.append('username', this.form.username)
            formData.append('email', this.form.email)
            formData.append('password', this.form.password)
            formData.append('password_confirm', this.form.password_confirm)

            this.$refs.btnRegister.innerText = 'Cadastrando...'
            this.$refs.btnRegister.disabled = true
 
            await this.$api.post('/register', formData)
            .then(() => {
                this.$toastr.s('Registrado com sucesso! Faça o login!')
                this.clearFields()
                this.closeModal()
            })
            .catch((error) => {
                this.$toastr.e(error.response.data.message)
            })

            this.$refs.btnRegister.innerText = 'Cadastrar'
            this.$refs.btnRegister.disabled = false
        },

        closeModal() {
            this.$root.$emit('bv::hide::modal', 'modalRegister')
            this.clearFields()
        },

        clearFields() {
            this.form.name = ''
            this.form.username = ''
            this.form.email = ''
            this.form.password = ''
            this.form.password_confirm = ''
        }
    }
}
</script>

<style>
</style>