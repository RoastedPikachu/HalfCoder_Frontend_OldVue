<template>
  <section id="MainBlock_childPosts">
    <div class="mainBlock_childPosts_info" :class="{ whitePostsTheme: !isDarkTheme}" v-for="post of posts" :key="post.id">
      <div class="mainBlock_childPosts_topInfo">
        <div class="mainBlock_childPosts_userInfo">
          <img :src="post.userImage" :alt="post.userName">
          <span>
            <p>{{ post.userName }}</p>
            <p>{{ post.userSpeciality }}</p>
          </span>
        </div>
        <div class="mainBlock_childPosts_button">
          <button @click="changeModalActionsActive(post)">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ModalPostActions :modalActionsActive="post.modalActionsActive"/>
        </div>
      </div>
      <p>{{ post.text }}</p>
      <img :src="post.postImage" :alt="post.text">
      <div class="mainBlock_childPosts_activityInfo">
        <span>
          <i class="fa-solid fa-heart"></i>
          <p>{{ post.likes }}</p>
          <i class="fa-solid fa-share"></i>
          <p>{{ post.reposts }}</p>
        </span>
        <span>
          <i class="fa-solid fa-eye"></i>
          <p>{{ post.views }}</p>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted } from 'vue';
  import store from '@/store/index';
  import ModalPostActions from '@/widgets/features/ModalPostActions.vue';

  interface Post {
    id: number,
    userImage: string,
    userName: string,
    userSpeciality: string,
    text: string,
    postImage: string,
    likes: number,
    reposts: number,
    views: number,
    modalActionsActive: boolean
  }

  export default defineComponent({
    name: 'PostsComp',
    data() {
      return {
        
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const activeId = ref(0);
      const posts = ref([
          {
            id: 0,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            userName: 'Lorem Ipsum',
            userSpeciality: 'Frontend developer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum accumsan mauris, et pharetra nibh rhoncus in. Morbi',
            postImage: 'https://sportishka.com/uploads/posts/2022-09/1662113882_3-sportishka-com-p-krasivaya-priroda-gori-krasivo-3.jpg',
            likes: 15,
            reposts: 25, 
            views: 54,
            modalActionsActive: false,
          },
          {
            id: 1,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            userName: 'Lorem Ipsum',
            userSpeciality: 'Frontend developer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum accumsan mauris, et pharetra nibh rhoncus in. Morbi et sodales.',
            postImage: 'https://sportishka.com/uploads/posts/2022-09/1662113882_3-sportishka-com-p-krasivaya-priroda-gori-krasivo-3.jpg',
            likes: 15,
            reposts: 25, 
            views: 54,
            modalActionsActive: false,
          },
          {
            id: 2,
            userImage: 'https://avatanplus.com/files/resources/original/5ebf6e0aa0d9c1721bc5d9a3.png',
            userName: 'Lorem Ipsum',
            userSpeciality: 'Frontend developer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum accumsan mauris, et pharetra nibh rhoncus in. Morbi et sodales.',
            postImage: 'https://sportishka.com/uploads/posts/2022-09/1662113882_3-sportishka-com-p-krasivaya-priroda-gori-krasivo-3.jpg',
            likes: 15,
            reposts: 25, 
            views: 54,
            modalActionsActive: false,
          }
        ]);

      const changeModalActionsActive = (post:Post):void => {
        post.modalActionsActive = !post.modalActionsActive;
        activeId.value = post.id;

        posts.value.forEach((item) => {
          if(item.id !== activeId.value) {
            item.modalActionsActive = false;
          }
        })
      }

      onMounted(() => {
        window.addEventListener('click', event => {
          if(event.target !== null) {
            const target = event.target as HTMLElement;

            if(!target.closest('.mainBlock_childPosts_button')) {
              let currentPost = posts.value.find(item => item.id === activeId.value);
              if(currentPost !== undefined) {
                currentPost.modalActionsActive = false;
              }
            }
          }
        });

        setInterval(() => {
          isDarkTheme.value = store.state.isDarkTheme;
        }, 150);
      });

      return {
        isDarkTheme,
        activeId,
        posts,
        changeModalActionsActive
      }
    },
    components: {
      ModalPostActions
    }
  })
</script>

<style lang="scss" scoped>

  #MainBlock_childPosts {
    width: auto;
    height: auto;
    .mainBlock_childPosts_info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 17px;
      margin-left: 20px;
      width: 580px;
      min-height: 440px;
      height: auto;
      background-color: #141414;
      border: 2px solid rgba(116, 116, 116, 0.5);
      border-radius: 5px;
      color: #747474;
      font-family: 'Space Grotesk', sans-serif;
      transition: 500ms ease;
      overflow: hidden;
      .mainBlock_childPosts_topInfo {
        display: flex;
        margin-top: 28px;
        width: 90%;
        height: 40px;
        .mainBlock_childPosts_userInfo {
          display: flex;
          align-items: center;
          width: 100%;
          img {
            width: 40px;
            height: 40px;
            background-color: #747474;
            border-radius: 50px;
          }
          span {
            margin-left: 10px;
            width: 100%;
            p {
              width: 80%;
            }
            p:first-child {
              color: #ffffff;
              font-size: 14px;
              font-family: 'Inter', sans-serif;
              transition: 500ms ease;
            }
            p:last-child {
              font-size: 12px;
            }
          }
        }
        .mainBlock_childPosts_button {
          position: relative;
          width: 20px;
          height: 20px;
          button {
            align-self: flex-start;
            background: none;
            border: 0;
            color: #747474;
            font-size: 24px;
            outline: none;
            transition: 500ms ease;
            cursor: pointer;
          }
          button:hover {
            color: #3d5aff;
          }
        }
      }
      p {
        width: 90%;
      }
      img {
        width: 90%;
        height: 250px;
        border-radius: 5px;
      }
      .mainBlock_childPosts_activityInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 40px;
        span {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 25%;
          i {
            color: #747474;
            font-size: 24px;
            transition: 500ms ease;
            cursor: pointer;
          }
          i:hover {
            color: #3d5aff;
          }
          p {
            margin-left: 7.5px;
            font-size: 14px;
          }
        }
        span:last-child {
          width: 10%;
        }
      }
    }
  }

  #MainBlock_childPosts {
    .whitePostsTheme {
    background-color: #ffffff;
      .mainBlock_childPosts_topInfo {
        .mainBlock_childPosts_userInfo {
          span {
            p:first-child {
              color: #1e1e1e;
            }
          }
        }
      }
    }
  }
</style>