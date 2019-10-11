import Vue from 'vue';
import Vuex from 'vuex';

import State from './state';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const debug: boolean = process.env.NODE_ENV !== 'production';

export default <any> new Vuex.Store({
  modules: {
    app: {
      state: new State(),
      getters,
      mutations,
      actions,
    },
  },
  strict: debug,
});
