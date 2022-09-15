<script setup lang="ts">
import FooterTicker from '@/components/footer-ticker.vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/button.vue'
</script>

<template>
  <h1>Психотека</h1>
  <p :class='$style.body'>
    Трагедия моей свадьбы. Пасхальный кролик на пляже.<br/>
    Ревность и лебеди. Психотека и жизнь…
  </p>
  <div :class='$style.buttonWrapper'>
    <RouterLink to='/team'>
      <Button>
        О нашей команде
      </Button>
    </RouterLink>
    <img :class='$style.spiders' src='@/assets/img/spiders.svg'>
  </div>
  <FooterTicker />
</template>

<style module>
  .body {
    margin-top: 2em;
    max-width: 600px;
  }
  .buttonWrapper {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    align-items:center;
    width: max-content;
  }
  .spiders {
    max-width: 160px;
  }
</style>