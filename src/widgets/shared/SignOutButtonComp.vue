<template>
  <span @click="logOut()" :class="{ whiteSignOutTheme: !isDarkTheme }">
    <img src="@/assets/exitProfile_icon.svg" alt="Выйти из профиля">
    <p>Sign out</p>
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'; 
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';

  export default defineComponent({
    name: 'SignOutButtonComp',
    data() {
      return {
        
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);

      const logOut = ():void => {
        store.commit('CHANGE_SIGN_IN_STATUS'); 
        document.cookie = `token; path=/; max-age=-1`;

        store.commit('CLEAR_USER_DATA');
        store.commit('CLOSE_COOKIE');
        location.reload();
      }

      onMounted(() => {
        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
      });

      return {
        isDarkTheme,
        logOut
      }
    },
    props: {
      token: String
    }
  })
</script>

<style lang="scss" scoped>
  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 0px solid rgba(116, 116, 116, 0.5);
    border-width: 1px 0px;
    transition: 200ms ease;
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

  .whiteSignOutTheme {
    border-width: 2px 0px;
    p {
      color: #1e1e1e;
    }
  }
</style>