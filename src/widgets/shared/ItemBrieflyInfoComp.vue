<template>
  <div class="ElemBrieflyInfo">
    <div class="ElemBrieflyInfo_Rating_infoUser_image">
      <img :src="image" :alt="name">
      <div class="ElemBrieflyInfo_Rating_infoUser_image_starStatus" v-if="starStatus"></div>
    </div>
    <span>
      <p>{{ name }}</p>
      <p>{{ employment }}</p>
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ItemBrieflyInfoComp',
    props: {
      image: String,
      name: String,
      starStatus: Boolean,
      employment: String
    }
  })
</script>

<style lang="scss" scoped>
  .ElemBrieflyInfo {
    display: flex;
    align-items: center;
    width: 100%;
    .ElemBrieflyInfo_Rating_infoUser_image {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: #747474;
    border-radius: 50px;
      img {
        width: 100%;
        height: 100%;
        color: #ffffff;
      }
      .ElemBrieflyInfo_Rating_infoUser_image_starStatus {
        position: absolute;
        right: 2px;
        bottom: 2px;
        width: 10px;
        height: 10px;
        background-color: #ffdd00;
        border-radius: 50px;
      }
    }
    span {
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      width: 70%;
      p {
        width: 100%;
        color: #ffffff;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        text-align: left;
      }
      p:last-child {
        color: #747474;
        font-size: 12px;
      }
    }
  }
  
</style>