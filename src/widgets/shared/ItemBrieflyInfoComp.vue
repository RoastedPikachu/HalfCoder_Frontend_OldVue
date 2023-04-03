<template>
  <div id="ElemBrieflyInfo" :class="{ whiteBrieflyInfoTheme: !isDarkTheme }">
    <div class="ElemBrieflyInfo_Rating_infoUser_image">
      <img :src="image" :alt="name">
    </div>
    <span>
      <p>{{ name }}</p>
      <p>{{ employment }}</p>
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted } from 'vue';
  import store from '@/store';

  export default defineComponent({
    name: 'ItemBrieflyInfoComp',
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
      });

      return {
        isDarkTheme
      }
    },
    props: {
      image: String,
      name: String,
      employment: String
    }
  })
</script>

<style lang="scss" scoped>
  div {
    span {
      p {
        color: #ffffff;
      }
    }
  }

  #ElemBrieflyInfo {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    .ElemBrieflyInfo_Rating_infoUser_image {
      position: relative;
      width: 40px;
      height: 40px;
      background-color: #747474;
      border-radius: 50px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        color: #ffffff;
      }
    }
    span {
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      width: 70%;
      p {
        width: 100%;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        text-align: left;
        transition: 400ms ease;
      }
      p:last-child {
        color: #747474;
        font-size: 12px;
      }
    }
  }

  .whiteBrieflyInfoTheme {
    span {
      p {
        color: #1e1e1e;
      }
    }
  }
  
</style>