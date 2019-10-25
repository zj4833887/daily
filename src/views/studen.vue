<template>
    <div>
        <el-container style="min-height:500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']" :router="true">
                    <el-submenu index="/index">
                        <template slot="title"><i class="el-icon-setting"></i>日报管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="/student/write">填写日报</el-menu-item>
                            <el-menu-item index="/student/query">查看日报</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>

                <el-header style="text-align: right; font-size: 12px">
                    <el-menu  class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    </el-menu>
                    <div style="position: absolute;right: 30px;top: 8px">{{user.username}}</div>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    a {
        color: #303133;
    }

    .rouer-link-exact-active {
        color: #4094fe;
    }
</style>
<script>
    export default {
        name: "studen",
        data() {
            return {
                user : null
            }
        },
        methods: {
            getUser(){
                this.user=JSON.parse(localStorage.getItem('user'))
            },
        },

        beforeMount() {
            this.getUser();
        }
    }
</script>

<style scoped>

</style>