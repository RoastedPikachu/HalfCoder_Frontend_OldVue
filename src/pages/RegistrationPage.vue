<template>
  <section>
    <div id="Registration">
      <h1> <p>&lt;</p> HalfCoder <p>/></p> </h1>
      <form>
        <ErrorComp :error="error" :errLength="error.length"/>
        <div class="registration_inputs_container">
          <div class="registration_inputs">
            <p>Имя</p>
            <input type="text" placeholder="Введите имя" v-model="name">
          </div>
          <div class="registration_inputs">
            <p>Фамилия</p>
            <input type="text" placeholder="Введите фамилию" v-model="secondName">
          </div>
        </div>
        <div class="registration_inputs_container">
          <div class="registration_inputs">
            <p>Имя пользователя</p>
            <input type="text" placeholder="Введите имя пользователя" v-model="userName">
          </div>
          <div class="registration_inputs">
            <p>E-mail</p>
            <input type="text" placeholder="Введите e-mail" v-model="email">
          </div>
        </div>
        <div class="registration_inputs_container">
          <div class="registration_inputs">
            <p>Пароль</p>
            <input type="password" placeholder="Введите пароль" v-model="password">
          </div>
          <div class="registration_inputs">
            <p>Повторите пароль</p>
            <input type="password" placeholder="Введите пароль ещё раз" v-model="repeatedPassword">
          </div>
        </div>
        <div id="Registation_termsOfUse">
          <input type="checkbox" name="termsOfUse" v-model="agreeToTermsOfUse" > 
          <label for="termsOfUse">Я принимаю условия <router-link to="/docs/termsOfUse" target="_blank" id="Registation_termsOfUse_route">Пользовательского соглашения</router-link></label>
        </div>
        <button class="registration_button" type="button" @click="setValuesRegistration()" v-if="agreeToTermsOfUse">Зарегистрироваться</button>
        <button class="registration_button registration_notActiveButton" type="button" v-if="!agreeToTermsOfUse">Зарегистрироваться</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import ErrorComp from '@/widgets/shared/ErrorComp.vue';

  export default defineComponent({
    name: 'RegistrationPage',
    data() {
      return {
        name: '',
        secondName: '',
        userName: '',
        email: '',
        password: '',
        repeatedPassword: '',
        agreeToTermsOfUse: false,
        error: '',
      }
    },
    methods: {
      async setValuesRegistration() {
        const url = new URL('http://62.109.10.224:500/api/v1/auth/register/');

        const result = await axios.post(url.toString(), {
          first_name: this.name,
          last_name: this.secondName,
          username: this.userName,
          email: this.email,  
          password: this.password,
          repeatedPassword: this.repeatedPassword
        }, {
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        });

        const status:number = result.data.status;

        switch(status) {
          case 100: this.$router.push('/signIn');
            break;
          case 101: this.error = 'Неккоректные данные';
            break;
          case 102: this.error = 'Такой пользователь уже существует';
            break;
          case 103: this.error = 'Пользователь с такой почтой уже существует';
            break;
        }

        this.name = '';
        this.secondName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.repeatedPassword = '';
      },
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
  }
  #Registration {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 15px;
    width: 520px;
    height: 400px;
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
      height: 340px;
      .registration_inputs_container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
      }
      .registration_inputs {
        width: 47.5%;
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
      #Registation_termsOfUse {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        input {
          width: 20px;
          height: 75%;
        }
        label {
          margin-left: 2.5%;
          color: #ffffff;
          font-size: 14px;
          font-family: 'Space Grotesk', sans-serif;
          #Registation_termsOfUse_route {
            color: #3d5aff;
            text-decoration: none;
            outline: none;
          }
        }
      }
      .registration_button {
        width: 180px;
        height: 35px;
        background-color: #3d5aff;
        border: 0px;
        border-radius: 5px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }
      .registration_notActiveButton {
        background-color: #747474;
      }
    }
  }
</style>