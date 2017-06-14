import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  curClassState:null,
  menuLeftState:false
}

const Actions = {
    changeState({commit},num){
      commit('changeState',num)
    },
	changeMenu({commit},status){
		commit('changeMenu',status)
	}
}
const Mutations = {
	changeState(state,num) {
      state.curClassState = num;
    },
	changeMenu(state,status){	  
	  state.menuLeftState = status;
   }
}

const Getters = {
  curClassState(state) {    
      return state.curClassState;
  },
  menuLeftState(state) {    
      return state.menuLeftState;
  }
}

export default new Vuex.Store({
  state:state,
  actions:Actions,
  mutations:Mutations,
  getters:Getters
})
