import { Module } from 'vuex';

interface testState {
  testCount: string
}

let test: Module<testState, any> = {
  namespaced: true,
  state: () => ({
    testCount: "testCount"
  }),
  mutations: {
  },
  actions: {
  },
  modules: {
  }
};

export default test