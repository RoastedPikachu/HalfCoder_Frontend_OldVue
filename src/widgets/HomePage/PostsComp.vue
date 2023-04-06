<template>
  <section id="MainBlock_childPosts">
    <div class="mainBlock_childPosts_info" :class="{ whitePostsTheme: !isDarkTheme}" v-for="post of posts" :key="post.id">
      <div class="mainBlock_childPosts_topInfo">
        <div class="mainBlock_childPosts_userInfo_loading" v-show="!isLoaded">
          <ItemBrieflyInfoCompLoading/>
        </div>

        <div class="mainBlock_childPosts_userInfo" v-show="isLoaded">
          <ItemBrieflyInfoComp
            :name="`${post.author.first_name} ${post.author.last_name}`"
            :image="post.author.photo"
            :employment="post.author.profile.work"
          />
        </div>

        <div class="mainBlock_childPosts_button">
          <button @click="changeModalActionsActive(post)">
            <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ModalPostActions :modalActionsActive="post.modal_actions_active"/>
        </div>
      </div>

      <span class="postText_loading" v-show="!isLoaded">
        <p></p>
        <p></p>
      </span>
      <p v-show="isLoaded">{{ post.title }}</p>

      <div class="postImage_loading" v-show="!isLoaded"></div>
      <img :src="post.photo" :alt="post.title" v-show="isLoaded">

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
  import axios from 'axios';
  import ModalPostActions from '@/widgets/features/ModalPostActions.vue';
  import ItemBrieflyInfoComp from '@/widgets/shared/ItemBrieflyInfoComp.vue';
  import ItemBrieflyInfoCompLoading from '@/widgets/shared/ItemBrieflyInfoCompLoading.vue';

  // Дочерние интерфейсы для поста

  interface Profile {
    birthday: string,
    country: string,
    education: string,
    hobby: string,
    phone: string,
    quote: string,
    sex: string,
    website: string,
    work: string,
  }

  interface Author {
    type: string,
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    photo: string
    link: string
    profile: Profile
  } 

  // Сам интерфейс пост

  interface Post {
    id: number,
    title: string,
    body: {
      text: string
    },
    author: Author,
    views: number,
    category: string,
    tags: object,
    likes: number,
    reposts: number,
    link: string,
    date_published: string,
    time_to_read: number,
    photo: string,
    modal_actions_active: boolean
  } 

  export default defineComponent({
    name: 'PostsComp',
    data() {
      return {
        
      }
    },
    setup() {
      const isDarkTheme = ref(store.state.isDarkTheme);
      const isLoaded = ref(false);
      const activeId = ref(0);
      const posts = ref([
        {
          id: 0,
          title: '',
          body: {
            text: ''
          },
          author: {
            type: '',
            id: 0,
            username: '',
            first_name: '',
            last_name: '',
            photo: '',
            link: '',
            profile: {
              birthday: '',
              country: '',
              education: '',
              hobby: '',
              phone: '',
              quote: '',
              sex: '',
              website: '',
              work: '',
            }
          },
          views: 0,
          category: '',
          tags: {},
          likes: 0,
          reposts: 0,
          link: '',
          date_published: '',
          time_to_read: '',
          photo: '',
          modal_actions_active: false,
        },
        {
          id: 1,
          title: '',
          body: {
            text: ''
          },
          author: {
            type: '',
            id: 0,
            username: '',
            first_name: '',
            last_name: '',
            photo: '',
            link: '',
            profile: {
              birthday: '',
              country: '',
              education: '',
              hobby: '',
              phone: '',
              quote: '',
              sex: '',
              website: '',
              work: '',
            }
          },
          views: 0,
          category: '',
          tags: {},
          likes: 0,
          reposts: 0,
          link: '',
          date_published: 0,
          time_to_read: 0,
          photo: '',
          modal_actions_active: false,
        }
      ]);
      const userName = ref('');

      const changeModalActionsActive = (post:Post):void => {
        post.modal_actions_active = !post.modal_actions_active;
        activeId.value = post.id;

        posts.value.forEach((item) => {
          if(item.id !== activeId.value) {
            item.modal_actions_active = false;
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
                currentPost.modal_actions_active = false;
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
        isLoaded,
        activeId,
        posts,
        changeModalActionsActive,
        userName
      }
    },
    methods: {
      async getPosts() {
        const url = new URL('http://62.109.10.224:500/api/v1/article/recommended/');

        const token = document.cookie.slice(67, 206);

        const result = await axios.post(url.toString(), { token: token }, {
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        });

        this.posts = (Object.values(result.data));

        if(result) {
          this.isLoaded = true;
        }
      }
    },
    mounted() {
      this.getPosts();
    },
    components: {
      ModalPostActions,
      ItemBrieflyInfoComp,
      ItemBrieflyInfoCompLoading
    }
  })
</script>

<style lang="scss" scoped>

  #MainBlock_childPosts {
    width: 65%;
    height: auto;
    .mainBlock_childPosts_info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 17px;
      margin-left: 3.5%;
      padding: 0 2.5%;
      width: 95%;
      min-height: 440px;
      height: auto;
      background-color: #141414;
      border: 2px solid rgba(116, 116, 116, 0.5);
      border-radius: 5px;
      color: #747474;
      font-family: 'Space Grotesk', sans-serif;
      transition: 400ms ease;
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
        }
        .mainBlock_childPosts_userInfo_loading {
          display: flex;
          align-items: center;
          width: 100%;
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
            transition: 400ms ease;
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
      .postText_loading {
        width: 90%;
        p {
          height: 12.5px;
          background-color: rgba(116, 116, 116, 0.5);
          border-radius: 2.5px;
        }
        p:last-child {
          width: 75%;
          margin-top: 7.5px;
        }
      }
      img {
        width: 90%;
        height: 250px;
        border-radius: 5px;
      }
      .postImage_loading {
        width: 90%;
        height: 250px;
        background-color: rgba(116, 116, 116, 0.5);
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
            transition: 400ms ease;
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
    background-color: rgba(116, 116, 116, 0.05);
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