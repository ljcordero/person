import { ActionContext, ActionTree } from 'vuex';
import {
  LOADING,
  ERROR,
} from '@/_store/mutation-types';

import State from '@/_store/state';

// ActionTree<[current state], [root state]>
const actions: ActionTree<State, State> = {
  setLoading({commit}: ActionContext<State, State>, loading: boolean): void {
    commit(LOADING, loading);
  },
  setError({commit}: ActionContext<State, State>, error: string): void {
    commit(ERROR, error);
  },
};

export default actions;