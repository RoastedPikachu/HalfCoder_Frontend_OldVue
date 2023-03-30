<template>
  <HeaderComp/>
  <section id="mainBlock">
    <aside>
      <ProfileSignInComp/>
      <FooterComp/>
    </aside>
    <div id="MainInfoAboutEvents">
      <span id="MainInfoAboutEvents_Top">
        <h2>Мероприятия</h2>  
        <button>
          <i class="fa-solid fa-plus"></i>
          <p>Создать мероприятие</p>
        </button>
      </span>
      <span id="MainInfoAboutEvents_Nav">
        <p>Топ</p>
        <p>Локальные</p>
        <p>На этой неделе</p>
        <p>Онлайн</p>
        <p>Друзья</p>
        <p>Подписки</p>
      </span>
      <div id="MainInfoAboutEvents_container">
        <div class="mainInfoAboutEvents_eventBlock" v-for="event of events" :key="event.id">
          <img src="" alt="Изображение события">
          <div class="mainInfoAboutEvents_eventBlock_tag">
            <p>{{ event.mainTag }}</p>
          </div>
          <div class="mainInfoAboutEvents_eventBlock_text">
            <p>{{ event.title }}</p>
            <p>{{ event.date }}</p>
            <p>{{ event.place }}</p>
          </div>
          <span>
            <button>Интересно</button>
            <button>
              <svg width="17" height="18" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8332 15C13.0298 15 13.9998 14.0599 13.9998 12.9C13.9998 11.7402 13.0298 10.8 11.8332 10.8C10.6365 10.8 9.6665 11.7402 9.6665 12.9C9.6665 14.0599 10.6365 15 11.8332 15Z" stroke="#3D5AFF" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.8333 5.2C13.0299 5.2 14 4.25979 14 3.1C14 1.9402 13.0299 1 11.8333 1C10.6366 1 9.66663 1.9402 9.66663 3.1C9.66663 4.25979 10.6366 5.2 11.8333 5.2Z" stroke="#3D5AFF" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.16667 10.0999C4.36329 10.0999 5.33334 9.15973 5.33334 7.9999C5.33334 6.84007 4.36329 5.8999 3.16667 5.8999C1.97005 5.8999 1 6.84007 1 7.9999C1 9.15973 1.97005 10.0999 3.16667 10.0999Z" stroke="#3D5AFF" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0272 4.1499L4.97168 6.9499" stroke="#3D5AFF"/>
                <path d="M4.97168 9.05005L10.0272 11.85" stroke="#3D5AFF"/>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderComp from '@/widgets/shared/HeaderComp.vue';
  import ProfileSignInComp from '@/widgets/HomePage/ProfileSignInComp.vue';
  import FooterComp from '@/widgets/shared/FooterComp.vue';

  export default defineComponent({
    name: 'EventsPage',
    data() {
      return {
        events: [
          {
            id: 0,
            mainTag: 'Новые языки',
            title: 'Какие языки программирования появились недавно?',
            date: 'Понедельник, Август 30, в 9:30',
            place: 'Москва'
          },
          {
            id: 1,
            mainTag: 'Новые языки',
            title: 'Какие языки программирования появились недавно?',
            date: 'Понедельник, Август 30, в 9:30',
            place: 'Москва'
          },
          {
            id: 2,
            mainTag: 'Новые языки',
            title: 'Какие языки программирования появились недавно?',
            date: 'Понедельник, Август 30, в 9:30',
            place: 'Москва'
          },
          {
            id: 3,
            mainTag: 'Новые языки',
            title: 'Какие языки программирования появились недавно?',
            date: 'Понедельник, Август 30, в 9:30',
            place: 'Москва'
          },
          {
            id: 4,
            mainTag: 'Новые языки',
            title: 'Какие языки программирования появились недавно?',
            date: 'Понедельник, Август 30, в 9:30',
            place: 'Москва'
          },
          {
            id: 5,
            mainTag: 'Новые языки',
            title: 'Какие языки программирования появились недавно?',
            date: 'Понедельник, Август 30, в 9:30',
            place: 'Москва'
          }
        ]
      }
    },
    components: {
      HeaderComp,
      ProfileSignInComp,
      FooterComp
    }
  })
</script>

<style lang="scss" scoped>
  #mainBlock {
    display: flex;
    justify-content: space-between;
    padding: 0 7.5%;
    margin-top: 15px;
    width: 85%;
    aside {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 23.5%;
      height: 680px;
    }
    #MainInfoAboutEvents {
      padding: 2.5% 2.5%;
      width: 70%;
      height: 840px;
      background-color: #141414;
      border: 2px solid rgba(116, 116, 116, 0.5);
      border-radius: 5px;
      #MainInfoAboutEvents_Top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        h2 {
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
        }
        button {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 200px;
          height: 100%;
          background-color: rgba(61, 90, 255, 0.2);
          border: none;
          border-radius: 5px;
          transition: 500ms ease;
          cursor: pointer;
          i {
            color: #3d5aff;
            font-size: 16px;
          }
          p {
            color: #3d5aff;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Space Grotesk', sans-serif;
          }
        }
        button:hover {
          transform: translateY(5px);
        }
      }
      #MainInfoAboutEvents_Nav {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        width: 100%;
        height: 70px;
        border: 2px solid #747474;
        border-width: 0 0 2px;
        p {
          margin-left: 3%;
          height: 35px;
          color: #747474;
          font-size: 18px;
          font-weight: 700;
          font-family: 'Space Grotesk', sans-serif;
          text-align: left;
          transition: 500ms ease;
          cursor: pointer;
        }
        p:first-child {
          margin-left: 0;
        }
        p:hover {
          color: #3d5aff;
        }
      }
      #MainInfoAboutEvents_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        .mainInfoAboutEvents_eventBlock {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 20px;
          width: 31%;
          height: 325px;
          border: 2px solid rgba(116, 116, 116, 0.5);
          border-radius: 5px;
          img {
            width: 100%;
            height: 40%;
            border: 2px solid rgba(116, 116, 116, 0.5);
            border-width: 0 0 2px;
          }
          .mainInfoAboutEvents_eventBlock_tag {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 42.5%;
            left: 5%;
            width: 110px;
            height: 22.5px;
            background-color: #3d5aff;
            border-radius: 2.5px;
            color: #ffffff;
            font-size: 12px;
            font-family: 'Space Grotesk', sans-serif;
            cursor: pointer;
          }
          .mainInfoAboutEvents_eventBlock_text {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 5%;
            padding: 0 5%;
            height: 25%;
            p {
              width: 100%;
              color: #747474;
              font-size: 12px;
              font-weight: 600;
              font-family: 'Space Grotesk', sans-serif;
            }
            p:first-child {
              color: #ffffff;
              font-size: 14px;
              font-family: 'Inter', sans-serif;
            }
            p:nth-child(2) {
              margin-top: 3%;
            }
          }
          span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -2.5%;
            padding: 0 5%;
            width: 90%;
            height: 10%;
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              background-color: rgba(61, 90, 255, 0.2);
              border-radius: 5px;
              transition: 500ms ease;
              cursor: pointer;
            }
            button:first-child {
              width: 50%;
              background-color: rgba(61, 90, 255, 0.2);
              border: 1.5px solid #3d5aff;
              color: #3d5aff;
            }
            button:last-child {
              width: 14%;
              border: none;
            }
            button:hover {
              transform: translateY(2.5px);
            }
          }
        }
      }
    }
  }
</style>