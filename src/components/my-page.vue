<template>
    <div class="page">
        <ul>
            <li :class="{active:current==i}" v-for="i in pageNumber" :key="i" @click="pagechange(i)">
                {{i}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "my-page",

        props: {
            total: {
                required: true,
                type: Number,
            },
            pageSize: {
                type: Number,
                default: 3
            }
        },
        computed: {
            pageNumber() {
                return Math.ceil(this.total / this.pageSize);
            }
        },
        data() {
            return {
                current: 1
            }
        },
        methods: {
            pagechange(i) {
                // console.log(i, 2);
                if(this.current == i){
                    return
                }
                this.current = i;
                this.$emit('changepage',i)
            }
        }
    }
</script>

<style scoped>
    .page{
        margin-top: 10px;
    }
    .page>ul {
        list-style: none;
        display: inline-block;
        vertical-align: top;
        padding: 0;
        margin: 0;
    }

    .page > ul > li {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        min-width: 30px;
        border-radius: 2px;
        cursor: pointer;
        padding: 0 4px;
        display: inline-block;
        font-size: 13px;
        height: 28px;
        line-height: 28px;
        text-align: center;
    }
    .page > ul > li.active{
        background: #409eff;
        color: #ffffff;
    }
</style>