<template>
  <footer>
    <a href="/">About</a>
    <a href="/">Settings</a>
    <a href="/">Support</a>
    <a href="/">Docs</a>
    <p>
      <a href="/">Help</a>
      <a href="/">Privacy & terms</a>
    </p>
    <p>©2023 &lt; HalfCoder /></p>
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
    }
    p {
      display: flex;
      justify-content: space-around;
      width: 60%;
      text-align: center;
      line-height: 25px;
    }
  }
</style>