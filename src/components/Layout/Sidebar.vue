<template>
  <div class="sidebar select-none">
    <div 
      v-for="(item, idx) in items"
      class="sidebar-item rounded-2xl"
      :class="{ 'text-gray-800': curItem === idx, 'bg-gray-200': curItem === idx }"
    >
      <router-link :to="{ name: item.link_name }">
        <div>{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  curItem: number
}>();
const curItem = props.curItem;
const items = [
  { name: '人口', link_name: 'nz-population' },
  { name: '教育', link_name: 'nz-education' },
  { name: '收入', link_name: 'nz-income' },
];
</script>

<style scoped>
.sidebar {
  position: sticky;
  top: 100px;
  flex-basis: 30%;
  min-width: 30%;
  height: 50vh;
  padding: 0 80px 0 0;
}
.sidebar-item {
  padding: 10px 20px;
}
</style>