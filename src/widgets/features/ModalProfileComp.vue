<template>
  <div id="ModalProfileWindow" :class="{ whiteModalProfileTheme: !isDarkTheme }" v-if="active">
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
    <button class="modalProfileWindow_changeTheme" @click="changeTheme()">
      <i class="fa-solid fa-circle-half-stroke"></i>
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  import store from '@/store';
  import ItemBrieflyInfoComp from '@/widgets/shared/ItemBrieflyInfoComp.vue';
  import SettingsLinkComp from '@/widgets/shared/SettingsLinkComp.vue';
  import SupportLinkComp from '@/widgets/shared/SupportLinkComp.vue';
  import SignOutButtonComp from '@/widgets/shared/SignOutButtonComp.vue';

  export default defineComponent({
    name: "ModalProfileComp",
    data() {
        return {

        }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const starStatus = ref(false);
      const name = ref('');
      const employment = ref('');
      const image = ref('https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png');

      const changeTheme = () => {
        store.commit('CHANGE_THEME_COLOR_STATUS');
        isDarkTheme.value = store.state.isDarkTheme;
      }

      return {
        isDarkTheme,
        starStatus,
        name,
        employment,
        image,
        changeTheme
      }
    },
    mounted() {
      setInterval(() => {
        this.name = store.state.userName;
        this.image = store.state.userImage;
        this.employment = store.state.employment;
      }, 250);
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
  div {
    background-color: #141414;
    #ModalProfileWindow_buttons {
      background-color: #141414;
    }
    .modalProfileWindow_changeTheme {
      background-color: #1e1e1e;
      i {
        color: #747474;
      }
    }
  }

  #ModalProfileWindow {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    top: 35px;
    right: 0px;
    padding: 15px 15px;
    width: 195px;
    height: 280px;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    transition: 500ms ease;
    z-index: 10;
    #ModalProfileWindow_profileButton {
      margin-top: 10px;
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
      height: 75px;
      transition: 500ms ease;
    }
    .ModalProfileWindow_buttonContainer {
      display: flex;
      height: 65px;
      border: 0px solid #747474;
      border-width: 1px 0px;
      transition: 500ms ease;
    }
    .modalProfileWindow_changeTheme {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 45px;
      height: 45px;
      border: none;
      border-radius: 5px;
      transition: 500ms ease;
      outline: none;
      cursor: pointer;
      i {
        font-size: 30px;
        transition: 500ms ease;
      }
      i:hover {
        color: #3d5aff;
      }
    }
  }
  .whiteModalProfileTheme {
    background-color: #ffffff;
    #ModalProfileWindow_buttons {
      background-color: #ffffff;
    }
    .modalProfileWindow_changeTheme {
      background-color: #747474;
      i {
        color: #ffffff;
      }
    }
  }
</style>