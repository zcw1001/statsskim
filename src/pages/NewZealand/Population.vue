<template>
  <MainLayout :sidebarCurItem="0">
    <Population />
    <Ethnicity />
    <Caption>如果一个人有多个种族认同，则会在所有选择的类别中计入</Caption>
  </MainLayout>
</template>

<script setup lang="ts">
import Population from '@/components/NewZealand/Population/Population.vue';
import Ethnicity from '@/components/NewZealand/Population/Ethnicity.vue';
import Caption from '@/components/Common/Caption.vue';
import MainLayout from '@/components/Layout/MainLayout.vue';
</script>

<style scoped>

</style>