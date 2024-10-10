<template>
  <div class="challenge-records">
    <h2>挑战记录</h2>
    <el-tabs v-model="activeTab" class="demo-tabs">
      <el-tab-pane label="成功" name="success">
        <el-table :data="successRecords" style="width: 100%">
          <el-table-column prop="name" label="挑战名称"></el-table-column>
          <el-table-column prop="days" label="坚持天数"></el-table-column>
          <el-table-column prop="deposit" label="退还押金"></el-table-column>
          <el-table-column label="状态">
            <template #default>
              <el-tag type="success">成功</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="失败" name="failure">
        <el-table :data="failureRecords" style="width: 100%">
          <el-table-column prop="name" label="挑战名称"></el-table-column>
          <el-table-column prop="days" label="坚持天数"></el-table-column>
          <el-table-column prop="deposit" label="损失押金"></el-table-column>
          <el-table-column label="状态">
            <template #default>
              <el-tag type="danger">失败</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTab = ref('success')

const successRecords = ref([
  { name: '每日阅读', days: 30, deposit: 100 },
  { name: '每日运动', days: 60, deposit: 200 },
])

const failureRecords = ref([
  { name: '每日写作', days: 15, deposit: 50 },
  { name: '每日冥想', days: 7, deposit: 30 },
])
</script>

<style scoped>
.el-tabs {
  margin-bottom: 20px;
}

.el-table {
  margin-bottom: 20px;
}
</style>