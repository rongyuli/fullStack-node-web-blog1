import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    edit: false,
    nav: 1,
    blogId: '',
  },
  mutations: {
    route(state, nav) {
      state.nav = nav;
    },
    getBlogId(state, id) {
      state.blogId = id;
      state.nav = 2;
      state.edit = true;
    },
    toggleEdit(state, bool) {
      state.edit = bool;
    },
  },
  actions: {},
  modules: {},
});
