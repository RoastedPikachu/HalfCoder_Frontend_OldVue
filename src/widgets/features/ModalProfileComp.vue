<template>
  <div id="ModalProfileWindow" v-if="modalProfileActive">
    <ItemBrieflyInfoComp
      :name="name"
      :image="image"
      :employment="employment"
      :starStatus="starStatus"
    />
    <button>Профиль</button>
    <SettingsLinkComp/>
    <div id="ModalProfileWindow_support">
      <img src="@/assets/support_icon.svg" alt="Тех поддержка">
      <p>Support</p>
    </div>
    <hr>
    <div id="ModalProfileWindow_changeTheme">
      <img src="@/assets/changeTheme_sun_icon.svg" alt="Сменить тему">
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ItemBrieflyInfoComp from '@/widgets/shared/ItemBrieflyInfoComp.vue';
  import SettingsLinkComp from '@/widgets/shared/SettingsLinkComp.vue';

  export default defineComponent({
    name: "ModalProfileComp",
    data() {
        return {
          modalProfileActive: true,
          image: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
          starStatus: false,
          name: 'Leha Ovchinnikov',
          employment: 'backend-разработчик'
        };
    },
    components: { 
      ItemBrieflyInfoComp,
      SettingsLinkComp
    }
  })
</script>

<style lang="scss" scoped>
  #ModalProfileWindow {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 35px;
    right: 0px;
    padding: 15px 15px;
    width: 195px;
    height: 235px;
    background-color: #141414;
    border: 2px solid #747474;
    border-radius: 5px;
    z-index: 10;
    button {
      width: 100%;
      height: 30px;
      background-color: #3d5aff;
      border: 0px;
      border-radius: 5px;
      color: #ffffff;
      font-size: 14px;
      cursor: pointer;
    }
    #ModalProfileWindow_support {
      display: flex;
      align-items: flex-end;
      height: 25px;
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
        transition: 500ms ease;
      }
      p:hover {
        color: #3d5aff;
      }
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