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
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="age"
                        label="年龄"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="num"
                        label="学号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="tell"
                        label="电话"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="password"
                        label="密码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="classes"
                        label="班级"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                      <router-link :to="{name:'studentedit',params:{id:scope.row.id}}" tag="el-button">编辑</router-link>
                        <el-button
                                @click="del(scope.row.id)">
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
                },
                del(id){
                    this.students=this.students.filter(ele=>ele.id!=id)
                    window.console.log(id);
                }
            },
        //生命周期函数
        mounted() {
            this.getStudent();
        }
    }
</script>

<style scoped>

</style>