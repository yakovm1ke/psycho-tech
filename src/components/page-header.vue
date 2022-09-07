<script setup lang='ts'>
import {RouterLink} from 'vue-router'
</script>

<template>
  <header :class='$style.header'>
    <RouterLink to='/'>
      <img :class='$style.logo' src='@/assets/img/logo.png'>
    </RouterLink>
    <nav>
      <ul :class='$style.links'>
        <RouterLink to='/teams'>Teams</RouterLink>
        <RouterLink to='/shop'>Shop</RouterLink>
        <RouterLink to='/tracks'>Tracks</RouterLink>
      </ul>
    </nav>
    <ul :class='$style.links'>
      <a>Cart</a>
      <a>SoundCloud</a>
      <a>Telegram</a>
    </ul>
  </header>
</template>

<style module>
  .header {
    box-sizing: border-box;
    padding: 44px 80px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 160px;
  }
  .links {
    display: flex;
    justify-content: center;
    gap: 60px;
  }
  .activeLink {
    background: red;
  }
</style>