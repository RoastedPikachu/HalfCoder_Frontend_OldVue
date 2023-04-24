<template>
  <HeaderComp/>
  <section>
    <div>
      <p id="Error">error</p>
      <h1> <p>&lt;</p> 404 <p>/></p> </h1>
      <p id="ErrorRuDesc">Данная ошибка может возникать при неправильно введённой ссылке или страница была удалена.</p>
      <p id="ErrorEngDesc">This error may occur if the link is entered incorrectly or the page has been deleted</p>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, onMounted, watch } from 'vue';
  import HeaderComp from '@/widgets/shared/HeaderComp.vue';

  export default defineComponent({
    name: 'APIErrorPage',
    components: {
      HeaderComp
    }
  })
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    width: 75%;
    height: 600px;
    padding: 0 12.5%;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 70%;
      height: 350px;
      #Error {
        margin-top: 20px;
        margin-left: -5%;
        width: 95%;
        color: #ffffff;
        font-size: 40px;
        font-weight: 700;
        font-family: $SpaceGrotesk;
        text-align: center;
      }
      h1 {
        display: flex;
        justify-content: space-between;
        margin-top: -20px;
        width: 60%;
        color: #ffffff;
        font-size: 126px;
        font-family: $SpaceGrotesk;
        text-align: center;
        transition: 400ms ease;
        p {
          color: #3d5aff;
          text-align: center;
          transition: 400ms ease;
        }
      }
      #ErrorRuDesc {
        margin-top: 20px;
        width: 100%;
        color: #747474;
        font-size: 18px;
        font-weight: 700;
        font-family: $SpaceGrotesk; 
        text-align: center;
      }
      #ErrorEngDesc {
        margin-top: 15px;
        width: 100%;
        color: #747474;
        font-size: 18px;
        font-weight: 700;
        font-family: $SpaceGrotesk; 
        text-align: center;
      }
    }
  }
</style>