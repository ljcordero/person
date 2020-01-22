import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const app = [
  {
    name: 'home',
    path: '/',
    component: () => import('./_views/home/home'),
    meta: {
      title: "Person"
    }
  },
  {
    name: 'details',
    path: '/details/:id',
    component: () => import('./_views/details/details'),
    meta: {
      title: "Person Details"
    }
  },
  {
    path: '*',
    component: () => import('./_views/Error404.vue'),
  },
];

const routes = [
  ...app,
];

export default (()=>{ 
  const router = new Router({
    mode: 'history',
    routes,
  });
  return router;
})()