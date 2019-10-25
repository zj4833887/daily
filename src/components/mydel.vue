<template>
    <div class="panel" :class="'panel-'+scene">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in lists=" :key="item.id">
                <input type="checkbox" v-model="item.status">
                {{item.content}}
                <div class="right" @click = "deleteList(item.id)">X</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mydel",
        props:{
            lists:{
                require:true,
                type:Array,
                default:function () {
                    return [ ];
                }
            }
        },
        methods:{
            del(){
                this.$emit('del',this.content)
            }
        },


    }
</script>

<style scoped>

</style>