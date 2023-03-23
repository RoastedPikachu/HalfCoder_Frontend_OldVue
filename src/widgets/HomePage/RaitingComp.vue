<template>
  <section id="Rating">
    <h2>Рейтинг</h2>
    <div id="Rating_info">
      <div id="Rating_infoUser" v-for="elem of elements.slice(0, 4)" :key="elem.id">
        <p>{{ elem.rating }} points</p>
        <ItemBrieflyInfoComp  
          :name="elem.username"
          :image="elem.photo"
          :employment="elem.profile.work"
        />
      </div>
    </div>
    <router-link to="/users" id="Rating_moreUsers">Ещё {{ countOfUsersResults }} {{countOfResultsText}}</router-link>
  </section>
</template>

<script lang="ts"> 
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import ItemBrieflyInfoComp from '@/widgets/shared/ItemBrieflyInfoComp.vue';

  interface Profile {
    sex: null,
    work: null,
    birthday: null,
    phone: null,
    country: null,
    hobby: null,
    education: null,
    website: null,
    quote: null
  }

  interface Advertisement {
    count: number,
    all: object
  }

  interface User {
    id: number,
    username: string,
    email: string,
    last_login: null,
    first_name: string,
    last_name: string,
    date_joined: string,
    trustFactor: number,
    is_authenticity: boolean,
    profile_id: number,
    photo: string,
    is_staff: boolean,
    profile: Profile,
    advertisement: Advertisement,
    subs_to_user: number,
    post_from_user: number,
    views_to_user: number,
    user_rating_per_month: number,
    user_rating_per_week: number,
    rating: number
  }

  export default defineComponent({
    name: 'RaitingComp',
    data() {
      return {  
        elements: [] as User[],
        countOfUsersResults: 0,
        countOfResultsText: ''
      }
    },
    methods: {
      async getElems() {
        const url = new URL('http://62.109.10.224:500/api/v1/rating/popular/');

        const result = await axios.get(url.toString());

        this.elements = Object.values(result.data);
        this.countOfUsersResults = this.elements.length;
        this.setCountText(this.countOfUsersResults, ['результат', 'результата', 'результатов']);
      },
      setCountText(num:number, arr:string[]) {
        const n:number = num % 100;
        
        if(n >= 5 && n <= 20) {
          this.countOfResultsText = arr[2];
        } else if(n === 1) {
          this.countOfResultsText = arr[0];
        } else if(n >= 2 && n <= 4) {
          this.countOfResultsText = arr[1];
        } else {
          this.countOfResultsText = arr[2];
        }
      }
    },
    mounted() {
      this.getElems();
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
    border: 2px solid rgba(116, 116, 116, 0.5);
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