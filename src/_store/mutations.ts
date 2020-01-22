import { MutationTree } from 'vuex';

import {
  ERROR,
  LOADING,
  FETCH_PERSONS,
  FETCH_PERSON_BY_ID,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON
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
  [FETCH_PERSONS](state: State, persons: any[]): void {
    state.persons = persons;
  },
  [FETCH_PERSON_BY_ID](state: State, person: any): void {
    if(!state.persons.results) state.persons.results = [];
    state.persons.results.push(person);
  },
  [ADD_PERSON](state: State, person: any): void {
    state.persons.results.push(person);
  },
  [UPDATE_PERSON](state: State, person: any): void {
    state.persons.results[state.persons.results.findIndex(p => p.id == person.id)] = person;
  },
  [DELETE_PERSON](state: State, id: number): void {
    state.persons.results.splice(state.persons.results.findIndex(p => p.id == id), 1);
  },
};

export default mutations;