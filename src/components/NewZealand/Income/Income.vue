<template>
  <div id="income"></div> 
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';

const echarts: any = inject('echarts');

onMounted(() => {
  const incomeChart = echarts.init(document.getElementById('income') as HTMLElement);
  incomeChart.setOption({
    title: {
      text: '收入中位数'
    },
    tooltip: {
      valueFormatter(value: number) {
        return '$' + value
      }
    },
    legend: {
      show: true
    },
    xAxis: {
      type: 'category',
      data: ['2013', '2018']
    },
    yAxis: [
      {
        type: 'value',
        min: 25000,
        max: 35000,
        interval: 2000,
        axisLabel: {
          formatter: '${value}'
        }
      }
    ],
    series: [
      {
        name: '收入中位数',
        type: 'line',
        color: '#0284C7',
        label: {
          show: true,
          position: 'top',
          formatter: '${c}'
        },
        data: [28500, 31800]
      }
    ]
  })
})
</script>

<style scoped>
#income {
  width: 100%;
  height: 500px;
}
</style>