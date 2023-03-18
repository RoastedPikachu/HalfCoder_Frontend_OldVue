<template>
  <HeaderComp :token="token"/>
  <section id="MainBlock">
    <aside id="MainBlock_info">
      <ProfileComp/>
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
  import HeaderComp from '@/widgets/shared/HeaderComp.vue';
  import ProfileComp from '@/widgets/HomePage/ProfileComp.vue';
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
        token: ''
      }
    },
    mounted() {
      this.token = document.cookie.slice(67);
    },
    components: {
      HeaderComp,
      ProfileComp,
      CompaniesComp,
      RecommendedCategoriesComp,
      PostsComp,
      RaitingComp,
      NewsComp,
      FooterComp,
      CookieComp
    }
  })
</script>

<style lang="scss" scoped>
  #MainBlock {
    display: flex;
    margin-top: 15px;
    width: 85%;
    padding: 0 7.5%;
    font-weight: 700;
    #MainBlock_info {
      display: flex;
      flex-wrap: wrap;
      width: 280px;
      height: 890px;
    }
    #MainBlock_child {
      display: flex;
      flex-wrap: wrap;
      width: 932px;
    }
    #MainBlock_asideRight {
      display: flex;
      flex-wrap: wrap;
      margin-top: 17px;
      margin-left: 20px;
      width: 307px;
      height: 627px;
    }
  }
</style>