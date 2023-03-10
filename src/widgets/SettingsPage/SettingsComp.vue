<template>
  <section id="MainBlock_Settings">
    <h2>Настройки аккаунта</h2>
    <form>
      <div class="mainBlock_Settings_InputsContainers">
        <div class="">
          <p>Имя</p>
          <input type="text">
        </div>
        <div>
          <p>Фамилия</p>
          <input type="text">
        </div>
        <div>
          <p>Доп. имя</p>
          <input type="text">
        </div>
      </div>
      <div class="mainBlock_Settings_InputsContainers">
        <div>
          <p>Имя пользователя</p>
          <input type="text">
        </div>
        <div>
          <p>Дата рождения</p>
          <input type="datetime-local">
        </div>
      </div>
      <div class="mainBlock_Settings_InputsContainers">
        <div>
          <p>Номер телефона</p>
          <input type="text">
        </div>
        <div>
          <p>Email</p>
          <input type="email">
        </div>
      </div>
      <div id="MainBlock_Settings_textareaContainer">
        <p>О себе</p>
        <textarea maxlength="300"></textarea>
        <p>Лимит символов: 300</p>
      </div>
      <button>Сохранить изменения</button>
    </form>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import flatpickr from "flatpickr";

  export default defineComponent({
    name: 'SettingsComp',
    mounted() {
      setTimeout(() => flatpickr("input[type=datetime-local]", {}), 500);
    }
  })
</script>

<style lang="scss" scoped>
  #MainBlock_Settings {
    margin-left: 20px;
    padding: 20px 30px;
    width: 720px;
    height: 490px;
    background-color: #141414;
    border: 2px solid #747474;
    border-radius: 5px;
    font-weight: 700;
    font-family: 'Space Grotesk', sans-serif;
    h2 {
      width: 205px;
      color: #ffffff;
      font-size: 20px;
      text-align: center;
    }
    form {
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;
      margin-top: 20px;
      width: 100%;
      height: 85%;
      color: #747474;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      .mainBlock_Settings_InputsContainers {
        display: flex;
        justify-content: space-between;
        width: 100%;
        div {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 49%;
          height: 70px;
          p {
            height: 5px;
          }
          input {
            margin-top: 5px;
            padding-left: 15px;
            width: 90%;
            height: 30px;
            background-color: #1e1e1e;
            border: 1.5px solid #747474;
            border-radius: 5px;
            color: #747474;
            outline: none;
          }
          input:last-child {
            width: 100%;
          }
        }
      }
      .mainBlock_Settings_InputsContainers:first-child {
        div {
          width: 32%;
        }
      }
      #MainBlock_Settings_textareaContainer {
        width: 100%;
        height: 190px;
        p:first-child {
          height: 25px;
        }
        textarea {
          padding-top: 10px;
          padding-left: 15px;
          width: 100%;
          height: 130px;
          background-color: #1e1e1e;
          border: 1.5px solid #747474;
          border-radius: 5px;
          color: #747474;
          font-family: 'Inter', sans-serif;
          outline: none;
          resize: none; 
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        height: 35px;
        background-color: #3d5aff;
        border: 0;
        border-radius: 5px;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        outline: none;
        cursor: pointer;
      }
    }
  }
</style>