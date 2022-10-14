<template>
    <div>
        <button type="button" id="btnLight" class="btn" :style="'height: ' + height">{{ text }}</button>
    </div>
</template>

<script>
export default {
    props: ['text', 'height']
}
</script>

<style>
#btnLight{
    height: 50px;

    color: white;
    font-weight: bold;

    background: #01A5B1;
}

#btnLight:hover{
    cursor: pointer;
    background: #00838d;
}
</style>