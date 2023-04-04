<template>
  <div id="ElemBrieflyInfo" :class="{ whiteBrieflyInfoTheme: !isDarkTheme }">
    <div class="ElemBrieflyInfo_Rating_infoUser_image">
    </div>
    <span>
      <p></p>
      <p></p>
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted } from 'vue';
  import store from '@/store';

  export default defineComponent({
    name: 'ItemBrieflyInfoCompLoading',
    data() {
      return {

      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);

      onMounted(() => {
        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
      })

      return {
        isDarkTheme
      }
    }
  })
</script>

<style lang="scss" scoped>

  #ElemBrieflyInfo {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    .ElemBrieflyInfo_Rating_infoUser_image {
      position: relative;
      width: 40px;
      height: 40px;
      background-color: rgba(116, 116, 116, 0.5);
      border-radius: 5px;
    }
    span {
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      width: 30%;
      p {
        width: 70%;
        height: 12.5px;
        background-color: rgba(116, 116, 116, 0.5);
        border-radius: 2.5px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        text-align: left;
        transition: 400ms ease;
      }
      p:last-child {
        margin-top: 7.5px;
        width: 90%;
        font-size: 12px;
      }
    }
  }
  
</style>