import { GetterTree } from 'vuex';
import State from '@/_store/state';

const getters: GetterTree<State, State> = {
  loading: (state: State): boolean => state.loading,
  persons: (state: State): any => state.persons,
  error: (state: State): string => state.error,
};

export default getters;