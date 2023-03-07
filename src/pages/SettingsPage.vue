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
  import HeaderComp from '@/widgets/HeaderComp.vue';
  import FooterComp from '@/widgets/FooterComp.vue';
  import ProfileMenuComp from '@/widgets/features/ProfileMenuComp.vue';
  import SettingsComp from '@/widgets/SettingsComp.vue';

  export default defineComponent({
    name: 'SettingsPage',
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
    width: 85%;
    padding: 0 7.5%;
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