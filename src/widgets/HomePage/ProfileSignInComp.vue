<template>
  <section id="Profile">
    <div id="Profile_topLine"></div>
    <div id="Profile_mainInfo">
      <img :src="userImage" alt="Фото профиля">
      <h2>{{ userName }}</h2>
      <p>{{ employment }}</p>
      <p>I'd love to change the world, but they won't give me the source code</p>
    </div>
    <span id="Profile_secondaryInfo">
      <div>
        <p>{{ followers }}</p> 
        <p>{{ followersCountText }}</p></div>
      <div>
        <p>{{ posts }}</p>
        <p>{{ postsCountText }}</p></div>
      <div>
        <p>{{ views }}</p>
        <p>{{ viewsCountText }}</p></div>
    </span>
    <div id="Profile_centerLine"></div>
    <ProfileMenuComp/>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import store from '@/store/index';
  import ProfileMenuComp from '@/widgets/features/ProfileMenuComp.vue';

  export default defineComponent({
    name: 'ProfileSignInComp',
    data() {
      return {
        userImage: '',
        userName: '',
        employment: '',
        posts: 0,
        followers: 0,
        views: 0,
        postsCountText: '',
        followersCountText: '',
        viewsCountText: '',
      }
    },
    methods: {
      setCountText(numArr:number[], targetArr:string[], textArr:string[][]) {
        for(let i = 0; i < numArr.length; i++) {
          let n:number = numArr[i] % 100;

          if(n >= 5 && n <= 20) {
            targetArr[i] = textArr[i][2];
          } else if(n === 1) {
            targetArr[i] = textArr[i][0]
          } else if(n >= 2 && n <= 4) {
            targetArr[i] = textArr[i][1]
          } else {
            targetArr[i] = textArr[i][2];
          }
        } 
        this.postsCountText = targetArr[0];
        this.followersCountText = targetArr[1];
        this.viewsCountText = targetArr[2]; 
      }
    },
    mounted() {
      this.setCountText([this.posts, this.followers, this.views], [this.postsCountText, 
        this.followersCountText, this.viewsCountText] ,[['Пост', 'Поста', 'Постов'], 
        ['Подписчик', 'Подписчика', 'Подписчиков'], ['Просмотр', 'Просмотра', 'Просмотров']]);

      setInterval(() => {
        this.userImage = store.state.userImage;
        this.userName = `${store.state.firstName} ${store.state.secondName}`;
        this.employment = store.state.employment;
        this.posts = store.state.posts;
        this.followers = store.state.followers;
        this.views = store.state.views;
      }, 250);
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
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    #Profile_topLine {
      position: absolute;
      width: 100%;
      height: 50px;
      background-image: url('@/assets/test_bgImage.png');
      background-size: cover;
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
        width: 100%;
        margin-top: 7px;
        color: #ffffff;
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        text-align: center;
      }
      p {
        margin-top: 7px;
        color: #747474;
        font-size: 14px;
        font-weight: 700;
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
      align-items: center;
      margin-top: 10px;
      width: 235px;
      height: 45px;
      div {
        font-family: 'Space Grotesk', sans-serif;
        text-align: center;
        p {
          color: #ffffff;
          font-size: 16px;
        }
        p:last-child {
          color: #747474;
          font-size: 12px;
        } 
      }
      div:nth-child(2) {
        width: 25%;
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