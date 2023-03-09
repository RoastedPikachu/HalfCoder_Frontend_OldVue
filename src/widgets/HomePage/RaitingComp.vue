<template>
  <section id="Rating">
    <h2>Рейтинг</h2>
    <div id="Rating_info">
      <div id="Rating_infoUser" v-for="elem of elements" :key="elem.id">
        <p>{{ elem.score }} points</p>
        <ItemBrieflyInfoComp  
          :name="elem.name"
          :image="elem.image"
          :employment="elem.employment"
          :starStatus="elem.starStatus"
        />
      </div>
    </div>
    <router-link to="/users" id="Rating_moreUsers">Ещё {{ countOfUsersResults }} результатов</router-link>
  </section>
</template>

<script lang="ts"> 
  import { defineComponent } from 'vue';
  import ItemBrieflyInfoComp from '@/widgets/shared/ItemBrieflyInfoComp.vue';

  export default defineComponent({
    name: 'RaitingComp',
    data() {
      return {
        elements: [
          {
            id: 0, 
            score: 15563,
            image: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: true,
            name: 'Leha Ovchinnikov',
            employment: 'backend-разработчик'
          },
          {
            id: 1, 
            score: 27963,
            image: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: true,
            name: 'Vitalii Ogurtsov',
            employment: 'frontend-разработчик'
          },
          {
            id: 2, 
            score: 9558,
            image: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: true,
            name: 'Karl Gustav',
            employment: 'ML-разработчик'
          },
          {
            id: 3, 
            score: 13286,
            image: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: false,
            name: 'Mr Holtstein',
            employment: 'android-разработчик'
          }
        ],
        countOfUsersResults: 8673,
      }
    },
    components: {
      ItemBrieflyInfoComp
    }
  })
</script>

<style lang="scss" scoped>
  #Rating {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 330px;
    background-color: #141414;
    border: 2px solid #747474;
    border-radius: 5px;
    color: #747474; 
    font-family: 'Space Grotesk', sans-serif;
    h2 {
      margin-top: 12px; 
      width: 100%;
      color: #ffffff;
      font-size: 18px;
      text-align: center;
    }
    #Rating_info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 10px;
      width: 80%;
      min-height: 250px;
      #Rating_infoUser {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        cursor: pointer;
        p {
          padding-right: 5px;
          width: 45px;
          font-size: 10px;
          text-align: center;
        }
      }
    }
    #Rating_moreUsers {
      height: 30px;
      color: #747474;
      font-size: 12px;
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      transition: 500ms ease;
      outline: none;
      cursor: pointer;
    }
    #Rating_moreUsers:hover {
      color: #3d5aff;
    }
  }
</style>