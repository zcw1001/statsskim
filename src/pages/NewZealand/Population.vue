<template>
  <MainLayout :sidebarCurItem="0">
    <Population />
    <Ethnicity />
  </MainLayout>
</template>

<script setup lang="ts">
import Population from '@/components/NewZealand/Population/Population.vue';
import Ethnicity from '@/components/NewZealand/Population/Ethnicity.vue';
import MainLayout from '@/components/Layout/MainLayout.vue';
</script>

<style scoped>

</style>