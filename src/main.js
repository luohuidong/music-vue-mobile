import Vue from 'vue';
import App from './App.vue';

import store from './store/';
import router from './router';

Vue.config.productionTip = false;

import '@assets/stylus/index.styl';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
