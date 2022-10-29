<template>
    <div>

        <div class="row row-cols-1">
            <CardSingleEvent v-for="(event, n) in events" :key="n" :event="event"/>
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
import CardSingleEvent from '../..//components/CardSingleEvent'
import TempMyEvents from '../../services/tempMyEvents'
export default {
    name: 'SingleEvent',

    
    data() {
        return {
            events: TempMyEvents,
        }
    },
    components:{
        CardComment,
        CardSingleEvent
    }

    

    
}
</script>
