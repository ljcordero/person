import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/_store';
import '@/registerServiceWorker';

import Element from 'element-ui';
import lang from './utils/es';
import locale from 'element-ui/lib/locale';
import '@/_assets/element-variables.scss';

import '@/_components/_imports/font-awesome';

Vue.config.productionTip = false;
locale.use(lang)

Vue.use(Element, { size: 'medium' });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
