<template>
    <div id="cont">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username"  prefix-icon="el-icon-user-solid">
            <el-input v-model="ruleForm.username" clearable>
                <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" clearable  show-password>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
            </el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roles">
            <el-radio-group     v-model="ruleForm.role">
                <!--<el-radio v-for="item in  ruleForm.roles" :key="item.id" >{{item}}</el-radio>-->
                <el-radio :label="item" v-for="(item,index) in roles" :key="index" ></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>

<script>
    import admin from '../components/data/admin';
    import teacher from '../components/data/teacher';
    import student from '../components/data/students';
    export default {
        name: "login",
        data: function () {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    role:'',
                },
                roles:['student','teacher', 'admin'],
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 2, max: 10, message: '长度在 2 到 5 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'number'},
                        {min: 2, max: 15, message: '长度在 2 到 10 个数字', trigger: 'number'}
                    ],
                    role: [
                        {required: true, message: '请选择登录身份', trigger: 'change'}
                    ],
                }

            }
        },

        methods: {
            submitForm(formName) {
                // 1.箭头函数
                // 2.this存给零时变量  3.函数定义的时候通过bind绑定this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let role=this.ruleForm.role;
                        let model=null;
                        if (role=="admin") {
                            model=admin
                        }
                        else if(role=="student"){
                            model=student
                        }
                        else{
                           model= teacher
                        }
                        let flag=model.filter(ele=>ele.username==this.ruleForm.username&&ele.password==this.ruleForm.password)
                        if (flag){
                            localStorage.user=JSON.stringify(flag[0]);
                            // localStorage.user=this.ruleForm;
                            if (role=="student") {
                                this.$router.push({name:"student"});
                            }else {
                                this.$router.push("index");
                            }
                        }
                    }
                    else {
                        this.$message.warning('用户名和密码不匹配');
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style>
    #cont{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-image: url("../assets/1022.jpg");
        background-size: cover;
    }
</style>
<style scoped>
    .demo-ruleForm {
        width: 350px;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: white;
        padding: 10px 20px;
        border-radius: 5%;
    }

</style>
