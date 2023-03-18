<template>
  <section id="CookieBlock">
    <p>Наш сайт использует файлы cookie</p>
    <button>
      <img src="@/assets/more_info_icon.svg" alt="Подробнее">
      <p>Подробнее</p>
    </button>
    <button>
      <img src="@/assets/ok_icon.svg" alt="Хорошо">
      <p>Хорошо</p>
    </button>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CookieComp'
  })
</script>

<style lang="scss" scoped>
  #CookieBlock {
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    left: 10%;
    bottom: 0;
    width: 80%;
    height: 12.5%;
    background-color: #0c0b0b;
    border-radius: 5px;
    p {
      width: 100%;
      height: 10%;
      color: #747474;
      font-size: 20px;
      font-weight: 700;
      font-family: 'Space Grotesk', sans-serif;
      text-align: center;
    }
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      width: 15%;
      height: 30%;
      border: none;
      border-radius: 5px;
      background-color: #ffffff;
      transition: 500ms ease;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
      }
      p {
        width: 80%;
        height: auto;
        font-size: 16px;
        text-align: left;
      }
    }
    button:hover {
      transform: scale(1.05);
    }
  }
</style>