<template>
  <div id="bachelor"></div>
  <div id="doctoral"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
  const bachelorChart = echarts.init(document.getElementById('bachelor') as HTMLElement);
  bachelorChart.setOption({
    title: {
      text: '学士学位各族裔人数',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: '博士各族裔人数',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 339669, name: '欧裔' },
          { value: 40326, name: '毛利人' },
          { value: 16899, name: '太平洋诸岛裔' },
          { value: 137733, name: '亚裔' },
          { value: 17883, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
        }
      }
    ]
  })
  const doctoralChart = echarts.init(document.getElementById('doctoral') as HTMLElement);
  doctoralChart.setOption({
    title: {
      text: '博士各族裔人数',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'right'
    },
    series: [
      {
        name: '博士各族裔人数',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 23118, name: '欧裔' },
          { value: 1197, name: '毛利人' },
          { value: 348, name: '太平洋诸岛裔' },
          { value: 4764, name: '亚裔' },
          { value: 1671, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
})
</script>

<style scoped>
#bachelor, #doctoral {
  width: 700px;
  height: 500px;
}
</style>