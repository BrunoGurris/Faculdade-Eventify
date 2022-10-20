<template>
    <b-modal id="modalAddMyEvent" centered>
        <template #modal-title>
            Criar Evento
        </template>
        <div class="d-block text-center">
            <div class="row">
                <div class="col-11 mb-3 mx-auto mt-4">
                    <InputText
                        :icon="icons.mdiAccount"
                        placeholder="Usuário"
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-11 mb-3 mx-auto mt-1">
                    <InputPassword 
                        :icon="icons.mdiLock"
                        placeholder="Senha"
                        @updateValue="password = $event"    
                    />
                </div>
                <div class="col-11 mb-3 mx-auto mt-4">
                    <InputText
                        :icon="icons.mdiAccount"
                        placeholder="Usuário"
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-11 mb-3 mx-auto mt-4">
                    <InputText
                        :icon="icons.mdiAccount"
                        placeholder="Usuário"
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-11 mb-3 mx-auto mt-4">
                    <InputText
                        :icon="icons.mdiAccount"
                        placeholder="Usuário"
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-11 mb-3 mx-auto mt-4">
                    <InputText
                        :icon="icons.mdiAccount"
                        placeholder="Usuário"
                        @updateValue="username = $event"
                    />
                </div>
            </div>
        </div>
        <template #modal-footer>
            <button type="button" class="btn btn-secondary">Fechar</button>
            <button type="button" class="btn btn-primary">Criar</button>
        </template>
    </b-modal>
</template>

<script>
import InputText from '../../components/InputText'
import InputPassword from '../../components/InputPassword'
import { mdiAccount, mdiLock  } from '@mdi/js';

export default {
    name: 'ModalAdd',

    data() {
        return {
            icons: {
                mdiAccount : mdiAccount,
                mdiLock: mdiLock
            }
        }
    },

    components: {
        InputText,
        InputPassword
    }
}
</script>

<style>

</style>