<template>
  <section id="News" :class="{ whiteNewsTheme: !isDarkTheme }">
    <h2>Новости</h2>
    <div id="News_info">
      <div class="News_infoItem" v-for="item of news" :key="item.id">
        <a :href="item.link">{{ item.title }}</a>
        <p>{{ item.ago }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';  
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';
  import axios from 'axios';

  // Дочерние интерфейсы объекта новости

  interface From_user {
    username: string,
    first_name: string,
    last_name: string,
    link: string
  }

  interface Category {
    title: string,
    views: number,
    link: string
  }

  interface Body {
    text: string
  } 

  // Интерфейс новостей

  interface News {
    title: string,
    link: string,
    views: number,
    from_user: From_user,
    category: Category,
    body: Body,
    photo: string,
    ago: string,
  }

  export default defineComponent({
    name: 'NewsComp',
    data() {
      return {
        
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const news = ref([] as News[]);

      onMounted(() => {
        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
      })
    
      return {
        isDarkTheme,
        news
      }
    },
    methods: {
      async getNews() {
        const url = new URL('http://62.109.10.224:500/api/v1/news/latest/');

        const result = await axios.get(url.toString());

        this.news = Object.values(result.data);
      }
    },
    mounted() {
      this.getNews();
    }
  })
</script>

<style lang="scss" scoped>
  section {
    background-color: #141414;
    h2 {
      color: #ffffff;
    }
    #News_info {
      .News_infoItem {
        a {
          color: #a5a5a5;
        }
        a:hover {
          color: #ffffff;
        }
      }
    }
  }

  #News {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 17px;
    width: 100%;
    height: 300px;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    font-family: 'Space Grotesk', sans-serif;
    transition: 400ms ease;
    h2 {
      margin-top: 12px;
      font-size: 18px;
      transition: 400ms ease;
    }
    #News_info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 10px;
      width: 80%;
      min-height: 250px;
      .News_infoItem {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: 45px; 
        cursor: pointer;
        a {
          width: 100%;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          transition: 400ms ease;
          outline: none;
        }
        p {
          width: 100%;
          color: #747474;
          font-size: 12px;
          transition: 400ms ease;
        }
      }
    }
  }

  .whiteNewsTheme {
    background-color: #ffffff;
    h2 {
      color: #1e1e1e;
    }
    #News_info {
      .News_infoItem {
        a {
          color: #747474;
        }
        a:hover {
          color: #1e1e1e;
        }
      }
    }
  }
</style>