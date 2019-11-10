import {
  getAddress,
  getCategorys,
  // getShops
} from '../api'
import {
  SAVE_ADDRESS,
  SAVE_CATEGORYS,
  // SAVE_SHOPS
} from "./mutations-type";

export default {
  async getAddressAction({commit}){
    let result = await getAddress(40.10038,116.36867)
    if (result.code === 0) {
      commit(SAVE_ADDRESS,{address:result.data})
    }
  },
  async getCategorysAction({commit},fn){
    let result = await getCategorys()
    if (result.code === 0) {
      commit(SAVE_CATEGORYS,{category:result.data})
      typeof fn === 'function' && fn()
    }
  },

}