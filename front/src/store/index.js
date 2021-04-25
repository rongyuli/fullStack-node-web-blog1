import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editMode: false,
  },
  mutations: {
    toggleEditMode(state, bool) {
      state.editMode = bool;
    },
  },
  actions: {},
  modules: {},
});
