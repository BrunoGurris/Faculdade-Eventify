<template>
    <div class="row mt-4 pt-4">
        <div class="col-1 col-md-2 col-lg-3">
        </div>
        <div id="box" class="col-10 col-md-8 col-lg-6 rounded p-0 pb-5 shadow">
            <div id="top" class="text-center py-5">
                <h2>Cadastrado de Usuário</h2>
            </div>
            <div class="row mt-5 px-5">
                <div class="col-12 mb-3">
                    <input v-model="add.name" type="text" class="form-control shadow-sm" placeholder="Nome completo">
                </div>
                <div class="col-12 mb-3">
                    <input v-model="add.username" type="text" class="form-control shadow-sm" placeholder="Nome usuário">
                </div>
                <div class="col-12 mb-3">
                    <input v-model="add.password" type="password" class="form-control shadow-sm" placeholder="Senha">
                </div>
                <div class="col-12 mb-3">
                    <input v-model="add.confirm_password" type="password" class="form-control shadow-sm" placeholder="Confirmar senha">
                </div>
                <div class="col-12 mb-3">
                    <input v-model="add.email" type="text" class="form-control shadow-sm" placeholder="E-mail">
                </div>
                <div class="col-12 mb-3">
                    <input v-model="add.confirm_email" type="text" class="form-control shadow-sm" placeholder="Confirmar e-mail">
                </div>
                <div class="col-12 mb-3 d-flex justify-content-evenly">
                    <button id="btnSave" type="button" class="btn shadow-sm">SALVAR</button>
                    <button id="btnReturn" type="button" class="btn shadow-sm">VOLTAR</button>
                </div>
            </div>
        </div>
        <div class="col-1 col-md-2 col-lg-3">
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    data() {
        return {
            add: {
                name: '',
                username: '',
                password: '',
                confirm_password: '',
                email: '',
                confirm_email: ''
            }
        }
    }
}
</script>

<style>
#box {
    border: 2px solid #01A5B1;
    border-radius: 5px;
}

#top{
    font-weight: bold;
    color: white;

    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-image: linear-gradient(#131E2F, #01A5B1);
}

#btnSave{
    width: 110px;

    color: white;
    font-weight: bold;

    background: #131E2F;
}

#btnReturn{
    width: 110px;

    color: white;
    font-weight: bold;

    background: #01A5B1;
}
</style>