<template>
  <div id="ModalProfileWindow" v-if="active">
    <ItemBrieflyInfoComp
      :name="name"
      :image="image"
      :employment="employment"
    />
    <button id="ModalProfileWindow_profileButton">Профиль</button>
    <div id="ModalProfileWindow_buttons">
      <SettingsLinkComp/>
      <SupportLinkComp/>
    </div>
    <SignOutButtonComp :token="token"/>
    <div id="ModalProfileWindow_changeTheme">
      <img src="@/assets/changeTheme_sun_icon.svg" alt="Сменить тему">
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import store from '@/store';
  import ItemBrieflyInfoComp from '@/widgets/shared/ItemBrieflyInfoComp.vue';
  import SettingsLinkComp from '@/widgets/shared/SettingsLinkComp.vue';
  import SupportLinkComp from '@/widgets/shared/SupportLinkComp.vue';
  import SignOutButtonComp from '@/widgets/shared/SignOutButtonComp.vue';

  export default defineComponent({
    name: "ModalProfileComp",
    data() {
        return {
          image: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
          starStatus: false,
          name: '',
          employment: ''
        }
    },
    mounted() {
      setTimeout(() => {
        this.name = store.state.userName;
        this.employment = store.state.employment;
      }, 200);
    },
    components: { 
      ItemBrieflyInfoComp,
      SettingsLinkComp,
      SupportLinkComp,
      SignOutButtonComp
    },
    props: {
      active: Boolean,
      token: String
    }
  })
</script>

<style lang="scss" scoped>
  #ModalProfileWindow {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    top: 35px;
    right: 0px;
    padding: 15px 15px;
    width: 195px;
    height: 255px;
    background-color: #141414;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    z-index: 10;
    #ModalProfileWindow_profileButton {
      width: 100%;
      height: 30px;
      background-color: #3d5aff;
      border: 0px;
      border-radius: 5px;
      color: #ffffff;
      font-size: 14px;
      cursor: pointer;
    }
    #ModalProfileWindow_buttons {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: 55px;
    }
    .ModalProfileWindow_buttonContainer {
      display: flex;
      height: 40px;
      border: 0px solid #747474;
      border-width: 1px 0px;
    }
    #ModalProfileWindow_changeTheme {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px; 
      background-color: #1e1e1e;
      border-radius: 5px;
      cursor: pointer;
      img {
        margin-left: 2%;
        width: 75%;
        height: 75%;
      }
    }
  }
</style>