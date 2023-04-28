<template>
  <TheHeaderComp/>
  <section id="MainBlock">
    <aside id="MainBlock_LeftOtherInfo">
      <ProfileMenuComp/>

      <TheFooterComp/>
    </aside>
    
    <SettingsComp/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, watch } from 'vue';
  import store from '@/store/index';
  import TheHeaderComp from '@/widgets/shared/TheHeaderComp.vue';
  import TheFooterComp from '@/widgets/shared/TheFooterComp.vue';
  import ProfileMenuComp from '@/widgets/features/ProfileMenuComp.vue';
  import SettingsComp from '@/widgets/SettingsPage/SettingsComp.vue';

  export default defineComponent({
    name: 'SettingsPage',
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const token = ref(document.cookie.slice(67));

      watch(() => store.state.isDarkTheme, () => {
        isDarkTheme.value = store.state.isDarkTheme;
      });

      return {
        isDarkTheme,
        token,
      }
    },
    components: {
      TheHeaderComp,
      ProfileMenuComp,
      TheFooterComp,
      SettingsComp
    }
  })
</script>

<style lang="scss" scoped>
  #MainBlock {
    display: flex;
    margin-top: 15px;
    width: 75%;
    padding: 0 12.5%;
    font-weight: 700;
    #MainBlock_LeftOtherInfo {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 280px;
      height: 246px;
      border: 2px solid $BorderColor;
      border-radius: 5px;
      transition: 400ms ease;
    }
  }
</style>