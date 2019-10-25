import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import login from "./views/login"
import index from "./views/index"
import vcharts from  './views/vcharts'
import student from './views/studen'
import studentAdd from "./views/student/add"
import studentQuery from "./views/student/query"
import studentedit from "./views/student/edit"
import  write from  './views/daily/write'
import  query from  './views/daily/query'
import Router from 'vue-router'
import VCharts from 'v-charts'



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VCharts)

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}

let router = new VueRouter({
    routes: [
        {
            path: '/index', component: index,
            children:
                [
                    {path: 'studentadd', component: studentAdd,meta:{title:'学生添加'}},
                    {path: 'studentquery', component: studentQuery,meta:{title:'学生查看'}},
                    {path: 'studentedit/:id', component: studentedit,name:'studentedit',meta:{title:'学生修改'}},
                    {path: '/vcharts', component: vcharts,meta:{title:'日报可视化'},name:'vcharts',},
                ]
        },
        {path: '/login', component: login},
        {path: '/', component: index,meta:{title:'学生日报系统'}},
        {path: '/student', component: student,meta:{title:'学生主界面'},name:'student',
        children: [
            {path: 'write', component: write,meta:{title:'学生填写日报'},name:'studentwrite'},
            {path: 'query', component: query,meta:{title:'学生查看日报'},name:'studentquery'},
        ]
        },
    ],


});
//导航守卫--组件切换--设置文档标题
//1.监听组件切换
// 2.当前组件对应的标题
//3.设置文档的标题
router.beforeEach((to, from, next) => {
    let title=to.meta.title||'学生日报系统';
    document.title=title;
        next();
})
new Vue({
    render: h => h(App),
    router
}).$mount('#app');
