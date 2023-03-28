<template>
  <div class="modalPostActions" v-if="modalActionsActive">
    <button>
      <img src="@/assets/bookmark_icon.svg" alt="В закладки">
      <p>В закладки</p>
    </button>
    <button>
      <i class="fa-solid fa-flag"></i>
      <p>Репорт</p> 
    </button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ModalPostActions',
    props: {
      modalActionsActive: Boolean
    }
  })

</script>

<style lang="scss" scoped>
  .modalPostActions {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    right: 0px;
    padding: 5px;
    width: 8.5vw;
    height: 10vh;
    background-color: #141414;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    z-index: 10;
    button {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 50%;
      background-color: #141414;
      border: none;
      outline: none;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
      i {
        width: 20px;
        height: 15px;
        color: #747474;
        font-size: 16px;
      }
      p {
        margin-left: 5px;
        color: #747474;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Space Grotesk', sans-serif;
        transition: 500ms ease;
      }
    }
    button:nth-child(1) {
      border: 2px solid rgba(116, 116, 116, 0.5);
      border-width: 0 0 2px;
    }
    button:hover {
      p {
        color: #ffffff;
      }
    }
  }
</style>