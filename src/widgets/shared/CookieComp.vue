<template>
  <section id="CookieBlock" v-if="isCookieOpen">
    <i class="fa-solid fa-xmark" @click="closeCookie()"></i>
    <img src="@/assets/cookie_icon.svg" alt="Куки">
    <p>Мы используем файлы куки, при помощи них мы подбираем вам контент и анализируем наш трафик</p>
    <button @click="closeCookie()">Принять</button>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import store from '@/store/index';

  export default defineComponent({
    name: 'CookieComp',
    data() {
      return {
        isCookieOpen: false,
      }
    },
    methods: {
      closeCookie():void {
        store.commit('CLOSE_COOKIE');
        this.isCookieOpen = store.state.isCookieOpen
      }
    },
    mounted() {
      setTimeout(() => this.isCookieOpen = store.state.isCookieOpen, 100);
    }
  })
</script>

<style lang="scss" scoped>
  #CookieBlock {
    position: relative;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    left: 10%;
    bottom: 5%;
    padding: 0 2.5%;
    width: 10%;
    height: 40%;
    background-color: #1b1b1b;
    border: 2px solid #a8b3cf;
    border-radius: 15px;
    i {
      position: absolute;
      top: 7.5%;
      right: 10%;
      color: #a8b3cf;
      font-size: 24px;
      cursor: pointer;
    }
    img {
      width: 55%;
      height: 20%;
    }
    p {
      margin-top: -10%;
      width: 100%;
      height: 35%;
      color: #cfd6e6;
      font-size: 14px;
      font-weight: 400;
      font-family: 'Space Grotesk', sans-serif;
      text-align: center; 
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 10%;
      border: none;
      border-radius: 10px;
      background-color: #ffffff;
      color: #0e1217;
      font-weight: 700;
      font-family: 'Inter', sans-serif;
      transition: 500ms ease;
      cursor: pointer;
    }
    button:hover {
      background-color: #0e1217;
      border: 1.5px solid #a8b3cf;
      color: #cfd6e6;
    }
  }
</style>