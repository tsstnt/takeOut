import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'


import router from './router'
import GshopHeader from './components/GshopHeader/GshopHeader'
import store from './store/index.js'

//Vue全局注册组件的语法:Vue
Vue.component('GshopHeader',GshopHeader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
