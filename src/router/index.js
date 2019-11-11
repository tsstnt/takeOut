import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 声明使用插件库
Vue.use(VueRouter)

// 生成路由器,管理路由
const router = new VueRouter({
  mode:'history',//默认hash
  routes
}
)

export default router