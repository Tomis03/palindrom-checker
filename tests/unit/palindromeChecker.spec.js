import { shallowMount, createLocalVue } from '@vue/test-utils'
import PalindromeChecker from '@/views/PalindromeChecker.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    }
  ]
});

const store = new Vuex.Store({
  state: {
    palindromes: [],
    loggedIn: true
  },
  getters: {
    palindromes: (state) => state.palindromes,
    loggedIn: (state) => state.loggedIn
  }
});

describe('Testing isPalindrome function of PalindromeChecker component', () => {
  it('return true if passed data is palindrome', () => {
    const wrapper = shallowMount(PalindromeChecker, { store, router, localVue });
    expect(wrapper.vm.isPalindrome('Madam, in Eden, I’m Adam.')).toBe(true);
  })
})
