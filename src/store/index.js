import { createStore } from "vuex";

export default createStore({
  state: {
    personList: [{
      name: 'jim',
      age: 18,
    }],
  },
  mutations: {
    ADD_PERSON(state, person) {
      state.personList.push(person);
    },
  },
  actions: {
    addPerson({ commit }, data) {
      commit("ADD_PERSON", data);
    },
  },
});