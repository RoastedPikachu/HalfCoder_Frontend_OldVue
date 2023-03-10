<template>
  <section id="Companies">
    <h2>Популярные компании</h2>
    <div id="Companies_info">
      <div class="Companies_infoCompany" v-for="company of companies" :key="company.id">
        <img :src="company.companyImage" :alt="company.companyName">
        <span>
          <p>{{ company.companyName }}</p>
          <p>{{ company.companyEmployment }}</p>
        </span>
        <button>
          <img src="@/assets/eye_icon.svg" alt="Иконка глаза">
        </button>
      </div>
    </div>
  </section>
</template>

<script lang=ts>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CompaniesComp',
    data() {
      return {
        companies: [
          {
            id: 0,
            companyImage: 'https://ucarecdn.com/0eddfa5e-15cc-493e-8fbf-e0b90440a362/',
            companyName: 'Selectel',
            companyEmployment: 'IT-инфраструктура'
          },
          {
            id: 1,
            companyImage: 'https://assets.stickpng.com/images/623b00a027d4946aceae2fdb.png',
            companyName: 'Yandex',
            companyEmployment: 'IT-продукты'
          },
          {
            id: 2,
            companyImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1024px-VK_Compact_Logo_%282021-present%29.svg.png',
            companyName: 'VK',
            companyEmployment: 'Messenger'
          },
          {
            id: 3,
            companyImage: 'https://www.sostav.ru/images/news/2019/05/08/wwh5l7ed.png',
            companyName: 'Alpha-bank',
            companyEmployment: 'FinTech'
          }
        ]
      }
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
      .Companies_infoCompany {
        display: flex;
        width: 100%;
        height: 40px;
        cursor: pointer;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50px;
          background-color: #ffffff;
        }
        span {
          display: flex;
          flex-wrap: wrap;
          margin-left: 10px;
          width: 85%;
          p {
            width: 85%;
            color: #ffffff;
            font-size: 14px;
            font-family: 'Inter', sans-serif;
          }
          p:last-child {
            color: #747474;
            font-size: 12px;
          }
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 37.5px;
          height: 30px;
          background-color: #1e1e1e;
          border: 0;
          border-radius: 50px;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
            background-color: #1e1e1e;
          }
        }
      }
    }
  }
</style>