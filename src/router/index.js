import Vue from 'vue';
import VueRouter from 'vue-router';

import Recommend from '@pages/recommend/';
import Singer from '@pages/singer/';
import Rank from '@pages/rank';
import Search from '@pages/search/';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
];

export default new VueRouter({
  routes
});
