import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isOpenCurtain: false,
    isCloseCurtain: false,
    duringTime: 600
  },
  getters: {},
  mutations: {},
  actions: {
    openCurtain ({state}) {
      state.isOpenCurtain = true;
      setTimeout(() => {
        state.isOpenCurtain = false;
      }, state.duringTime)
    },
    closeCurtain ({state}) {
      state.isCloseCurtain = true;
      setTimeout(() => {
        state.isCloseCurtain = false;
      }, state.duringTime)
    }
  }
})

export default store