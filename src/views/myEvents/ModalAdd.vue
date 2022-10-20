<template>
    <b-modal id="modalAddMyEvent" centered>
        <template #modal-title>
            Criar Evento
        </template>
        <div class="d-block text-center">
            <div class="row">
                <div class="col-12 mb-3 mt-4">
                    <InputText
                        :icon="icons.mdiFileDocumentEdit"
                        placeholder="Nome"
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <TextArea
                        :icon="icons.mdiCardText "
                        placeholder="Descrição"
                        @updateValue="username = $event"
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
                        @updateValue="username = $event"
                        mask="#####-###"
                    />
                </div>
                <div class="col-8 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="Rua"
                        @updateValue="username = $event"
                        disabled=true
                    />
                </div>
                <div class="col-4 mb-3">
                    <InputText
                        :icon="icons.mdiNumeric0Box"
                        placeholder="Nº"
                        @updateValue="username = $event"
                    />
                </div>
                <div class="col-12 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="Bairro"
                        @updateValue="username = $event"
                        disabled=true
                    />
                </div>
                <div class="col-9 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="Cidade"
                        @updateValue="username = $event"
                        disabled=true
                    />
                </div>
                <div class="col-3 mb-3">
                    <InputText
                        :icon="icons.mdiMapMarker"
                        placeholder="UF"
                        @updateValue="username = $event"
                        disabled=true
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
    }
}
</script>

<style>

</style>