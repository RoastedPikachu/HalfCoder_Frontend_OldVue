<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  
})
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #1e1e1e;
  }
</style>
