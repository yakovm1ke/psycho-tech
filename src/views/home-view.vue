<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <h1 :class='$style.title'>
    Rock-festival Psychotech
  </h1>
  <p :class='$style.body'>
    Triumph of life over death,joy of being over grief.<br/>
    Real, talented and meaningful music over assembly line pop.
  </p>
    <div :class='$style.buttonWrapper'>
      <RouterLink to='/shop'>
        <button :class='$style.button'>
          Support us
        </button>
      </RouterLink>
      <img :class='$style.spiders' src='@/assets/img/spiders.svg'>
    </div>
</template>

<style module>
  .title {
    font-weight: bold;
    font-size: 36px;
  }
  .body {
    margin-top: 36px;
    max-width: 600px;
  }
  .buttonWrapper {
    display: flex;
    flex-direction: column;
  }
  .button {
    font-family: inherit;
    font-size: inherit;
    margin-top: 36px;
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
    width: fit-content;
  }
</style>