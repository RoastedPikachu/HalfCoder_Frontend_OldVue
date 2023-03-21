<template>
  <section id="RecommendedCategories">
    <router-link :to="category.link" class="recomendation" v-for="category in categories.slice(0, 11)" :key="category.id">
      {{ category.title }}
    </router-link>
    <button>
      <img src="@/assets/grey_arrow_icon.svg" alt="Стрелка">
    </button>
  </section>
</template>

<script lang="ts">  
  import { defineComponent } from 'vue';
  import axios from 'axios';

  interface Category {
    id: number,
    title: string,
    link: string,
  }

  export default defineComponent({
    name: 'RecommendedCategoriesComp',
    data() {
      return {
        categories: [] as Category[],
      }
    },
    methods: {
      async getCategories() {
        const url = new URL('http://62.109.10.224:500/api/v1/article/category/popular/');

        const result = await axios.get(url.toString());

        this.categories = Object.values(result.data.categories);
      }
    },
    mounted() {
      this.getCategories();
    }
  })
</script>

<style lang="scss" scoped>
  #RecommendedCategories {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 20px;
    width: 100%;
    height: 30px;
    background-color: #141414;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    .recomendation {
      color: #747474;
      font-size: 16px;
      font-family: 'Space Grotesk', sans-serif;
      text-decoration: none;
      transition: 500ms ease;
      outline: none;
      cursor: pointer;
    }
    .recomendation:hover {
      color: #3d5aff;
    }
    button {
      margin-left: -12px;
      width: 16px;
      height: 18px;
      background-color: #141414;
      border: 0;
      outline: none;
      cursor: pointer;
    }
  }
</style>