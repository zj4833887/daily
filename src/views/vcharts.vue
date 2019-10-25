<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>日报可视化</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="6">
                <ve-line :data="chartData" :settings="lineSettings"></ve-line>
            </el-col>
            <el-col :span="6">
                <ve-line :data="lineData1"></ve-line>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "vcharts",

        data() {
            this.lineSettings = {
                labelMap: {
                    'number': '每日提交量'
                }
            }
            return {
                chartData: {
                    columns: ['data', 'number'],
                    rows: [
                        {data: '10.21', number: 40},
                        {data: '10.22', number: 48},
                        {data: '10.23', number: 35},
                        {data: '10.24', number: 40},
                        {data: '10.25', number: 20},
                        {data: '10.26', number: 30},
                        {data: '10.27', number: 5},
                    ]
                },
                lineData1: {
                    columns: ['date', 'status', 'skill'],
                    rows: [
                        {date: '7.22', status: '100', skill: 0},
                        {date: '8.22', status: '80', skill: 20},
                        {date: '9.22', status: '50', skill: 50},
                        {date: '10.22', status: '80', skill: 70},
                        {date: '11.22', status: '90', skill: 90},
                        {date: '12.22', status: '60', skill: 80}
                    ]
                }
            }
        },

    }
</script>

<style scoped>

</style>