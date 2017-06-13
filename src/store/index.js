import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  curClassState:null,
}

const Actions = {
    changeState({commit},num){
      commit('changeState',num)
    }
  }
const Mutations = {
  changeState(state,num) {
      state.curClassState = num;
  }
}

const Getters = {
  curClassState(state) {    
      return state.curClassState;
  }
}

export default new Vuex.Store({
  state:state,
  actions:Actions,
  mutations:Mutations,
  getters:Getters
})
