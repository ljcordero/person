import { ActionContext, ActionTree } from 'vuex';
import {
  LOADING,
  ERROR,
  FETCH_PERSONS,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON
} from '@/_store/mutation-types';

import State from '@/_store/state';
import HttpClient from '@/_core/api/http-client';
import Person from '@/_core/models/Person';

// ActionTree<[current state], [root state]>
const actions: ActionTree<State, State> = {
  setLoading({commit}: ActionContext<State, State>, loading: boolean): void {
    commit(LOADING, loading);
  },
  setError({commit}: ActionContext<State, State>, error: string): void {
    commit(ERROR, error);
  },
  async fetchPersons({commit}: ActionContext<State, State>, { length, searchInput }: any): Promise<void> {
    commit(LOADING, true);
    try {
      let persons = await HttpClient.get(`Person/?offset=${length}${searchInput ? `&search=${searchInput}` : ''}`)
      persons.results = persons.results.map(r => new Person(r));
      commit(FETCH_PERSONS, persons);
    } catch(err) {
      commit(ERROR, err);
    } finally {
      commit(LOADING, false);
    }
  },
  async addPerson({commit}: ActionContext<State, State>, person: Person): Promise<void> {
    commit(LOADING, true);
    try {
      let result = await HttpClient.post("Person/", person);
      commit(ADD_PERSON, result);
    } catch(err) {
      commit(ERROR, err);
    } finally {
      commit(LOADING, false);
    }
  },
  async updatePerson({commit}: ActionContext<State, State>, person: Person): Promise<void> {
    commit(LOADING, true);
    try {
      let result = await HttpClient.put(`Person/${person.id}/`, person);
      commit(UPDATE_PERSON, result);
    } catch(err) {
      commit(ERROR, err);
    } finally {
      commit(LOADING, false);
    }
  },
  async deletePerson({commit}: ActionContext<State, State>, id: number): Promise<void> {
    commit(LOADING, true);
    try {
      await HttpClient.delete(`Person/${id}/`);
      commit(DELETE_PERSON, id);
    } catch(err) {
      commit(ERROR, err);
    } finally {
      commit(LOADING, false);
    }
  },
};

export default actions;