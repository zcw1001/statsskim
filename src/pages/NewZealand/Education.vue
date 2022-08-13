<template>
  <MainLayout :sidebarCurItem="1">
    <Education />
    <Bachelor />
    <Doctoral />
  </MainLayout>
</template>

<script setup lang="ts">
import Education from '@/components/NewZealand/Education/Education.vue';
import MainLayout from '@/components/Layout/MainLayout.vue';
import Bachelor from '@/components/NewZealand/Education/Bachelor.vue';
import Doctoral from '@/components/NewZealand/Education/Doctoral.vue';
</script>

<style scoped>

</style>