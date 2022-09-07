<script setup lang='ts'>
import {RouterLink} from 'vue-router'
</script>

<template>
  <header :class='$style.header'>
    <RouterLink to='/'>
      <img :class='$style.logo' src='@/assets/img/logo.png'>
    </RouterLink>
    <nav :class='$style.links'>
      <RouterLink to='/teams'>Teams</RouterLink>
      <RouterLink to='/shop'>Shop</RouterLink>
      <RouterLink to='/tracks'>Tracks</RouterLink>
    </nav>
    <div :class='$style.links'>
      <a><img :class='$style.icon' src='@/assets/icons/cart.svg'></a>
      <a><img :class='$style.icon' src='@/assets/icons/soundcloud.svg'></a>
      <a><img :class='$style.icon' src='@/assets/icons/telegram.svg'></a>
    </div>
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
  .icon {
    width: 30px;
  }
</style>