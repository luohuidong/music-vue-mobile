import Vue from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

import store from './store/';
import router from './router';
import '@assets/styles/index.scss';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  loading: require('@assets/image/default.png'),
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
