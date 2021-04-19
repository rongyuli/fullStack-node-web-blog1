import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ViewUI from 'view-design';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://127.0.0.1:3000';

import 'view-design/dist/styles/iview.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

router.afterEach((to) => {
  switch (to.path) {
    case '/':
    case '/back':
      break;
    default:
      location.hash = '#/';
      console.log(11);
      store.commit('route', 1);
  }
});

Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
