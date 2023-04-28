<template>
  <span :class="{ whiteSupportTheme: !isDarkTheme }">
    <img src="@/assets/support_icon.svg" alt="Тех поддержка">
    
    <p>Поддержка</p>
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, watch } from 'vue';
  import store from '@/store';

  export default defineComponent({
    name: 'SupportLinkComp',
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);

      watch(() => store.state.isDarkTheme, () => {
        isDarkTheme.value = store.state.isDarkTheme;
      });

      return {
        isDarkTheme
      }
    },
  })
</script>

<style lang="scss" scoped>
  span {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 22.5px;
    background-color: transparent;
    cursor: pointer;
    img {
      width: 25px;
      height: 100%;
    }
    p {
      margin-left: 5px;
      color: #ffffff;
      font-size: 20px;
      font-weight: 600;
      transition: 400ms ease;
    }
    p:hover {
      color: #3d5aff;
    }
  }

  .whiteSupportTheme {
    p {
      color: #1e1e1e;
    }
  }
</style>