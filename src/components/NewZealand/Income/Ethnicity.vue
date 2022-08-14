<template>
  <div id="income-ethnicity"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';

const echarts: any = inject('echarts');

onMounted(() => {
  const incomeEthnicityChart = echarts.init(document.getElementById('income-ethnicity') as HTMLElement);
  incomeEthnicityChart.setOption({
    title: {
      text: '各族裔收入中位数'
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
      data: ['欧裔', '毛利族', '太平洋诸岛裔', '亚裔']
    },
    yAxis: [
      {
        type: 'value',
        min: 20000,
        max: 36000,
        interval: 2000,
        axisLabel: {
          formatter: '${value}'
        }
      }
    ],
    series: [
      {
        name: '收入中位数',
        type: 'bar',
        color: '#0284C7',
        label: {
          show: true,
          position: 'top',
          formatter: '${c}'
        },
        data: [34500, 24300, 24300, 28400]
      }
    ]
  })
})
</script>

<style scoped>
#income-ethnicity {
  width: 700px;
  height: 500px;
}
</style>