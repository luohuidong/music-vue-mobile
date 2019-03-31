import Vue from 'vue';
import VueRouter from 'vue-router';

import Recommend from '@pages/recommend/';
import singerRouter from './singer';
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
  ...singerRouter,
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
  mode: 'history',
  routes
});
