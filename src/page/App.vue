<template>
    <div>第一行内容{{num1}}</div>
    <div>第二行内容{{num2}}</div>
</template>

<script>
export default {
    data(){
        return{
            num1:111,
            num2:222
        }
    }
}
</script>

<style scoped>
    div{
        color:red;
    }
</style>