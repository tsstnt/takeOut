import ajax from './ajax'


/* 根据经纬度获取位置详情 */
export const getAddress = (latitude,longitude) => ajax({
  url:`/position/${latitude},${longitude}`
})

/* 获取食品分类列表 */
export const getCategorys = () => ajax({
  url:'/index_category'
})

/* 根据经纬度获取商品列表 */
export const getShops = (latitude, longitude) => ajax({
  url: '/shops',
  //get params    post  data
  params: {
    latitude,
    longitude
  }
})
/* 用戶名密碼登録 */
export const loginWithPassword = (name, pwd,captcha) => ajax({
  url: '/login_pwd',
  method:'POST',
  data: {
    name,
    pwd,
    captcha
  }
})
/* 手機號碼驗證登陸 */
export const loginWithPhone = (phone, code) => ajax({
  url: '/login_sms',
  method:'POST',
  data: {
    phone,
    code
  }
})
/* 發送短信驗證碼 */
export const sendCode = phone => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})