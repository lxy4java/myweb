<template>
    <div class="xyHeader">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'xyHeader',
        data() {
            return {
                msg: 'Welcome to my header App'
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        text-align: center;
        margin: auto;
        font-weight: normal;
    }
    
    .xyHeader {
        left: 0px;
        margin: auto;
        position: fixed;
        top: 0;
        width: 100%;
        height: 47px;
        background: gold;
        z-index: 999;
    }
</style>