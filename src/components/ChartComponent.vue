<template>
  <div class="chartbox">
    <h3>Project Hours Distribution</h3>
    <div ref="barChart" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  name: 'ChartComponent',
  setup() {
    const store = useCounterStore();
    const barChart = ref<HTMLElement | null>(null);

    const renderChart = () => {
      if (barChart.value) {
        const myChart = echarts.init(barChart.value);

        const projectNames = store.tableData.map(item => item.project);
        const hoursSpent = store.tableData.map(item => item.hours);

        const option = {
          title: {
            text: 'Project Hours Distribution',
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            data: projectNames,
            axisLabel: { rotate: 30 }
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '工时',
              type: 'bar',
              data: hoursSpent,
              emphasis: {
                focus: 'series'
              }
            }
          ]
        };

        myChart.setOption(option);
      }
    };

    // When the component is mounted, render the initial chart
    onMounted(() => {
      renderChart();

      // Watch for changes in tableData and re-render the chart
      watch(() => store.tableData, () => {
        renderChart();
      }, { deep: true }); // Use deep watch for nested properties
    });

    return {
      barChart
    };
  }
});
</script>

<style>
.chartbox {
  margin-right: 0;
  margin-top: 0;
}
</style>
