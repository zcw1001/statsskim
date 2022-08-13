<template>
  <MainLayout :sidebarCurItem="2">
    <Income />
    <Ethnicity />
  </MainLayout>
</template>

<script setup lang="ts">
import Income from '@/components/NewZealand/Income/Income.vue';
import Ethnicity from '@/components/NewZealand/Income/Ethnicity.vue';
import MainLayout from '@/components/Layout/MainLayout.vue';
</script>

<style scoped>

</style>