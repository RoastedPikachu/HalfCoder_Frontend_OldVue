<template>
  <HeaderComp/>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComp from '@/widgets/HeaderComp.vue';
import ProfileComp from '@/widgets/ProfileComp.vue';
import CompaniesComp from '@/widgets/CompaniesComp.vue';
import RecommendedCategoriesComp from '@/widgets/RecommendedCategoriesComp.vue';
import PostsComp from '@/widgets/PostsComp.vue';
import RaitingComp from '@/widgets/RaitingComp.vue';
import NewsComp from '@/widgets/NewsComp.vue';
import FooterComp from '@/widgets/FooterComp.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HeaderComp,
    ProfileComp,
    CompaniesComp,
    RecommendedCategoriesComp,
    PostsComp,
    RaitingComp,
    NewsComp,
    FooterComp
  }
})
</script>

<style lang="scss" scoped>
  #MainBlock {
    display: flex;
    font-weight: 700;
    #MainBlock_info {
      display: flex;
      flex-wrap: wrap;
      margin-left: 7.5%;
      margin-top: 15px;
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
      width: 308px;
      height: 627px;
    }
  }
</style>