//二次封装axios
import qs from 'qs'
import axios from 'axios'

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
  return config
})

//添加响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    alert('请求失败')
    return new Promise(() => {})//手动返回一个状态为pending的promise实例,保证不会进入下一个成功的回调
  }
)

export default instance