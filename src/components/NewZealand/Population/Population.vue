<template>
  <div id="population"></div> 
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts';

function addDots(num: number) {
  return num.toLocaleString('en-US')
}

onMounted(() => {
  const populationChart = echarts.init(document.getElementById('population') as HTMLElement);
  populationChart.setOption({
    title: {
      text: '人口'
    },
    tooltip: {
    },
    legend: {
      show: true
    },
    xAxis: {
      type: 'category',
      data: ['2001', '2006', '2013', '2018']
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        min: 3000000,
        max: 5000000,
        interval: 500000,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: '人口总量',
        type: 'bar',
        color: '#0284C7',
        label: {
          show: true,
          position: 'top',
          formatter(params: any) {
            return addDots(params.value)
          }
        },
        data: [3820749, 4143282, 4353198, 4793358]
      }
    ]
  })
})
</script>

<style scoped>
#population {
  width: 700px;
  height: 500px;
}
</style>