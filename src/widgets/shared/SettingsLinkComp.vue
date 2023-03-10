<template>
  <span>
    <img src="@/assets/settings_icon.svg" alt="Настройки">
    <router-link to="/settings" class="profile_menuIcons_route">Settings</router-link>
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SettingsLinkComp'
  })
</script>

<style lang="scss" scoped>
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
    .profile_menuIcons_route {
      margin-left: 10px;
      height: 22px;
      color: #ffffff;
      font-size: 20px;
      font-family: 'Space Grotesk', sans-serif;
      transition: 500ms ease;
      text-decoration: none;
      outline: none;
    }
    .profile_menuIcons_route:hover {
      color: #3d5aff;
    }
  }
</style>