<template>

    <div v-if="dailyArr.length">
        <el-form :model="form"   class="demo-form-inline">
            <el-form-item label="搜索内容">
                <el-input v-model="form.content" placeholder="搜索内容"></el-input>
            </el-form-item>
            <el-form-item label="提交时间">
                        <el-date-picker
                                v-model="form.ctime"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd">
                        >
                        </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getdaily(1)">查询</el-button>
            </el-form-item>
        </el-form>
        <template>
            <el-table
                    :data="dailyArr"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="ID"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="names"
                        label="姓名"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="classes"
                        label="班级"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="felling"
                        label="心得"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="finish"
                        label="完成情况"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="motto"
                        label="座右铭"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="other"
                        label="其他"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="problem"
                        label="问题"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="suggest"
                        label="建议"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="ctime"
                        label="时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <router-link :to="{name:'studentedit',params:{id:scope.row.id}}" tag="el-button">编辑
                        </router-link>
                        <el-button
                                @click="del(scope.row.id)">
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <my-page

                    @changepage="getdaily"
                    :page-size="limit"

                    :total="total">
            </my-page>
        </template>
    </div>
</template>

<script>
    import {HOSTNAME} from "../../confing/base";
    import MyPage from "../../components/my-page"

    export default {
        name: "query",
        components:{MyPage},
        data() {
            return {
                dailyArr: [],
                total: 0,
                limit:2,
                form:{
                    content:'',
                    ctime:'',
                }
            }
        },
        computed:{
          objTransformQS(){
              let str='';
              for (let i in this.form){
                  let val =this.form[i];
                  if (val != ''){
                  str+= '&'+i + '='+val
                  }
              }
              return str

          }
        },
        methods: {
            getdaily(i=1) {
                let user = this.user.username;
                let qs=user+'&page='+i+'&limit='+this.limit+this.objTransformQS;
                fetch(HOSTNAME + 'index/index/query?names='+qs )
                    .then(res => res.json())
                    .then(data => {
                        if (data.code == 200) {
                            this.dailyArr = data.data;
                            this.total = data.count;
                            this.$message.success(data.msg);
                        } else {
                            this.$message.error(data.msg)
                        }
                    })
            },
            getForm() {
                this.user = JSON.parse(localStorage.user)
            },

        },
        //生命周期函数
        beforeMount() {
            this.getForm();
            this.getdaily();
        }
    }
</script>

<style scoped>

</style>