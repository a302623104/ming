import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    getindex () {
      return state.count
    },
    setindex (state,index) {
      state.count = index
    }
  },
  actions: {
    getindex: ({ commit }) => {
      commit('getindex')
    },
    setindex: ({ commit },index) => {
      commit('setindex',index)
    }
  }
})
