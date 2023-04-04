<template>
  <div id="Profile_menuIcons" :class="{ whiteProfileMenuTheme: !isDarkTheme }">
    <span>
      <img src="@/assets/home_icon.svg" alt="Feed">
      <p>Feed</p>
    </span>
    <span>
      <img src="@/assets/connections_icon.svg" alt="Связи">
      <router-link to="/createPost" class="route">Связи</router-link>
    </span>
    <span>
      <img src="@/assets/news_icon.svg" alt="Последние новости">
      <p>Последние новости</p>
    </span>
    <span>
      <img src="@/assets/events_icon.svg" alt="События">
      <router-link to="/events" class="route">События</router-link>
    </span>
    <span>
      <img src="@/assets/groups_icon.svg" alt="Группы">
      <p>Группы</p>
    </span>
    <span>
      <img src="@/assets/notifications_icon.svg" alt="Уведомления">
      <p>Уведомления</p>
    </span>
    <SettingsLinkComp/>
  </div>
  <div id="Profile_checkProfile" :class="{ whiteButtonTheme: !isDarkTheme }" v-if="isSignIn">
    <button>Просмотр профиля</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';
  import SettingsLinkComp from '@/widgets/shared/SettingsLinkComp.vue';

  export default defineComponent({
    name: 'ProfileMenuComp',
    data() {
      return {
  
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const isSignIn = ref(false);

      onMounted(() => {
        isSignIn.value = store.state.isSignIn;

        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
      });

      return {
        isDarkTheme,
        isSignIn
      }
    },
    components: {
      SettingsLinkComp
    }
  })
</script>

<style lang="scss" scoped>
  div {
    color: #ffffff;
    span {
      .route {
        color: #ffffff;
      }
    }
    button {
      color: #3d5aff;
      background-color: #141414;
    }
    button:hover {
      color: #ffffff;
    }
  }
  #Profile_menuIcons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 87.5%;
    height: 220px;
    transition: 400ms ease;
    span {
      display: flex;
      align-items: flex-end;
      width: 100%;
      height: 18px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
      // Заменить все p на router-link
      p {
        margin-left: 10px;
        height: 22px;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Space Grotesk', sans-serif;
      }
      .route {
        margin-left: 10px;
        height: 22px;
        font-size: 20px;
        font-weight: 700; 
        font-family: 'Space Grotesk', sans-serif;
        transition: 400ms ease;
        text-decoration: none;
      }
      .route:hover {
        color: #3d5aff;
      }
    }
  }
  #Profile_checkProfile {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(116, 116, 116, 0.5);
    border-width: 2px 0 0;
    border-radius: 0px 0px 5px 5px;
    button {
      font-size: 16px;
      font-weight: 700;
      font-family: 'Space Grotesk', sans-serif;
      border: 0;
      transition: 400ms ease;
      outline: none;
      cursor: pointer;
    }
  }

  .whiteProfileMenuTheme {
    color: #1e1e1e;
    span {
      .route {
        color: #1e1e1e;
      }
    }
  }

  .whiteButtonTheme {
    button {
      background-color: #ffffff;
    }
    button:hover {
      color: #1d2b7d;
    }
  }
</style>