<script setup lang='ts'>
import PaddedPage from '../components/ui/padded-page.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <PaddedPage :class="$style.page">
    <img
      :class="$style.image"
      src="@/assets/img/error.gif"
    >
    <div :class="$style.title">
      404
    </div>
    <div>НИЧЕГО НЕ НАЙДЕНО</div>
    <RouterLink to="/">
      НА ГЛАВНУЮ
    </RouterLink>
  </PaddedPage>
</template>

<style module>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image {
  display: flex;
  object-fit: cover;
  width: 100%;
  max-width: 500px;
}

.title {
  font-size: 3em;
  font-weight: bold;
}
</style>