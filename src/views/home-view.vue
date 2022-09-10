<script setup lang="ts">
  import FooterTicker from '@/components/footer-ticker.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <h1>Рок-фестиваль  Психотека</h1>
  <p :class='$style.body'>
    Triumph of life over death,joy of being over grief.<br/>
    Real, talented and meaningful music over assembly line pop.
  </p>
  <div :class='$style.buttonWrapper'>
    <RouterLink to='/shop'>
      <button :class='$style.button'>
        Поддержать нас
      </button>
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
  .button {
    font-family: inherit;
    font-size: inherit;
    background: var(--colorExtra);
    padding: 14px 44px;
    outline: none;
    border: none;
  }
  .button:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  .spiders {
    max-width: 160px;
  }
</style>