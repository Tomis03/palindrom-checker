import Vue from 'vue'
import Vuex from 'vuex'
import palindromes from '../palindromes.json';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    palindromes: []
  },
  mutations: {
    palindromes: (state, data) => state.palindromes.push(data)
  },
  getters: {
    palindromes: (state) => state.palindromes
  },
  actions: {},
  modules: {}
});

palindromes.forEach(palindrome => store.commit('palindromes', palindrome));

export default store;