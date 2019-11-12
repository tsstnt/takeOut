//二次封装axios
import qs from 'qs'
import axios from 'axios'
import router from '../router'
import {MessageBox} from 'mint-ui'


//生成一个axios的伪实例,具备axios实例对象的所有属相方法,但是不是真实的Axios实例
const instance = axios.create({
  baseURL:'/api'
})

//1添加请求拦截器
instance. interceptors.request.use(config => {
  //config: 当前请求的所有请求信息,url,method,data
  //目的:批量添加或者请求的参数
  //post 请求默认的参数格式的json对象形式  json对象形式--->urlencoding
  if (config.method.toUpperCase() === 'POST' && config.data instanceof Object) {
    config.data = qs.stringify(config.data)
  }
  //批量添加token
  let token = localStorage.getItem('token_key')
  //判断是否需要携带token
  if (config.headers.needToken) {
    if (token) {
      // 1. token携带的方式： 1) cookie 2) 请求参数 3) 放在请求头
      config.headers.authorization = token
    } else {
      throw new Error('没有token,请先登陆')
    }
  }
  return config
})

//添加响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    if(!error.response){
      //1.没有token
      MessageBox.alert(error.message)
      router.currentRoute.path !=='./login' && router.replace('./login')
    }else{
      // 2. 有token，token过期    
      if (error.response.status === 401) {
        alert('token已过期')
        router.currentRoute.path !== './login' && router.replace('./login')
      } else if(error.response.status === 404){
          // 3. 请求404
          MessageBox.alert('请求资源未找到')
      }else{
        MessageBox.alert('请求失败')
      }
    }
    MessageBox.alert('请求失败')
    return new Promise(() => {})//手动返回一个状态为pending的promise实例,保证不会进入下一个成功的回调
  }
)

export default instance