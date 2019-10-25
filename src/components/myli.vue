<template>
    <li class="list-group-item" :class="'list-group-item-'+classname" >
        {{content}}{{status}}
        <span @click="lidelete">X</span>
    </li>
</template>

<script>
    export default {
        name: "myli",
        props:{
            content:{
                type:String,
                require:true
            },
            status:{
                default:true,
                type: Boolean
            },
            id:{
                require: true,
                type:Number
            },
        },
        computed:{
            classname(){
                return this.status?'success':'info';
            }
        },
        methods:{
            lidelete(){
                this.$emit('listdelete',this.id);
            }
        }
    }
</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>