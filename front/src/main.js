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
  const path = to.path.split('/')[1];
  switch (path) {
    case 'home':
    case 'back':
    case 'edit':
    case 'archive':
    case 'theArchive':
      break;
    default:
      location.hash = '#/home';
  }
});

Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
