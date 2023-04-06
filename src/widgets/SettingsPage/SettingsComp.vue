<template>
  <section id="MainBlock_Settings" :class="{ whiteSettingsTheme: !isDarkTheme}">
    <h2>Настройки аккаунта</h2>
    <form>
      <div class="mainBlock_Settings_InputsContainers">
        <div>
          <p>Имя</p>
          <input type="text" v-model="firstName">
        </div>
        <div>
          <p>Фамилия</p>
          <input type="text" v-model="secondName">
        </div>
      </div>
      <div class="mainBlock_Settings_InputsContainers">
        <div>
          <p>Имя пользователя</p>
          <input type="text" v-model="userName">
        </div>
        <div>
          <p>Дата рождения</p>
          <input type="datetime-local" v-model="dateOfBirth">
        </div>
      </div>
      <div class="mainBlock_Settings_InputsContainers">
        <div>
          <p>Номер телефона</p>
          <input type="text" v-model="phoneNumber">
        </div>
        <div>
          <p>E-mail</p>
          <input type="email" v-model="email">
        </div>
      </div>
      <div id="MainBlock_Settings_textareaContainer">
        <p>О себе</p>
        <textarea maxlength="300" v-model="aboutUser"></textarea>
        <p>Лимит символов: 300</p>
      </div>
      <button type="button" @click="setChanges()">Сохранить изменения</button>
    </form>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';
  import flatpickr from "flatpickr";

  export default defineComponent({
    name: 'SettingsComp',
    data() {
      return {
        
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const firstName = ref('');
      const secondName = ref('');
      const userName = ref('');
      const dateOfBirth = ref('');
      const phoneNumber = ref('');
      const email = ref('');
      const aboutUser = ref('');

      const setChanges = ():void => {
        let payload = {
          firstName: firstName.value,
          secondName: secondName.value,
          userName: userName.value,
          dateOfBirth: dateOfBirth.value,
          phoneNumber: phoneNumber.value,
          email: email.value,
          aboutUser: aboutUser.value
        }
        
        store.commit('SET_FULL_USER_DATA', payload);
      }

      onMounted(() => {
        firstName.value = store.state.firstName;
        secondName.value = store.state.secondName;
        userName.value = store.state.userName;
        phoneNumber.value = store.state.phoneNumber;
        email.value = store.state.email;
        aboutUser.value = store.state.aboutUser;

        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
        setTimeout(() => flatpickr("input[type=datetime-local]", {}), 500);
      });

      return {
        isDarkTheme,
        firstName,
        secondName,
        userName,
        dateOfBirth,
        phoneNumber,
        email,
        aboutUser,
        setChanges
      }
    },
  })
</script>

<style lang="scss" scoped>
  section {
    background-color: #141414;
    h2 {
      color: #ffffff;
    }
    form {
      color: #747474;
      .mainBlock_Settings_InputsContainers {
        input {
          background-color: #1e1e1e;
        }
      }
      #MainBlock_Settings_textareaContainer {
        textarea {
          background-color: #1e1e1e;
        }
      }
    }
  }
  #MainBlock_Settings {
    margin-left: 20px;
    padding: 20px 30px;
    width: 720px;
    height: 490px;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    transition: 400ms ease;
    h2 {
      width: 205px;
      font-size: 20px;
      text-align: center;
      transition: 400ms ease;
    }
    form {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      margin-top: 20px;
      width: 100%;
      height: 85%;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      transition: 400ms ease;
      .mainBlock_Settings_InputsContainers {
        display: flex;
        justify-content: space-between;
        width: 100%;
        div {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 49%;
          height: 70px;
          p {
            height: 5px;
          }
          input {
            margin-top: 5px;
            padding-left: 15px;
            width: 90%;
            height: 30px;
            border: 1.5px solid #747474;
            border-radius: 5px;
            color: #747474;
            outline: none;
            transition: 400ms ease;
          }
          input:last-child {
            width: 100%;
          }
        }
      }
      #MainBlock_Settings_textareaContainer {
        width: 100%;
        height: 190px;
        p:first-child {
          height: 25px;
        }
        textarea {
          padding-top: 10px;
          padding-left: 15px;
          width: 100%;
          height: 130px;
          border: 1.5px solid #747474;
          border-radius: 5px;
          color: #747474;
          font-family: 'Inter', sans-serif;
          outline: none;
          resize: none; 
          transition: 400ms ease;
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 35px;
        background-color: #3d5aff;
        border: 0;
        border-radius: 5px;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        outline: none;
        cursor: pointer;
      }
    }
  }
  .whiteSettingsTheme {
    background-color: rgba(116, 116, 116, 0.05);
    h2 {
      color: #3d5aff;
    }
    form {
      color: #3d5aff;
      .mainBlock_Settings_InputsContainers {
        input {
          background-color: #ffffff;
        }
      }
      #MainBlock_Settings_textareaContainer {
        textarea {
          background-color: #ffffff;
        }
      }
    }
  }
</style>