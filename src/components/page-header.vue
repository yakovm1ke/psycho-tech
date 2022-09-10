<script setup lang='ts'>
import {RouterLink} from 'vue-router'
</script>

<template>
  <header :class='$style.header'>
    <RouterLink to='/'>
      <img :class='$style.logo' src='@/assets/img/logo.png'>
    </RouterLink>
    <nav :class="[$style.links, $style.navigation]">
      <RouterLink to='/team' :active-class='$style.activeLink'>Команда</RouterLink>
      <!-- <RouterLink to='/shop' :active-class='$style.activeLink'>Магазин</RouterLink> -->
      <RouterLink to='/tracks' :active-class='$style.activeLink'>Треки</RouterLink>
    </nav>
    <div :class='$style.links'>
      <!-- <RouterLink to='/cart' :class='$style.iconWrapper'>
        <img :class='$style.icon' src='@/assets/icons/cart.svg'>
      </RouterLink> -->
      <a
        :class='$style.iconWrapper'
        href='https://soundcloud.com/psycho_tech'
        target='_blank'
      >
        <img :class='$style.icon' src='@/assets/icons/soundcloud.svg'>
      </a>
      <a
        :class='[$style.iconWrapper, $style.telegramIcon]'
        href='https://t.me/psychotecha'
        target='_blank'
      >
        <img :class='$style.icon' src='@/assets/icons/telegram.svg'>
      </a>
    </div>
  </header>
</template>

<style module>
  .header {
    box-sizing: border-box;
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
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
    text-decoration: underline;
  }
  .iconWrapper {
    display: flex;
    place-items: center;
  }
  .icon {
    width: 30px;
  }
  .telegramIcon {
    transform: scale(0.8);
  }
  @media screen and (max-width: 1000px) {
    .header {
      padding: 20px;
    }
    .logo {
      width: 128px;
    }
    .links {
      gap: 12px;
    }
    .navigation {
      display: none;
    }
  }
</style>