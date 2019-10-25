<template>
    <div class="top">
        <input type="text" v-model="content">
        <button @click="submit">添加</button>
    </div>
</template>

<script>
    export default {
        name: "mynav",
        data(){
            return {
                content:''
            }
        },
        methods:{
            submit(){
                this.$emit('insert',this.content)
            }
        }
    }
</script>

<style scoped>

</style>