<template>
  <span>
    <img src="@/assets/support_icon.svg" alt="Тех поддержка">
    <p>Support</p>
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SupportLinkComp'
  })
</script>

<style lang="scss" scoped>
  span {
    display: flex;
    align-items: flex-end;
    height: 22.5px;
    cursor: pointer;
    img {
      width: 25px;
      height: 100%;
    }
    p {
      margin-left: 5px;
      color: #ffffff;
      font-size: 20px;
      font-weight: 600;
      transition: 500ms ease;
    }
    p:hover {
      color: #3d5aff;
    }
  }
</style>