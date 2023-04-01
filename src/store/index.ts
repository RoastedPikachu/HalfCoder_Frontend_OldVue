import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export interface State {
  isSignIn: boolean,
  isDarkTheme: boolean,
  isCookieOpen: boolean,
  firstName: string,
  secondName: string,
  userImage: string,
  userName: string,
  dateOfBirth: string,
  phoneNumber: string,
  email: string,
  aboutUser: string,
  employment: string,
  posts: number,
  followers: number,
  views: number,
}

export default createStore<State>({
  state: {
    isSignIn: false,
    isDarkTheme: true,
    isCookieOpen: true,
    firstName: '',
    secondName: '',
    userImage: '',
    userName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    aboutUser: '',
    employment: 'Кормит IT уточек', 
    posts: 0,
    followers: 0,
    views: 0
  },
  mutations: {
    CHANGE_SIGN_IN_STATUS(state) {
      state.isSignIn = !state.isSignIn;
    },
    CHANGE_THEME_COLOR_STATUS(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
    SET_USER_EMPLOYMENT(state, employment:string) {
      state.employment = employment;
    },
    SET_FIRST_USER_DATA(state, payload) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.userImage = payload.userImage;
      state.userName = payload.userName;
      state.email = payload.email;
      state.posts = payload.posts;
      state.followers = payload.followers;
      state.views = payload.views;
      state.isCookieOpen = true;
    },
    SET_FULL_USER_DATA(state, payload) {
      state.firstName = payload.firstName;
      state.secondName = payload.secondName;
      state.userName = payload.userName;
      state.dateOfBirth = payload.dateOfBirth;
      state.phoneNumber = payload.phoneNumber;
      state.email = payload.email;
      state.aboutUser = payload.aboutUser;
    },
    CLEAR_USER_DATA(state) {
      state.firstName = '';
      state.secondName = '';
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