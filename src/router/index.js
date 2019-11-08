import vue from 'vue'
import VueRoter from 'vue-router'
import routes from './routes'
// 声明使用插件库
Vue.use(VueRoter)

// 生成路由器,管理路由
const router = new router(){
  mode:'history',
  routes
}

export default router