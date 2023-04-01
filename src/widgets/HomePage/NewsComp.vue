<template>
  <section id="News" :class="{ whiteNewsTheme: !isDarkTheme }">
    <h2>Новости</h2>
    <div id="News_info">
      <div class="News_infoItem" v-for="item of news" :key="item.id">
        <a :href="item.link">{{ item.description }}</a>
        <p>{{ item.appearanceTime }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';  
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';

  export default defineComponent({
    name: 'NewsComp',
    data() {
      return {
        
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const news = ref([
          {
            id: 0,
            link: '',
            description: 'Яндекс выложил код счётчика Метрики в opensource',
            appearanceTime: '3 часа назад'
          },
          {
            id: 1,
            link: '',
            description: 'Яндекс выложил код счётчика Метрики в opensource',
            appearanceTime: '2 часа назад'
          },
          {
            id: 2,
            link: '',
            description: 'Яндекс выложил код счётчика Метрики в opensource',
            appearanceTime: '4 часа назад'
          },
          {
            id: 3,
            description: 'Яндекс выложил код счётчика Метрики в opensource',
            appearanceTime: '5 часов назад'
          }
        ]);

      onMounted(() => {
        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
      })

      return {
        isDarkTheme,
        news
      }
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
    transition: 500ms ease;
    h2 {
      margin-top: 12px;
      font-size: 18px;
      transition: 500ms ease;
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
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          text-decoration: none;
          transition: 500ms ease;
          outline: none;
        }
        a:hover {
          color: #ffffff;
        }
        p:last-child {
          color: #747474;
          font-size: 12px;
          transition: 500ms ease;
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
      }
    }
  }
</style>