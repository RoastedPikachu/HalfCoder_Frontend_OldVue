<template>
  <section id="News">
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

  export default defineComponent({
    name: 'NewsComp',
    data() {
      return {
        news: [
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
        ]
      }
    }
  })
</script>

<style lang="scss" scoped>
  #News {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 17px;
    width: 100%;
    height: 300px;
    background-color: #141414;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    font-family: 'Space Grotesk', sans-serif;
    h2 {
      margin-top: 12px;
      color: #ffffff;
      font-size: 18px;
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
          color: #a5a5a5;
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
        }
      }
    }
  }
</style>