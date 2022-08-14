<template>
  <div id="ethnicity"></div>
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';

const echarts: any = inject('echarts');

const formatter = (params: any) => {
  if (params.dataIndex == 3) {
    return params.seriesName
  } else {
    return ''
  }
}

onMounted(() => {
  const ethnicityChart = echarts.init(document.getElementById('ethnicity') as HTMLElement);
  ethnicityChart.setOption({
    title: {
      text: '种族'
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
      boundaryGap: false,
      data: ['2001', '2006', '2013', '2018']
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        min: 0,
        max: 80,
        interval: 40,
        axisLabel: {
          formatter: '{value}%'
        }
      }
    ],
    series: [
      {
        name: '欧裔',
        type: 'line',
        smooth: true,
        label: {
          show: true,
          position: 'right',
          formatter
        },
        data: [76.8, 67.6, 74.0, 70.2]
      },
      {
        name: '毛利族',
        type: 'line',
        smooth: true,
        label: {
          show: true,
          position: 'top',
          formatter
        },
        data: [14.1, 14.6, 14.9, 16.5]
      },
      {
        name: '太平洋诸岛裔',
        type: 'line',
        smooth: true,
        label: {
          show: true,
          position: 'top',
          formatter
        },
        data: [6.2, 6.9, 7.4, 8.1]
      },
      {
        name: '亚裔',
        type: 'line',
        smooth: true,
        label: {
          show: true,
          position: 'right',
          formatter
        },
        data: [6.4, 9.2, 11.8, 15.1]
      },
      {
        name: '其他',
        type: 'line',
        smooth: true,
        label: {
          show: true,
          position: 'right',
          formatter
        },
        data: [0.7, 12.1, 2.9, 2.7]
      }
    ]
  })
})
</script>

<style scoped>
#ethnicity {
  width: 700px;
  height: 500px;
}
</style>