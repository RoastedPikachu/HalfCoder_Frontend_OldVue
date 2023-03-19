import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export interface State {
  isSignIn: boolean,
  firstName: string,
  secondName: string,
  userName: string,
  email: string,
  employment: string,
}

export default createStore<State>({
  state: {
    isSignIn: false,
    firstName: '',
    secondName: '',
    userName: '',
    email: '',
    employment: 'Занят IT уточками', 
  },
  mutations: {
    CHANGE_SIGN_IN_STATUS(state) {
      state.isSignIn = !state.isSignIn;
    },
    SET_USER_EMPLOYMENT(state, employment:string) {
      state.employment = employment;
    },
    SET_USER_DATA(state, payload) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.userName = payload.userName;
      state.email = payload.email;
    },
    CLEAR_USER_DATA(state) {
      state.firstName = '';
      state.secondName = '';
      state.userName = '';
      state.email = '';
    },
  },
  plugins: [createPersistedState()]
})