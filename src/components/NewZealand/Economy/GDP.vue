<template>
  <div id="gdp"></div> 
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';

const echarts: any = inject('echarts');
const years = ['1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const GDPData = [7911136757.06867, 9567331064.65727, 12802281897.8712, 13940981798.1247, 12861983284.3912, 13604832424.0062, 15446825318.4556, 18530518394.6488, 20731243113.2926, 23244547384.6748, 24417617184.2478, 24164603058.9949, 24309279705.5731, 21665975318.8842, 24679795396.4194, 30604668356.5695, 40376354069.9474, 45176811594.2029, 43920222524.7085, 45495129385.0475, 42745329732.163, 41649829859.6342, 46775620817.4327, 55314732279.1379, 63918703506.9075, 70140835299.0148, 66075143415.4952, 56227169851.0448, 58762260625.8758, 52623281956.7031, 53872425916.6248, 66627729311.4495, 88250885550.2626, 103905210084.034, 114720129550.095, 111538810712.665, 137188946865.584, 133131369930.414, 121373602348.679, 146517541181.254, 168291357111.739, 176206659722.524, 190906575136.003, 201313497220.917, 178064471137.921, 188838342527.975, 206623758800.159, 211953111035.513, 213434571357.984, 211734532308.013, 249991512236.526];

function convertToBillionString(num: number): string {
  return '$' + (num / 1E9).toFixed(2) + 'B'
}

onMounted(() => {
  const gdpChart = echarts.init(document.getElementById('gdp') as HTMLElement);
  gdpChart.setOption({
    title: {
      text: 'GDP'
    },
    tooltip: {
      valueFormatter(value: any) {
        return convertToBillionString(value)
      }
    },
    legend: {
      show: true
    },
    xAxis: {
      type: 'category',
      data: years
    },
    yAxis: [
      {
        type: 'value',
        name: '数量',
        min: 7 * 1E9,
        max: 300 * 1E9,
        axisLabel: {
          formatter(value: number) {
            return convertToBillionString(value)
          }
        }
      }
    ],
    series: [
      {
        name: 'GDP',
        type: 'bar',
        color: '#0284C7',
        label: {
          show: true,
          position: 'top',
          formatter(params: any) {
            if ([0, GDPData.length-1].includes(params.dataIndex)) {
              return convertToBillionString(params.value)
            } else {
              return ''
            }
          }
        },
        data: GDPData
      }
    ]
  })
})
</script>

<style scoped>
#gdp {
  width: 100%;
  height: 500px;
}
</style>