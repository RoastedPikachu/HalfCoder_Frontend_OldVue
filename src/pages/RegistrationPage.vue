<template>
  <h1> <p>&lt;</p> HalfCoder <p>/></p> </h1>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RegistrationPage',
  })
</script>

<style lang="scss" scoped>
  h1 {
    display: flex;
    color: #ffffff;
    font-size: 36px;
    font-family: 'Space Grotesk', sans-serif;
    p {
      color: #3d5aff;
    }
  }
</style>