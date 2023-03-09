<template>
  <div id="ModalNotifWindow" v-if="modalNotifActive"></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ModalNotifComp',
    data() {
      return {
        modalNotifActive: false,
      }
    }
  })
</script>

<style lang="scss" scoped>
  #ModalNotifWindow {
    position: absolute;
    top: 35px;
    right: 0px;
    padding: 15px 15px;
    width: 175px;
    height: 235px;
    background-color: #141414;
    border: 2px solid #747474;
    border-radius: 5px;
    z-index: 10;
  }
</style>