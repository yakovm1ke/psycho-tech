<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/page-header.vue';
import MainWrapper from '@/components/ui/main-wrapper.vue'
</script>

<template>
  <PageHeader />
  <MainWrapper>
    <RouterView />
  </MainWrapper>
</template>
