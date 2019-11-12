import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import './veevalidate'
import * as API from './api'
import {Button} from 'mint-ui'
// import 'mint-ui/lib/style.css'



import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'
import store from './store'
Vue.prototype.$API = API

//Vue全局注册组件的语法:Vue
Vue.component('GshopHeader',GshopHeader)
Vue.component(Button.name, Button)

Vue.config.productionTip = false
// 组件内部的实例对象的原型对象 === new Vue()

const vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
