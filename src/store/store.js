import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: '',
    userName: 'oph',
    phoneNumber:'',
    headerImg:'',
    walletAddress:''
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUserName(state, userName) {
      state.userName = userName
    },
    setPhoneNumber(state, phoneNumber){
      state.phoneNumber = phoneNumber
    },
    setHeaderImg(state, headerImg){
      state.headerImg = headerImg
    },
    setWalletAddress(state, walletAddress){
      state.walletAddress = walletAddress
    }
  },
  getters: {
    getUser: state => state.user,
    getUserName: state => { return 'NickName=' + state.userName}
  },
  actions: {},
  modules: {}
});
export default store
