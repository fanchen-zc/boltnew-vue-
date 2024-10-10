<template>
  <div class="current-challenges">
    <h2>正在挑战的目标</h2>
    <el-table :data="challenges" style="width: 100%">
      <el-table-column prop="name" label="挑战名称"></el-table-column>
      <el-table-column prop="days" label="已坚持天数"></el-table-column>
      <el-table-column prop="deposit" label="押金"></el-table-column>
      <el-table-column label="进度">
        <template #default="scope">
          <el-progress :percentage="(scope.row.days / scope.row.totalDays) * 100" :format="format"></el-progress>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" size="small" @click="checkIn(scope.row)">打卡</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const challenges = ref([
  { name: '每日阅读', days: 5, totalDays: 30, deposit: 100 },
  { name: '每日运动', days: 3, totalDays: 60, deposit: 50 },
])

const format = (percentage: number) => {
  return `${Math.round(percentage)}%`
}

const checkIn = (challenge: any) => {
  // TODO: Implement check-in logic
  console.log('Checked in for:', challenge.name)
}
</script>

<style scoped>
.el-table {
  margin-bottom: 20px;
}

.el-button {
  width: 100%;
}
</style>