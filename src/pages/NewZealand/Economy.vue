<template>
  <MainLayout :sidebarCurItem="3">
    <GDP />
    <GDPCapita />
  </MainLayout>
</template>

<script setup lang="ts">
import GDP from '@/components/NewZealand/Economy/GDP.vue';
import GDPCapita from '@/components/NewZealand/Economy/GDPCapita.vue';
import MainLayout from '@/components/Layout/MainLayout.vue';
</script>

<style scoped>

</style>