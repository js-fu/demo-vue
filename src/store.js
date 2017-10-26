import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrease (state) {
    state.count--
  },
  setCount (state, number) {
    state.count = number
  }
}

export default new Vuex.Store({ state, mutations })
