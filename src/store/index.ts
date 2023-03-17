import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

export interface State {
  isSignIn: boolean,
  userName: string,
  employment: string,
}

export default createStore<State>({
  state: {
    isSignIn: false,
    userName: '',
    employment: 'Занят IT уточками', 
  },
  mutations: {
    CHANGE_SIGN_IN_STATUS(state) {
      state.isSignIn = !state.isSignIn;
    },
    SET_USER_NAME(state, name:string) {
      state.userName = name;
    },
    SET_USER_EMPLOYMENT(state, employment:string) {
      state.employment = employment;
    },
    async GET_INFO_ABOUT_USER(state, token) {
      const url = new URL('http://62.109.10.224:500/api/v1/account/data/');
      let error = '';

      const result = await axios.get(url.toString(), token);

      switch(result.data.status) {
        case 111: error= 'Ошибка входа';
          break;
        case 112: error = 'Некорректные данные';
          break;
        case 113: error = 'Пользователь не найден';
          break;
        case 114: error = 'Неверный пароль';
          break;
      } 
    }
  },
  plugins: [createPersistedState()]
})