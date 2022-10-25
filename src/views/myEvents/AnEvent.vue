<template>
    <div>

        <div class="col">
        <div class="card h-100">
             <img src="https://hotsite-cdn.s3.amazonaws.com/wp-content/uploads/2016/04/15074619/Shopping-Centers-ou-Lojas-de-bairro.jpg" class="card-img-top" height="450">
            <div class="card-body">
                <h5 class="card-title">Discussão sobre filmes</h5>
                <p class="card-text mt-3">Shopping Cidade</p>
                <p class="card-text mt-3"><i>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.</i></p>
                <p class="card-text mt-3"><i>Av. Itavuvu, 50, São Guilherme - Sorocaba/SP</i></p>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end  mt-4">
        <CardComment/>
        <CardComment/>
        <CardComment/>
    </div>



    
    </div>
</template>

<script>
import CardComment from '../../components/CardComment'
export default {
    name: 'Home',

    data() {
        return {
            
        }
    },
    components:{
        CardComment
    }

    

    
}
</script>
