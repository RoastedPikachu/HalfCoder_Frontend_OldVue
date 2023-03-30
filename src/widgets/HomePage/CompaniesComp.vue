<template>
  <section id="Companies">
    <h2>Популярные компании</h2>
    <div id="Companies_info">
      <div class="companies_infoCompany" v-for="company of companies.slice(0, 4)" :key="company.id" v-show="isLoaded">
        <img :src="company.photo" :alt="company.name">
        <span>
          <p>{{ company.name }}</p>
          <p>{{ company.description }}</p>
        </span>
        <button>
          <i class="fa-solid fa-eye"></i>
        </button>
      </div>
      <div class="companies_infoLoadingCompany" v-for="loadingCompany of loadingCompanies" :key="loadingCompany.id" v-show="!isLoaded">
        <div></div>
        <span>
          <p></p>
          <p></p>
        </span>
        <button>
          <i class="fa-solid fa-eye"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang=ts>
  import { defineComponent } from 'vue';
  import axios from 'axios';

  interface Ambassador {
    username: string,
    first_name: string,
    last_name: string
  }

  interface Track {
    title: string
  }

  interface Company {
    id: number,
    name: string,
    photo: string,
    ambassador: Ambassador,
    description: string,
    views: number,
    tracks: Track,
    reg_date: string,
    created_date: null,
    country: string,
    authenticity: true,
    website: null,
  }

  export default defineComponent({
    name: 'CompaniesComp',
    data() {
      return {
        isLoaded: false,
        companies: [] as Company[],
        loadingCompanies: [
          {
            id: 0
          },
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 3
          }
        ]
      }
    },
    methods: {
      async getCompanies() {
        const url = new URL('http://62.109.10.224:500/api/v1/company/popular/');

        const result = await axios.get(url.toString());

        this.companies = Object.values(result.data);

        if(this.companies.length) {
          this.isLoaded = true;
        }
      }
    },
    mounted() {
      this.getCompanies();
    }
  })
</script>

<style lang="scss" scoped>
  #Companies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
    height: 290px;
    background-color: #141414;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    font-family: 'Space Grotesk', sans-serif;
    h2 {
      margin-top: 12px;
      color: #ffffff;
      font-size: 18px;
    }
    #Companies_info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 17px;
      width: 80%;
      min-height: 240px;
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        span {
          display: flex;
          flex-wrap: wrap;
          margin-left: 10px;
          width: 85%;
          p {
            width: 85%;
            height: 12.5px;
          }
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 42.5px;
          height: 32.5px;
          background-color: #1e1e1e;
          border: 0;
          border-radius: 50px;
          outline: none;
          cursor: pointer;
          i {
            color: #747474;
            font-size: 18px;
            transition: 500ms ease;
          }
          i:hover {
            color: #3d5aff
          }
        }
      }
      .companies_infoCompany {
        img {
          background-color: #ffffff;
        }
        span {
          p {
            color: #ffffff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
          }
          p:last-child {
            margin-top: 7.5px;
            color: #747474;
            font-size: 12px;
          }
        }
      }
      .companies_infoLoadingCompany {
        div {
          width: 57.5px;
          height: 40px;
          background-color: rgba(116, 116, 116, 0.5);
          border-radius: 5px;
        }
        span {
          p {
            width: 60%;
            height: 12.5px;
            background-color: rgba(116, 116, 116, 0.5);
            border-radius: 2.5px;
          }
          p:last-child {
            margin-top: 7.5px;
            width: 80%;
          }
        }
      }
    }
  }
</style>