<template>
    <div class="row mt-4 pt-4">
        <div id="box" class="col-10 col-md-8 col-lg-8 rounded p-0 shadow mx-auto my-auto">
            <div class="row m-0 p-0 h-100">
                <div id="left" class="d-none d-lg-block col-6">
                    <h5 class="text-white mt-5 pt-5 text-center">Bem vindo ao</h5>
                    <h1 class="text-white mt-3 text-center">Eventify</h1>
                    <h5 class="text-white mt-3 text-center">Seu site de evento</h5>
                </div>
                <div class="col-12 col-lg-6">
                    <h1 class="text-center mt-5 pt-5">Login</h1>

                    <div class="row">
                        <div class="col-9 mb-3 mx-auto mt-4">
                            <InputText
                                :icon="icons.mdiAccount"
                                placeholder="Usuário"
                                @updateValue="user = $event"
                            />
                        </div>
                        <div class="col-9 mb-3 mx-auto mt-1">
                            <InputPassword 
                                :icon="icons.mdiLock"
                                placeholder="Senha"
                                @updateValue="password = $event"    
                            />
                        </div>
                        <div class="col-9 d-flex mx-auto justify-content-between">
                            <ButtonDark
                                text="ENTRAR"
                                height="50px"
                            />
                            <ButtonLight 
                                text="CADASTRAR" 
                                height="50px"
                            />
                        </div>
                        <div class="col-9 mx-auto mt-4 pb-3">
                            <p class="text-center forgot">Esqueceu a senha ?</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonLight from '../components/ButtonLight'
import ButtonDark from '../components/ButtonDark'
import InputText from '../components/InputText'
import InputPassword from '../components/InputPassword'
import { mdiAccount, mdiLock  } from '@mdi/js';

export default {
    data() {
        return {
            user: '',
            password: '',

            icons: {
                mdiAccount : mdiAccount,
                mdiLock: mdiLock
            }
        }
    },

    components: {
        ButtonLight,
        ButtonDark,
        InputText,
        InputPassword
    },

    methods: {
        login() {
            
        }
    }
}
</script>

<style>
#box {
    border: 2px solid #01A5B1;
    border-radius: 5px;
}

#left{
    background-image: linear-gradient(#131E2F, #01A5B1);
}

.forgot {
    color: #14569E;
}

.forgot:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>