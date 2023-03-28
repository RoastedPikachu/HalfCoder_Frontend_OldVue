<template>
  <button @click="logOut()">
    <img src="@/assets/exitProfile_icon.svg" alt="Выйти из профиля">
    <p>Sign out</p>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'; 
  import axios from 'axios';
  import store from '@/store/index';

  export default defineComponent({
    name: 'SignOutButtonComp',
    methods: {
      async logOut() {
        store.commit('CHANGE_SIGN_IN_STATUS'); 
        document.cookie = `token; path=/; max-age=-1`;

        store.commit('CLEAR_USER_DATA');
        store.commit('CLOSE_COOKIE');
        alert('Выход из аккаунта прошёл успешно');
        location.reload();
      }
    },
    props: {
      token: String
    }
  })
</script>

<style lang="scss" scoped>
  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #141414;
    border: 0px solid rgba(116, 116, 116, 0.5);
    border-width: 1px 0px;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      margin-left: 5px;
      color: #ffffff;
      font-size: 20px;
      font-weight: 600;
      transition: 500ms ease;
    }
    p:hover {
      color: #3d5aff;
    }
  }
</style>