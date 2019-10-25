<template>

    <button :class="['btn',' btn-'+type]" @click="countclick">{{title}}{{type}}{{uppermsg}}{{count}}</button>

</template>

<script>
    export default {
        name: "my-btn",
        data:function () {
            return{
                count:this.num,
                msg:'my-btn'
            }
        },
        props:{
            type:{
                default:'primary'
            },
            title:{
                default:'primary'
            },methods:{
              updatenumber(){
                  this.$emit('zs')
    }
            },
            num:{

                require:true,
                // type:Number; 验证数字
            }
        },
        // props:['type','title'],
        methods:{
            countclick(){
                this.count++;
            }
        },
        computed:{
            uppermsg(){
              return this.msg.charAt(0).toUpperCase().substring(1)
            }
        }
    }
</script>

<style scoped>
    @import url( "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous")
</style>
<!--+this.msg()-->