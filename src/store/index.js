import Vue from 'vue'
import Vuex from 'vuex'
//vuex是管理组件之间通信的插件
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //存放组件之间共享的数据
    all_data:{
      add_daily:{},
      othertotal:{}
      //list:{}
    }
  },
  mutations: {
    //显式的更改state里的数据
    getAllData(state,options){
      state.all_data = options;
    }
  },
  actions: {
    //actions会通过mutations,让mutations帮他提交数据的变更
    getAllData({commit},options){
      commit('getAllData',options)
    }
  },
  modules: {
  }
})
