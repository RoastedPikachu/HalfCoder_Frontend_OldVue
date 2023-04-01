<template>
  <router-view></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';

  export default defineComponent({
    name: 'App',
    data() {
      return {

      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);

      const changeBodyTheme = () => {
        if(isDarkTheme.value === true) {
          document.body.style.backgroundColor="#1e1e1e";
        } else {
          document.body.style.backgroundColor="#ffffff";
        }
      }

      onMounted(() => {
        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
          changeBodyTheme(); 
        }, 150);
      });

      return {
        isDarkTheme
      }
    }
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
    transition: 500ms ease;
  }

</style>
