<template>
  <div class="main-layout">
    <Header />
    <div class="main-content">
      <Sidebar :curItem="props.sidebarCurItem" />
      <main>
        <slot></slot>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Sidebar from './Sidebar.vue';
import Header from './Header.vue'
import Footer from './Footer.vue'

const props = defineProps<{
  sidebarCurItem: number
}>()
</script>

<style scoped>
.main-content {
  display: flex;
  padding: 0 300px;
}
main {
  flex-basis: 70%;
  padding: 10px 0;
}
</style>