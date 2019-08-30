import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    getuser () {
      return state.user
    },
    setuser (state,index) {
      state.user = index
    }
  },
  actions: {
    getuser: ({ commit }) => {
      commit('getindex')
    },
    setuser: ({ commit },index) => {
      commit('setindex',index)
    }
  }
})
