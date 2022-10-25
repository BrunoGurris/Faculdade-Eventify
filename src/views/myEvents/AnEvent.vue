<template>
    <div>

        <div class="col">
        <div class="card h-100">
             <img src="https://classic.exame.com/wp-content/uploads/2022/07/formula-1-gp-hungria-e1661442699580.jpg?quality=70&strip=info&w=1024" class="card-img-top" height="450">
            <div class="card-body">
                <h5 class="card-title">Formula 1</h5>
                <p class="card-text mt-3">Interlagos</p>
                <p class="card-text mt-3"><i>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.</i></p>
                <p class="card-text mt-3"><i>Av. Interlagos, 50, Bairro - São Paulo/SP</i></p>
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
    name: 'SingleEvent',

    
    data() {
        return {
            
        }
    },
    components:{
        CardComment
    }

    

    
}
</script>
