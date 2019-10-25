<template>

    <ul class="list-group" :class="'panel-'+scene">
        <my-li v-for="item in lists" :key="item.id" :content="item.content"
        :status="item.status" :id="item.id" @listdelete="listdelete"
        >
            <slot msg="hello"></slot>
            <input type="checkbox" v-model="item.status">
            {{item.content}}

        </my-li>
    </ul>
</template>

<script>
    import MyLi from '../components/myli';

    export default {
        name: "mylist",
        props: {
            lists: {
                type: Array,
                require: true,
            },
            scene: {
                type: String,
                default: 'info'
            }
        },
        data() {
            return {}
        },
        methods: {
            listdelete(id) {
                this.$emit('deleteList', id)
            }
        },
        components: {
            MyLi
        },


    }
</script>

<style scoped>
    @import url("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css");
</style>
