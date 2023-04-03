<template>
  <HeaderComp :token="token"/>
  <section id="MainBlock">
    <aside id="MainBlock_info">
      <ProfileSignInComp v-if="isSignIn"/>
      <ProfileNotSignInComp v-if="!isSignIn"/>
      <CompaniesComp/>
    </aside>
    <section id="MainBlock_child">
      <RecommendedCategoriesComp/> 
      <PostsComp/>
      <aside id="MainBlock_asideRight">
        <RaitingComp/>
        <NewsComp/>
        <FooterComp/>
      </aside>
    </section>
  </section>
  <CookieComp/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import store from '@/store';
  import HeaderComp from '@/widgets/shared/HeaderComp.vue';
  import ProfileSignInComp from '@/widgets/HomePage/ProfileSignInComp.vue';
  import ProfileNotSignInComp from '@/widgets/HomePage/ProfileNotSignInComp.vue';
  import CompaniesComp from '@/widgets/HomePage/CompaniesComp.vue';
  import RecommendedCategoriesComp from '@/widgets/HomePage/RecommendedCategoriesComp.vue';
  import PostsComp from '@/widgets/HomePage/PostsComp.vue';
  import RaitingComp from '@/widgets/HomePage/RaitingComp.vue';
  import NewsComp from '@/widgets/HomePage/NewsComp.vue';
  import FooterComp from '@/widgets/shared/FooterComp.vue';
  import CookieComp from '@/widgets/shared/CookieComp.vue';

  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        token: '',
        isSignIn: false
      }
    },
    mounted() {
      this.token = document.cookie.slice(67);
      this.isSignIn = store.state.isSignIn;
    },
    components: {
      HeaderComp,
      ProfileSignInComp,
      ProfileNotSignInComp,
      CompaniesComp,
      RecommendedCategoriesComp,
      PostsComp,
      RaitingComp,
      NewsComp,
      FooterComp,
      CookieComp
    },
  })
</script>

<style lang="scss" scoped>
  #MainBlock {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    width: 85%;
    padding: 0 7.5%;
    font-weight: 700;
    #MainBlock_info {
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 890px;
    }
    #MainBlock_child {
      display: flex;
      flex-wrap: wrap;
      width: 99%;
      #MainBlock_asideRight {
        display: flex;
        flex-wrap: wrap;
        margin-top: 17px;
        margin-left: 4.5%;  
        width: 30%;
        height: 627px;
      }
    }
  }
</style>