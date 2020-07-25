import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state = {
  userInfo: {},
  isLogin: false
};

const mutations = {
  setUserInfo(state, val) {
    state.isLogin = true;
    state.userInfo = val;
  },
  setLogState(state, value) {
    state.isLogin = value;
  }
};

const actions = {
  setPosition ({ commit }, val) {
    // 异步请求后端获取当前位置数据
    commit('setPosition', val)
  },
  setUser ({ commit }, val) {
    commit('setUser', val)
  },
};
const getters = {
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
