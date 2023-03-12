<template>
  <button @click="logOut()">
    <img src="@/assets/exitProfile_icon.svg" alt="Выйти из профиля">
    <p>Sign out</p>
  </button>
</template>

<script lang="ts">
  import axios from 'axios';
import { defineComponent } from 'vue'; 

  export default defineComponent({
    name: 'SignOutButtonComp',
    methods: {
      async logOut() {
        let url = new URL('http://62.109.10.224:500/api/v1/auth/logout/');
        let isLogOutSuccess = false;
        let error = '';
        let token = '';

        let result = await axios.post(url.toString(), token, {headers: {'Content-Type': 'application/json;charset=utf-8'}});

      }
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