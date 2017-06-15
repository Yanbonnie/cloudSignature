import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  curClassState:null,
  menuLeftState:false,
  title:""
}

const Actions = {
    changeState({commit},num){
      commit('changeState',num)
    },
	changeMenu({commit},status){
		commit('changeMenu',status)
	},
	changeTitle({commit},title){
		commit('changeTitle',title)
	}
}
const Mutations = {
	changeState(state,num) {
		state.curClassState = num;
    },
	changeMenu(state,status){	  
		state.menuLeftState = status;
	},
	changeTitle(state,title){
		state.title = title;
	}
}

const Getters = {
	curClassState(state) {    
		return state.curClassState;
	},
	menuLeftState(state) {    
	    return state.menuLeftState;
	},
	title(state){
		return state.title;
	}
}

export default new Vuex.Store({
  state:state,
  actions:Actions,
  mutations:Mutations,
  getters:Getters
})
