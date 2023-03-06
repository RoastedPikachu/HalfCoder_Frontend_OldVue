<template>
  <section id="RecommendedCategories">
    <router-link :to="recomend.link" class="recomendation" v-for="recomend of recomends" :key="recomend.id">
      {{ recomend.categoryName }}
    </router-link>
    <button>
      <img src="@/assets/grey_arrow_icon.svg" alt="Стрелка">
    </button>
  </section>
</template>

<script lang="ts">  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RecommendedCategoriesComp',
  data() {
    return {
      recomends: [
        {
          id: 0, 
          categoryName: 'Python',
          link: '/python',
        }, 
        {
          id: 1,
          categoryName: 'JS',
          link: '/js',
        },
        {
          id: 2,
          categoryName: 'ML',
          link: '/machLearn',
        },
        {
          id: 3,
          categoryName: 'News',
          link: '/news',
        },
        {
          id: 4,
          categoryName: 'Java',
          link: '/java',
        },
        {
          id: 5,
          categoryName: 'Programming',
          link: '/programming',
        },
        {
          id: 6,
          categoryName: 'UI',
          link: '/userinterf',
        }, 
        {
          id: 7,
          categoryName: 'Business',
          link: '/business',
        },
        {
          id: 8,
          categoryName: 'UX',
          link: '/userexper',
        },
        {
          id: 9,
          categoryName: 'IoT',
          link: '/iot',
        },
        {
          id: 10,
          categoryName: 'Android',
          link: '/android',
        }
      ],
    }
  }
})
</script>

<style lang="scss" scoped>
  #RecommendedCategories {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
    margin-left: 20px;
    width: 100%;
    height: 30px;
    background-color: #141414;
    border: 2px solid #747474;
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