import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'
export default new Vuex.Store({
  state: {
    // 用户的登录状态信息
    user: getItem(TOKEN_KEY)
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      setItem(TOKEN_KEY, user)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(user))
    }
  },
  getters: {},
  actions: {},
  modules: {},
})
