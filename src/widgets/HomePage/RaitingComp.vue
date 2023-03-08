<template>
  <section id="Rating">
    <h2>Рейтинг</h2>
    <div id="Rating_info">
      <div id="Rating_infoUser" v-for="user of users" :key="user.id">
        <p>{{ user.score }} points</p>
        <div class="Rating_infoUser_image">
          <img :src="user.userImage" :alt="user.name">
          <div class="Rating_infoUser_image_starStatus" v-if="user.starStatus"></div>
        </div>
        <span>
          <p>{{ user.name }}</p>
          <p>{{ user.userEmployment }}</p>
        </span>
      </div>
    </div>
    <router-link to="/users" id="Rating_moreUsers">Ещё {{ countOfUsersResults }} результатов</router-link>
  </section>
</template>

<script lang="ts"> 
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RaitingComp',
    data() {
      return {
        users: [
          {
            id: 0, 
            score: 15563,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: true,
            name: 'Leha Ovchinnikov',
            userEmployment: 'backend-разработчик'
          },
          {
            id: 1, 
            score: 27963,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: true,
            name: 'Vitalii Ogurtsov',
            userEmployment: 'frontend-разработчик'
          },
          {
            id: 2, 
            score: 9558,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: true,
            name: 'Karl Gustav',
            userEmployment: 'ML-разработчик'
          },
          {
            id: 3, 
            score: 13286,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            starStatus: false,
            name: 'Mr Holtstein',
            userEmployment: 'android-разработчик'
          }
        ],
        countOfUsersResults: 8673,
      }
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
          width: 45px;
          font-size: 10px;
          text-align: center;
        }
        .Rating_infoUser_image {
          position: relative;
          width: 40px;
          height: 40px;
          background-color: #747474;
          border-radius: 50px;
          img {
            width: 100%;
            height: 100%;
            color: #ffffff;
          }
          .Rating_infoUser_image_starStatus {
            position: absolute;
            right: 2px;
            bottom: 2px;
            width: 10px;
            height: 10px;
            background-color: #ffdd00;
            border-radius: 50px;
          }
        }
        span {
          display: flex;
          flex-wrap: wrap;
          margin-left: 10px;
          width: 60%;
          p {
            width: 100%;
            color: #ffffff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
            text-align: left;
          }
          p:last-child {
            color: #747474;
            font-size: 12px;
          }
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