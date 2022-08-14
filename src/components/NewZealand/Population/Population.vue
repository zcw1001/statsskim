<template>
  <div id="population"></div> 
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';

const echarts: any = inject('echarts');

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
      data: ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        min: 2000000,
        max: 6000000,
        interval: 1000000,
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
            if ([0, 61].includes(params.dataIndex)) {
              return addDots(params.value)
            } else {
              return ''
            }
          }
        },
        data: [2371800, 2419700, 2482000, 2531800, 2585400, 2628400, 2675900, 2724100, 2748100, 2772800, 2810700, 2853000, 2903900, 2961300, 3023700, 3083100, 3110500, 3120200, 3121200, 3109000, 3112900, 3124900, 3156100, 3199300, 3227100, 3247100, 3246300, 3274400, 3283400, 3299200, 3329800, 3495100, 3531700, 3572200, 3620000, 3673400, 3732000, 3781300, 3815000, 3835100, 3857700, 3880500, 3948500, 4027200, 4087500, 4133900, 4184600, 4223800, 4259800, 4302600, 4350700, 4384000, 4408100, 4442100, 4516500, 4609400, 4714100, 4813600, 4900600, 4979200, 5090200, 5122600]
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