import 'bulma';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Prism from 'prismjs';

Vue.config.productionTip = false;
Prism.highlightAll();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
