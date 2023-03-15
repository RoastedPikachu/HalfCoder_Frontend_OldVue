<template>
  <HeaderComp/>
  <section id="MainBlock">
    <aside id="MainBlock_LeftOtherInfo">
      <ProfileMenuComp/>
      <FooterComp/>
    </aside>
    <SettingsComp/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComp from '@/widgets/shared/HeaderComp.vue';
  import FooterComp from '@/widgets/shared/FooterComp.vue';
  import ProfileMenuComp from '@/widgets/features/ProfileMenuComp.vue';
  import SettingsComp from '@/widgets/SettingsPage/SettingsComp.vue';

  export default defineComponent({
    name: 'SettingsPage',
    data() {
      return {
        token: ''
      }
    },
    mounted() {
      this.token = document.cookie.slice(67);
    },
    components: {
      HeaderComp,
      ProfileMenuComp,
      FooterComp,
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
  }
  #MainBlock_LeftOtherInfo {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 280px;
    height: 300px;
    background-color: #141414;
    border: 2px solid #747474;
    border-radius: 5px;
  }
</style>