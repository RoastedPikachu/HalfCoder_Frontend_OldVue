<template>
  <section>
    <div id="Registration">
      <h1> <p>&lt;</p> HalfCoder <p>/></p> </h1>
      <form>
        <div class="registration_inputs">
          <p>Имя</p>
          <input type="text" placeholder="Введите имя" v-model="name">
        </div>
        <div class="registration_inputs">
          <p>Фамилия</p>
          <input type="text" placeholder="Введите фамилию" v-model="secondName">
        </div>
        <div class="registration_inputs">
          <p>Имя пользователя</p>
          <input type="text" placeholder="Введите имя пользователя" v-model="userName">
        </div>
        <div class="registration_inputs">
          <p>E-mail</p>
          <input type="text" placeholder="Введите e-mail" v-model="email">
        </div>
        <div class="registration_inputs">
          <p>Пароль</p>
          <input type="password" placeholder="Введите пароль" v-model="password">
        </div>
        <div class="registration_inputs">
          <p>Повторите пароль</p>
          <input type="password" placeholder="Введите пароль ещё раз" v-model="repeatedPassword">
        </div>
        <button type="button" @click="setValuesRegistration()">Зарегистрироваться</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';

  export default defineComponent({
    name: 'RegistrationPage',
    data() {
      return {
        name: '',
        secondName: '',
        userName: '',
        email: '',
        password: '',
        repeatedPassword: ''
      }
    },
    methods: {
      async setValuesRegistration() {
        let url = new URL('http://62.109.10.224:500/api/v1/auth/register/');
        let isRegisterSuccess = false;
        let error = '';

        let result = await axios.post(url.toString(), {
          first_name: this.name,
          last_name: this.secondName,
          username: this.userName,
          email: this.email,  
          password: this.password,
          repeatedPassword: this.repeatedPassword
        }, {
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        });

        let status:number = result.data.status;

        switch(status) {
          case 100: isRegisterSuccess = true;
            break;
          case 101: error = 'Неккоректные данные';
            break;
          case 102: error = 'Такой пользователь уже существует';
            break;
          case 103: error = 'Пользователь с такой почтой уже существует';
            break;
        }

        if(isRegisterSuccess) {
          alert('Регистрация прошла успешно');
          this.$router.push('/signIn');
        } else {
          alert(error);
        }

        this.name = '';
        this.secondName = '';
        this.userName = '';
        this.email = '';
        this.password = '';
        this.repeatedPassword = '';
      }
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
    height: 380px;
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
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 300px;
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
      button {
        margin-left: calc(50% - 90px);
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
    }
  }
</style>