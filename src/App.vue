<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/page-header.vue';
import MainWrapper from '@/components/ui/main-wrapper.vue'
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  const data = axios.get('http://192.168.1.132:8000/api/v1/users/', {
    headers: {
      'Content-Type': 'application/json',
      'Vary': 'Accept'
    },
  })
  console.log(data)
})
</script>

<template>
  <PageHeader />
  <MainWrapper>
    <RouterView />
  </MainWrapper>
</template>
