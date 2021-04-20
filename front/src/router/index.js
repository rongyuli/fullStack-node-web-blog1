import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '../views/home.vue';
import back from '../views/back.vue';
import edit from '../views/edit.vue';

const routes = [
  { path: '/', component: home },
  { path: '/back', component: back },
  { path: '/edit', component: edit },
];

const router = new VueRouter({
  routes,
});

export default router;
