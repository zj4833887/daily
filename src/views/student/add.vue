<template>
    <div>
        <el-divider></el-divider>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px">
            <el-form-item label="姓名" prop="username" >
                <el-input prefix-icon="" v-model="form.username" placeholder="Username" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex" >
                <!--<el-radio v-for="item in  ruleForm.roles" :key="item.id" >{{item}}</el-radio>-->
                <el-radio label="男" v-model="form.sex">男</el-radio>
                <el-radio label="女" v-model="form.sex">女</el-radio>
            </el-form-item>
            <el-form-item label="班级"  prop="classes" >
                <el-select  v-model="form.classes" property="请选择" >
                    <el-option  :value="item.cname" v-for="item in classes" :key="item.cid" :label="item.cname"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年龄" prop="age" >
                <el-input prefix-icon="" v-model="form.age" placeholder="Age" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="学号" prop="num" >
                <el-input prefix-icon="" v-model="form.num" placeholder="Num" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="电话" prop="tell" >
                <el-input prefix-icon="" v-model="form.tell" placeholder="Username" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-input prefix-icon="" v-model="form.password" placeholder="Password" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">提交</el-button>
                <el-button >取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "add",
        data: function () {
            return {
                form: {
                    id: '',
                    username: '',
                    sex: '',
                    age: '',
                    classes: '',
                    num: '',
                    tell: '',
                    password: '',
                },
                classes: [{
                    cid: 1, cname: 'wuif1907-2',
                }, {
                    cid: 2, cname: 'wuif1907-1',
                }, {
                    cid: 3, cname: 'wuif1910',
                }],

                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 2, max: 10, message: '长度在 2 到 5 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'number'},
                        {min: 2, max: 10, message: '长度在 2 到 10 个数字', trigger: 'number'}
                    ],
                    num: [
                        {required: true, message: '请输入学号', trigger: 'number'},
                        {min: 2, max: 10, message: '长度在 2 到 10 个数字', trigger: 'number'}
                    ],
                    age: [
                        {required: true,  message: '年龄不能为空'},

                    ],
                    tell: [
                        {required: true, message: '请输入电话'},
                        {min: 10, max: 11, message: '长度在 10-11个数字'}
                    ],
                    classes: [
                        {required: true, message: '请输入密码', trigger: 'number'},
                        {min: 2, max: 10, message: '长度在 2 到 5 个数字', trigger: 'number'}
                    ],
                },
            }

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.form.id=Date.now()
                        alert('submit!');
                        localStorage .form=JSON .stringify(this.form)
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>

<style scoped>
    .form {
        width: 500px;
    }

</style>