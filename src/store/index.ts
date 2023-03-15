import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export interface State {
  isSignIn: boolean,
}

export default createStore<State>({
  state: {
    isSignIn: false,
  },
  mutations: {
    CHANGE_SIGN_IN_STATUS(state) {
      state.isSignIn = !state.isSignIn;
    },
  },
  plugins: [createPersistedState()]
})