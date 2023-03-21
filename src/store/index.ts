import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export interface State {
  isSignIn: boolean,
  isCookieOpen: boolean,
  firstName: string,
  secondName: string,
  additionalName: string,
  userName: string,
  dateOfBirth: string,
  phoneNumber: string,
  email: string,
  aboutUser: string,
  employment: string,
}

export default createStore<State>({
  state: {
    isSignIn: false,
    isCookieOpen: true,
    firstName: '',
    secondName: '',
    additionalName: '',
    userName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    aboutUser: '',
    employment: 'Занят IT уточками', 
  },
  mutations: {
    CHANGE_SIGN_IN_STATUS(state) {
      state.isSignIn = !state.isSignIn;
    },
    SET_USER_EMPLOYMENT(state, employment:string) {
      state.employment = employment;
    },
    SET_FIRST_USER_DATA(state, payload) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.userName = payload.userName;
      state.email = payload.email;
      state.isCookieOpen = true;
    },
    SET_FULL_USER_DATA(state, payload) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.additionalName = payload.additionalName;
      state.userName = payload.userName;
      state.dateOfBirth = payload.dateOfBirth;
      state.phoneNumber = payload.phoneNumber;
      state.email = payload.email;
      state.aboutUser = payload.aboutUser;
    },
    CLEAR_USER_DATA(state) {
      state.firstName = '';
      state.secondName = '';
      state.additionalName = '';
      state.userName = '';
      state.dateOfBirth = '';
      state.phoneNumber = '';
      state.email = '';
      state.aboutUser = '';
    },
    CLOSE_COOKIE(state) {
      state.isCookieOpen = false;
    }
  },
  plugins: [createPersistedState()]
})