import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/_store';
import '@/registerServiceWorker';
import { VueMaskDirective } from 'v-mask';
import Element from 'element-ui';
import '@/_assets/element-variables.scss';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.config.productionTip = false;

locale.use(lang)
Vue.use(Element, { size: 'medium' });

Vue.directive('mask', VueMaskDirective);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
