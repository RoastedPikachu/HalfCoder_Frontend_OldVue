<template>
  <section id="RecommendedCategories">
    <p class="recomendation" v-for="recomend of recomends" :key="recomend.id">
      {{ recomend.categoryName }}
    </p>
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
          categoryName: 'Python'
        }, 
        {
          id: 1,
          categoryName: 'JS'
        },
        {
          id: 2,
          categoryName: 'ML'
        },
        {
          id: 3,
          categoryName: 'News'
        },
        {
          id: 4,
          categoryName: 'Java'
        },
        {
          id: 5,
          categoryName: 'Programming'
        },
        {
          id: 6,
          categoryName: 'UI'
        }, 
        {
          id: 7,
          categoryName: 'Business'
        },
        {
          id: 8,
          categoryName: 'UX'
        },
        {
          id: 9,
          categoryName: 'IoT'
        },
        {
          id: 10,
          categoryName: 'Android'
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
    p {
      color: #747474;
      font-size: 16px;
      font-family: 'Space Grotesk', sans-serif;
      cursor: pointer;
    }
    button {
      margin-left: -12px;
      width: 16px;
      height: 18px;
      background-color: #141414;
      border: 0;
      cursor: pointer;
    }
  }
</style>