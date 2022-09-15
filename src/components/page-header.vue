<script setup lang='ts'>
import { ref } from 'vue'
import {RouterLink} from 'vue-router'
import Sidebar from '@/components/ui/sidebar.vue'
import router from '@/router'

const isSidebarOpen = ref(false)

function hideSidebar() {
	isSidebarOpen.value = false
}

function showSidebar() {
	isSidebarOpen.value = true
}

router.beforeEach(() => {
	hideSidebar()
})
</script>

<template>
  <header :class="$style.header">
    <RouterLink to="/">
      <img
        :class="$style.logo"
        src="@/assets/img/logo.png"
      >
    </RouterLink>
    <nav :class="[$style.links, $style.navigation]">
      <RouterLink
        to="/team"
        :active-class="$style.activeLink"
      >
        Команда
      </RouterLink>
      <RouterLink
        to="/shop"
        :active-class="$style.activeLink"
      >
        Магазин
      </RouterLink>
      <RouterLink
        to="/tracks"
        :active-class="$style.activeLink"
      >
        Треки
      </RouterLink>
    </nav>
    <div :class="$style.links">
      <!-- <RouterLink
        to="/cart"
        :class="$style.iconWrapper"
      >
        <img
          :class="$style.icon"
          src="@/assets/icons/cart.svg"
        >
      </RouterLink> -->
      <a
        :class="$style.iconWrapper"
        href="https://soundcloud.com/psycho_tech"
        target="_blank"
      >
        <img
          :class="$style.icon"
          src="@/assets/icons/soundcloud.svg"
        >
      </a>
      <a
        :class="[$style.iconWrapper, $style.telegramIcon]"
        href="https://t.me/psychotecha"
        target="_blank"
      >
        <img
          :class="$style.icon"
          src="@/assets/icons/telegram.svg"
        >
      </a>
      <button
        :class="$style.burger"
        @click="showSidebar()"
      >
        <img
          :class="$style.icon"
          src="@/assets/icons/burger.svg"
        >
      </button>
    </div>
  </header>
  <Sidebar
    :is-shown="isSidebarOpen"
    :class="$style.sidebar"
    @close="hideSidebar()"
  >
    <RouterLink
      to="/"
      :active-class="$style.activeLink"
    >
      Главная
    </RouterLink>
    <RouterLink
      to="/shop"
      :active-class="$style.activeLink"
    >
      Магазин
    </RouterLink>
    <RouterLink
      to="/team"
      :active-class="$style.activeLink"
    >
      Команда
    </RouterLink>
    <RouterLink
      to="/tracks"
      :active-class="$style.activeLink"
    >
      Треки
    </RouterLink>
  </Sidebar>
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
  .burger {
    display: none;
    padding: 0;
    border: none;
    background: none;
  }
  .burger:hover {
    cursor: pointer;
  }
  .sidebar {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    .header {
      padding: 20px;
    }
    .logo {
      width: 128px;
    }
    .links {
      gap: 1.2em;
    }
    .navigation {
      display: none;
    }
    .burger {
      display: block;
    }
    .sidebar {
      display: inherit;
    }
  }
</style>