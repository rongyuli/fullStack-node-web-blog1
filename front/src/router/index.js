import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from '../views/home.vue';
import back from '../views/back.vue';
import edit from '../views/edit.vue';
import archive from '../views/archive.vue';

const routes = [
  { path: '/home', component: home },
  { path: '/back', component: back },
  { path: '/edit', component: edit },
  { path: '/archive/:id', component: archive },
  { path: '/archive', component: archive },
];

const router = new VueRouter({
  routes,
});

export default router;
