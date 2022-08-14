<template>
  <div id="gdp-capita"></div> 
</template>

<script setup lang="ts">
import { onMounted, inject } from 'vue';

const echarts: any = inject('echarts');
const years = ['1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const GDPCapitaData = [2772.9185969396, 3294.64894268304, 4323.19653458655, 4610.57042634013, 4171.76973967475, 4373.84099791231, 4950.58820538927, 5936.98526036423, 6668.1386662247, 7467.16803773805, 7813.88754336067, 7656.47573238963, 7598.31203875006, 6713.76013104154, 7600.56524172937, 9427.55394035348, 12330.9168305483, 13759.1556295922, 13312.3855858113, 13663.0216184298, 12230.0734548834, 11793.1392416214, 13094.3454502639, 15280.3127842922, 17400.4201848172, 18794.436039393, 17474.187029724, 14738.4455703918, 15322.2238340267, 13641.1027183822, 13882.8568268586, 16874.1874918196, 21913.7081719961, 25420.234882944, 27751.0654708859, 26654.5932018985, 32479.9817381467, 31252.9625640673, 28209.3623271229, 33676.7741239925, 38387.6270784076, 39973.3807587223, 42976.6495882584, 44572.8987536626, 38630.7265886928, 40058.1961621466, 42924.9955958449, 43250.440973659, 42865.233643554, 41596.5055023403, 48801.6851279674];

function addDots(num: number): string {
  return '$' + Number(num.toFixed(2)).toLocaleString('en-US')
}

onMounted(() => {
  const gdpCapitaChart = echarts.init(document.getElementById('gdp-capita') as HTMLElement);
  gdpCapitaChart.setOption({
    title: {
      text: '人均GDP'
    },
    tooltip: {
      valueFormatter(value: any) {
        return addDots(value)
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
        min: 2500,
        max: 50000,
        axisLabel: {
          formatter(value: number) {
            return addDots(value)
          }
        }
      }
    ],
    series: [
      {
        name: '人均GDP',
        type: 'bar',
        color: '#0284C7',
        label: {
          show: true,
          position: 'top',
          formatter(params: any) {
            if ([0, GDPCapitaData.length-1].includes(params.dataIndex)) {
              return addDots(params.value)
            } else {
              return ''
            }
          }
        },
        data: GDPCapitaData
      }
    ]
  })
})
</script>

<style scoped>
#gdp-capita {
  width: 100%;
  height: 500px;
}
</style>