import { MutationTree } from 'vuex';

import {
  ERROR,
  LOADING,
} from '@/_store/mutation-types';

import State from '@/_store/state';

const mutations: MutationTree<State> = {
  /* APP */
  [ERROR](state: State, error: string): void {
    state.error = error;
    state.loading = false;
  },
  [LOADING](state: State, loading: boolean): void {
    state.loading = loading;
  },
};

export default mutations;