import Vue from 'vue'
import Vuex from 'vuex'
import palindromes from '../palindromes.json';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    palindromes: [],
    loggedIn: false,
    username: 'admin',
    password: 'Admin12345'
  },
  mutations: {
    palindromes: (state, data) => state.palindromes.push(data),
    loggedIn: (state, data) => state.loggedIn = data
  },
  getters: {
    palindromes: (state) => state.palindromes,
    loggedIn: (state) => state.loggedIn,
    username: (state) => state.username,
    password: (state) => state.password
  }
});

palindromes.forEach(palindrome => store.commit('palindromes', palindrome));

export default store;