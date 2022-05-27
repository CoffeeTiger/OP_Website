import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    loginStatus: false,
    user: '',
    userName: '',
    headerImg: '',
    walletAddress: ''
  },
  mutations: {
    setLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus
    },
    setUser(state, user) {
      state.user = user
    },
    setUserName(state, userName) {
      state.userName = userName
    },
    setHeaderImg(state, headerImg) {
      state.headerImg = headerImg
    },
    setWalletAddress(state, walletAddress) {
      state.walletAddress = walletAddress
    }
  },
  getters: {
    getLoginStatus: state => {
      return state.loginStatus
    },
    getUser: state => {
      return state.user
    },
    getHeaderImg: state => {
      return state.headerImg
    },
    getWalletAddress: state => {
      return state.walletAddress
    },
    getUserName: state => {
      return state.userName
    }
  },
  actions: {},
  modules: {}
});
export default store
