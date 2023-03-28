<template>
  <div id="Profile_menuIcons">
    <span>
      <img src="@/assets/home_icon.svg" alt="Feed">
      <p>Feed</p>
    </span>
    <span>
      <img src="@/assets/connections_icon.svg" alt="Связи">
      <router-link to="/createPost" class="route">Connections</router-link>
    </span>
    <span>
      <img src="@/assets/news_icon.svg" alt="Последние новости">
      <p>Latest News</p>
    </span>
    <span>
      <img src="@/assets/events_icon.svg" alt="События">
      <p>Events</p>
    </span>
    <span>
      <img src="@/assets/groups_icon.svg" alt="Группы">
      <p>Groups</p>
    </span>
    <span>
      <img src="@/assets/notifications_icon.svg" alt="Уведомления">
      <p>Notifications</p>
    </span>
    <SettingsLinkComp/>
  </div>
  <div id="Profile_checkProfile" v-if="isSignIn">
    <button>Просмотр профиля</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import store from '@/store/index';
  import SettingsLinkComp from '@/widgets/shared/SettingsLinkComp.vue';

  export default defineComponent({
    name: 'ProfileMenuComp',
    data() {
      return {
        isSignIn: false
      }
    },
    mounted() {
      this.isSignIn = store.state.isSignIn;
    },
    components: {
      SettingsLinkComp
    }
  })
</script>

<style lang="scss" scoped>
  #Profile_menuIcons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 87.5%;
    height: 220px;
    color: #ffffff;
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
        font-family: 'Space Grotesk', sans-serif;
      }
      .route {
        margin-left: 10px;
        height: 22px;
        color: #ffffff;
        font-size: 20px;
        font-family: 'Space Grotesk', sans-serif;
        transition: 500ms ease;
        text-decoration: none;
      }
      .route:hover {
        color: #3d5aff;
      }
      .profile_menuIcons_route {
        margin-left: 10px;
        height: 22px;
        color: #ffffff;
        font-size: 20px;
        font-family: 'Space Grotesk', sans-serif;
        transition: 500ms ease;
        text-decoration: none;
      }
      .profile_menuIcons_route:hover {
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
      color: #3d5aff;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Space Grotesk', sans-serif;
      background-color: #141414;
      border: 0;
      transition: 500ms ease;
      outline: none;
      cursor: pointer;
    }
    button:hover {
      color: #ffffff;
    }
  }
</style>