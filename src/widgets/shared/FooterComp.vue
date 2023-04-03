<template>
  <footer>
    <span>
      <a href="/">About</a>
      <router-link class="route" to="/settings">Settings</router-link>
      <a href="/">Support</a>
      <a href="/">Docs</a>
    </span>
    <span>
      <a href="/">Help</a>
      <a href="/">Privacy & terms</a>
    </span>
    <span>©2023 &lt; HalfCoder /></span>
    <span id="SocialNetworkLinks">
      <a href="/" id="SocialNetworkLinks_Vk">
        <img src="@/assets/grey_vk_icon.svg" alt="Вконтакте">
      </a>
      <a href="/" id="SocialNetworkLinks_Tg">
        <img src="@/assets/grey_telegramm_icon.svg" alt="Telegram">
      </a>
      <a href="/" id="SocialNetworkLinks_Dzen">
        <img src="@/assets/dzen_icon.svg" alt="Дзен">
      </a>
    </span>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'FooterComp',
  })
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 17px;
    padding: 0 7.5%;
    width: 85%;
    height: 60px;
    color: #747474;
    font-size: 12px;
    font-family: 'Space Grotesk', sans-serif;
    a {
      color: #747474;
      line-height: 25px;
      text-decoration: none;
      transition: 400ms ease;
      outline: none;
    }
    .route {
      color: #747474;
      line-height: 25px;
      text-decoration: none;
      transition: 400ms ease;
      outline: none;
    }
    .route:hover {
      color: #3d5aff;
    }
    a:hover {
      color: #3d5aff;
    }
    span {
      display: flex;
      justify-content: space-around;
      width: 60%;
      text-align: center;
      line-height: 25px;
    }
    span:first-child {
      width: 100%;
    }
    span:last-child {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 5px;
      width: 50%;
      a {
        width: 26px;
        height: 26px;
        transition: 400ms ease;
        img {
          width: 100%;
          height: 100%;
        }
      }
      a:last-child {
        width: 22px;
        height: 22px;
      }
      a:hover {
        transform: translateY(5px);
      }
    }
  }
</style>