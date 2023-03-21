<template>
  <div id="ErrorBlock" v-if="errLength">
    <img src="@/assets/error_icon.svg" alt="Крестик">
    <p>{{ error }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ErrorComp',
    props: {
      errLength: Number,
      error: String
    }
  })
</script>

<style lang="scss" scoped>
  #ErrorBlock {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2.5%;  
    width: 80%;
    height: 35px;
    background-color: #101010;
    border: 1.5px solid #dc283a;
    border-radius: 5px;
    p {
      margin-left: 5%;
      width: 80%;
      color: #ffffff;
      font-size: 14px;
      font-weight: 400;
      font-family: 'Space Grotesk', sans-serif;
      text-align: left;
    }
  }
</style>