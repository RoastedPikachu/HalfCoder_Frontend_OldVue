<template>
  <header>
    <h1> <p>&lt;</p> HalfCoder <p>/></p> </h1>
    <nav>
      <router-link to="/" class="route">Главная</router-link>
      <router-link to="/events" class="route">События</router-link>
      <router-link to="/settings" class="routeImg">
        <img src="@/assets/grey_settings_icon.svg" alt="Настройки">
      </router-link>
      <div class="modalContainer">
        <button @click="changeNotifeActive()">
          <img src="@/assets/grey_notifications_icon.svg" alt="Уведомления">
          <div id="HasNotificationsStatus" v-if="hasNotificationsStatus"></div>
        </button>
        <ModalNotifComp :active="modalNotifActive"/>
      </div>
      <div class="modalContainer" v-if="isSignIn">
        <button @click="changeProfileActive()">
          <img src="@/assets/profile_icon.svg" alt="Профиль">
        </button>
        <ModalProfileComp :active="modalProfileActive"/>
      </div>
      <router-link to="/signIn" class="routeImg">
        <img src="@/assets/profile_icon.svg" alt="Профиль">
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ModalProfileComp from '@/widgets/features/ModalProfileComp.vue';
  import ModalNotifComp from '@/widgets/features/ModalNotifComp.vue';

  export default defineComponent({
    name: 'HeaderComp',
    data() {
      return {
        isSignIn: false,
        hasNotificationsStatus: true,
        modalNotifActive: false,
        modalProfileActive: false,
      }
    },
    methods: {
      changeNotifeActive():void {
        this.modalNotifActive = !this.modalNotifActive;
      },
      changeProfileActive():void {
        this.modalProfileActive = !this.modalProfileActive;
      }
    },
    components: {
      ModalProfileComp,
      ModalNotifComp
    },
  })
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7.5%;
    width: 85%;
    height: 60px;
    background-color: #111111;
    font-weight: 700;
    outline: none;
    h1 {
      display: flex;
      color: #ffffff;
      font-size: 36px;
      font-family: 'Space Grotesk', sans-serif;
      p {
        color: #3d5aff;
      }
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      height: 26px;
      font-family: 'Inter', sans-serif;
      .route {
        color: #747474;
        font-size: 16px;
        text-decoration: none;
        transition: 500ms ease;
        outline: none;
      }
      .route:hover {
        color: #3d5aff;
      }
      .routeImg {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        background-color: #1e1e1e;
        border: 0px;
        border-radius: 10px;
      }
      .modalContainer {
        position: relative;
        width: 34px;
        height: 34px;
        button {
          width: 34px;
          height: 34px;
          background-color: #1e1e1e;
          border: 0px;
          border-radius: 10px;
          outline: none;
          cursor: pointer;
          div {
            position: absolute;
            top: -2px;
            right: -2px;
            width: 10px;
            height: 10px;
            background-color: #df0a0a;
            border-radius: 50px;
          }
        }
      }
    }
  }
</style>
