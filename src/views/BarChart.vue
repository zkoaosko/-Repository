<template>
  <div class="common-layout">
    <h3>Task</h3>
    <el-table
      class="el_table" :data="store.tableData" :row-style="{ height: '65px' }">
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column prop="project" label="Project Name" width="220"></el-table-column>
      <el-table-column prop="overtime" label="Overtime" width="120"></el-table-column>
      <el-table-column prop="hours" label="Hours" width="120"></el-table-column>
      <el-table-column prop="created_at" label="Created_At" width="200"></el-table-column>
      <el-table-column  label="" width="140">
        <template #default="scope">
          <el-button v-show="store.isshow"  size="small" @click="store.handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="boxchart">
      <ChartComponent></ChartComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import ChartComponent from '@/components/ChartComponent.vue';

const store = useCounterStore();


</script>

<style lang="less">
.common-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.el_table {
  max-height: 400px;
  overflow-y: auto;
  width: 55%;
  height: 400px;
  overflow-y: auto;
}

.boxchart {
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
}
</style>
