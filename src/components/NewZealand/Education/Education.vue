<template>
  <div id="education"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
  const educationChart = echarts.init(document.getElementById('education') as HTMLElement);
  educationChart.setOption({
    title: {
      text: '教育程度'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      valueFormatter(value: any) {
        return value + '%'
      }
    },
    legend: {
      show: true
    },
    xAxis: {
      type: 'category',
      data: ['2006', '2013', '2018']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%'
      },
    },
    series: [
      {
        name: '无学位或证书',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        },
        data: [25, 20.9, 18.2]
      },
      {
        name: '学士学位以下',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        },
        data: [53, 52.3, 51.1]
      },
      {
        name: '学士学位及以上',
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        },
        data: [15.9, 20, 24.8]
      }
    ]
  })
})
</script>

<style scoped>
#education {
  width: 700px;
  height: 500px;
}
</style>