<template>
  <section>
    <div id="Registration">
      <h1> <p>&lt;</p> HalfCoder <p>/></p> </h1>
      <form>
        <div class="registration_inputs">
          <p>Имя</p>
          <input type="text">
        </div>
        <div class="registration_inputs">
          <p>Фамилия</p>
          <input type="text">
        </div>
        <div class="registration_inputs">
          <p>Имя пользователя</p>
          <input type="text">
        </div>
        <div class="registration_inputs">
          <p>E-mail</p>
          <input type="text">
        </div>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RegistrationPage',
  })
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  #Registration {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 15px;
    width: 520px;
    height: 320px;
    background-color: #141414;
    border: 2px solid rgba(116, 116, 116, 0.5);
    border-radius: 5px;
    h1 {
      display: flex;
      color: #ffffff;
      font-size: 36px;
      font-family: 'Space Grotesk', sans-serif;
      p {
        color: #3d5aff;
      }
    }
    form {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 240px;
      .registration_inputs {
        width: 47.5%;
        p {
          height: 22.5px;
          color: #747474;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Space Grotesk', sans-serif;
        }
        input {
            padding-left: 10px;
            width: calc(100% - 10px);
            height: 30px;
            background-color: rgba(116, 116, 116, 0.2);
            border: 1.5px solid #747474;
            border-radius: 5px;
            color: #ffffff;
            outline: none;
        }
      }
      button {
        margin-left: calc(50% - 90px);
        width: 180px;
        height: 35px;
        background-color: #3d5aff;
        border: 0px;
        border-radius: 5px;
        color: #ffffff;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
      }
    }
  }
</style>