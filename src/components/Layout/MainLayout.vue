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
  width: 960px;
  margin: 0 auto;
}
main {
  flex-basis: 70%;
  padding: 10px 0;
}

@media screen and (max-width: 960px) {
  .main-content {
    width: 100%;
    padding: 0 20px;
  }
}
</style>