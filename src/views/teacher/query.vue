<template>
    <div>
        <template>
            <el-table
                    :data="students"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                        <el-button
                                type="text"
                                size="mini"
                                @click="() => remove(node, data)">
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<script>
    import students from  '../../components/data/students';
    export default {
        name: "query",
        data(){
            return{
                students: []
            }
        },
        methods:{
                getStudent(){
                  let b=JSON.parse(localStorage.getItem('form'));
                    window.console.log(b)
                  students.push(b)
                    this.students=students;
                }
            },
        // remove(node, data) {
        //     const parent = node.parent;
        //     const children = parent.data.children || parent.data;
        //     const index = children.findIndex(d => d.id === data.id);
        //     children.splice(index, 1);
        // },
        //生命周期函数
        mounted() {
            this.getStudent();
        }
    }
</script>

<style scoped>

</style>