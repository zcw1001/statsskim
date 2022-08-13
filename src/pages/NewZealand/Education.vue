<template>
  <MainLayout :sidebarCurItem="1">
    <Education />
    <Ethnicity />
  </MainLayout>
</template>

<script setup lang="ts">
import Education from '@/components/NewZealand/Education/Education.vue';
import MainLayout from '@/components/Layout/MainLayout.vue';
import Ethnicity from '@/components/NewZealand/Education/Ethnicity.vue';
</script>

<style scoped>

</style>