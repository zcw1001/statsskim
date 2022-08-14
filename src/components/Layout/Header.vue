<template>
  <div class="header text-center font-bold text-gray-600 select-none">
    <router-link :to="{ name: 'nz-population' }">
      <span class="text-3xl">StatsSkim</span>
      <span class="country-text text-md opacity-95">新西兰</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  box-sizing: content-box;
  height: 100px;
  line-height: 100px;
  padding: 0 0 30px 0;
}
.country-text {
  position: relative;
  right: 92px;
  top: 25px;
}
</style>