<template>
  <section id="Profile">
    <div id="Profile_topLine"></div>
    <div id="Profile_mainInfo">
      <img src="" alt="Фото профиля">
      <h2>Leha Ovchinnikov</h2>
      <p>frontend-разработчик</p>
      <p>I'd love to change the world, but they won't give me the source code</p>
    </div>
    <span id="Profile_secondaryInfo">
      <div><p>{{ posts }}</p> Posts</div>
      <div><p>{{ followers }}K</p> Followers</div>
      <div><p>{{ following }}</p>  Following</div>
    </span>
    <div id="Profile_centerLine"></div>
    <ProfileMenuComp/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import ProfileMenuComp from '@/widgets/features/ProfileMenuComp.vue';

  export default defineComponent({
    name: 'ProfileComp',
    data() {
      return {
        posts: 256,
        followers: 2.5,
        following: 365
      }
    },
    components: {
      ProfileMenuComp
    }
  })
</script>

<style lang="scss" scoped>
  #Profile {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 600px;
    background-color: #141414;
    border: 2px solid #747474;
    border-radius: 5px;
    #Profile_topLine {
      position: absolute;
      width: 100%;
      height: 50px;
      border: 1px solid #747474;
      border-width: 0 0 2px;
      border-radius: 5px 5px 0 0;
    }
    #Profile_mainInfo {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 25px;
      width: 180px;
      height: 185px;
      img {
        width: 75px;
        height: 75px;
        background-color: #ffffff;
        border-radius: 15px;
        z-index: 9;
      }
      h2 {
        margin-top: 7px;
        color: #ffffff;
        font-size: 18px;
        font-family: 'Inter', sans-serif;
      }
      p {
        color: #747474;
        font-size: 14px;
        font-family: 'Space Grotesk', sans-serif;
        text-align: center;
      }
      p:last-child {
        margin-top: 7px;
      }
    }
    #Profile_secondaryInfo {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      width: 235px;
      height: 45px;
      div {
        color: #747474;
        font-family: 'Space Grotesk', sans-serif;
        text-align: center;
        p {
          color: #ffffff;
          font-size: 16px;
        }
      }
      div:nth-child(2) {
        width: 90px;
        border: 1px solid #747474;
        border-width: 0 2px 0;
      }
    }
    #Profile_centerLine {
      position: relative;
      width: 87.5%;
      height: 1px;
      border: 2px solid #747474;
      border-width: 2px 0 0;
      border-radius: 5px;
    }
  }
</style>