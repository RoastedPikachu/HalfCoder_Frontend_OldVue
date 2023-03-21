<template>
  <section>
    <div id="SignIn">
      <h1> <p>&lt;</p> HalfCoder <p>/></p> </h1>
      <form>
        <ErrorComp :error="error" :errLength="error.length"/>
        <div class="signIn_inputs">
          <p>Имя пользователя/email</p>
          <input type="text" placeholder="Введите логин" v-model="login">
        </div>
        <div class="signIn_inputs">
          <p>Пароль</p>
          <input type="password" placeholder="Введите пароль" v-model="password">
        </div>
        <div id="signIn_ExternalButtons">
          <button></button>
          <button></button>
          <button></button>
        </div>
        <button id="signIn_FormButton" type="button" @click="setValuesLogin()">Войти</button>
      </form>
    </div>
  </section>
</template>

<script lang=ts>
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import store from '@/store/index';
  import ErrorComp from '@/widgets/shared/ErrorComp.vue';

  export default defineComponent({
    name: 'SignInPage',
    data() {
      return {
        login: '',
        password: '',
        error: '',
      }
    },
    methods: {
      async getInfoAboutUser(token:string) {
        const url = new URL('http://62.109.10.224:500/api/v1/account/data/');
        let payload = {
          firstName: '',
          secondName: '',
          userName: '',
          email: ''
        };
        let error = '';

        const result = await axios.post(url.toString(), {
          token: token
        }, {
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        });

        payload.firstName = result.data.user.first_name;
        payload.secondName = result.data.user.last_name;
        payload.userName = result.data.user.username;
        payload.email = result.data.user.email;

        store.commit('SET_FIRST_USER_DATA', payload);
      },
      async setValuesLogin() {
        const url = new URL('http://62.109.10.224:500/api/v1/auth/login/');

        const result = await axios.post(url.toString(), {
          username: this.login,
          password: this.password,
        }, {
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        });

        const token:string = result.data.token;
        const status:number = result.data.status;

        switch(status) {
          case 110: store.commit('CHANGE_SIGN_IN_STATUS');  
            this.getInfoAboutUser(token);
            document.cookie =`token=${token}; path=/; max-age=2592000; secure=true`;
            this.$router.push('/');
            break;
          case 111: this.error= 'Ошибка входа';
            break;
          case 112: this.error = 'Некорректные данные';
            break;
          case 113: this.error = 'Пользователь не найден';
            break;
          case 114: this.error = 'Неверный пароль';
        } 

        this.login = '';
        this.password = '';
      }
    },
    components: {
      ErrorComp,
    }
  })
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    #SignIn {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 15px 15px;
      width: 290px;
      height: 360px;
      background-color: #141414;
      border: 2px solid rgba(116, 116, 116, 0.5);
      border-radius: 5px;
      h1 {
        display: flex;
        color: #ffffff;
        font-size: 36px;
        font-family: 'Space Grotesk', sans-serif;
        p {
          color: #3d5aff;
        }
      }
      form {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        height: 280px;
        .signIn_inputs {
          width: 87.5%;
          height: 52.5px;
          p {
            height: 22.5px;
            color: #747474;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
          }
          input {
            padding-left: 10px;
            width: calc(100% - 10px);
            height: 30px;
            background-color: rgba(116, 116, 116, 0.2);
            border: 1.5px solid #747474;
            border-radius: 5px;
            color: #ffffff;
            outline: none;
          }
        }
        #signIn_ExternalButtons {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 80%;
          height: 40px;
          button {
            width: 40px;
            height: 40px;
            background-size: cover;
            background-color: #141414;
            border: none;
            border-radius: 50px;
            transition: 500ms ease;
            cursor: pointer;
          }
          button:hover {
            transform: translateY(5px);
          }
          button:nth-child(1) {
            background-image: url('@/assets/vk_login_icon.svg');
          }
          button:nth-child(2) {
            background-image: url('@/assets/google_login_icon.svg');
          }
          button:nth-child(3) {
            background-image: url('@/assets/github_login_icon.svg');
          }
        }
        #signIn_FormButton {
          width: 150px;
          height: 30px;
          background-color: #3d5aff;
          border: 0px;
          border-radius: 5px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
</style>