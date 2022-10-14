<template>
    <div>
        <button type="button" id="btnDark" class="btn" :style="'height: ' + height">{{ text }}</button>
    </div>
</template>

<script>
export default {
    props: ['text', 'height']
}
</script>

<style>
#btnDark{
    color: white;
    font-weight: bold;

    background: #131E2F;
}

#btnDark:hover{
    cursor: pointer;
    background: #0d1521;
}
</style>