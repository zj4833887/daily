<template>
    <div>
        <el-form :model="form" ref="form" :rules="rules" label-width="80px">

            <el-form-item label="座右铭" prop="motto">
                <el-input prefix-icon="" v-model="form.motto" placeholder="Motto" clearable
                          minlength="20" maxlength="50" show-word-limit>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="完成情况" prop="Finish">
                <el-input prefix-icon="" v-model="form.finish" placeholder="Finish" clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content">
                <el-input type="textarea" minlength="50" prefix-icon="" v-model="form.content" placeholder="Motto"
                          clearable>
                </el-input>
            </el-form-item>

            <el-form-item label="心得体会" prop="felling">
                <el-input prefix-icon="" v-model="form.felling" placeholder="felling" clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="遇到问题" prop="problem">
                <el-input prefix-icon="" v-model="form.problem" placeholder="problem" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="建议" prop="suggest">
                <el-input prefix-icon="" v-model="form.suggest" placeholder="suggest" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="其他" prop="other">
                <el-input prefix-icon="" v-model="form.other" placeholder="other" clearable>
                    <i slot="prefix" class="el-input-icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "write",
        data: function () {
            return {
                form: {
                    names: '',
                    classes: 'wuif1907-2',
                    motto: '',
                    content: '',
                    finish: '',
                    problem: '',
                    felling: '',
                    suggest: '',
                    other: '',
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
                        {required: true, message: '年龄不能为空'},

                    ],
                    tell: [
                        {required: true, message: '请输入电话'},
                        {min: 10, max: 11, message: '长度在 10-11个数字'}
                    ],
                    classes: [
                        {required: true, message: '请输入密码', trigger: 'number'},
                        {min: 2, max: 10, message: '长度在 2 到 5 个数字', trigger: 'number'}
                    ],
                    Finish: [
                        {required: true, message: '请输入密码', trigger: 'number'},
                        {min: 2, max: 10, message: '长度在 2 到 5 个数字', trigger: 'number'}
                    ],
                },
            }

        },
        methods: {
            submit() {
                this.form.names = JSON.parse(localStorage.user).username;
                fetch('http://www.daily-end.com/index/index/index', {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    body: JSON.stringify(this.form),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.code == 200) {
                            this.$message.success(data.msg);
                            this.$refs.form.resetFields();
                        } else {
                            this.$message.error(data.msg)
                        }
                    })
            }
        }
    }

</script>

<style scoped>
    .el-textarea__inner {

    }

    .form {
        width: 500px;
    }

</style>