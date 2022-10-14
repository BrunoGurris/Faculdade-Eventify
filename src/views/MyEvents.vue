<template>
    <div>
        <h2>Meus Eventos</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <CardEvent v-for="(event, n) in events" :key="n" :event="event" />
        </div>
    </div>
</template>

<script>
import CardEvent from '../components/CardEvent'
import TempMyEvents from '../services/tempMyEvents'

export default {
    name: 'Home',

    data() {
        return {
            events: TempMyEvents
        }
    },

    components: {
        CardEvent
    }
}
</script>
