<template>
  <div class="challenge-details">
    <h2>挑战详情</h2>
    <el-card class="challenge-card">
      <el-descriptions title="挑战信息" :column="1" border>
        <el-descriptions-item label="挑战名称">每日阅读</el-descriptions-item>
        <el-descriptions-item label="已坚持天数">5</el-descriptions-item>
        <el-descriptions-item label="目标天数">30</el-descriptions-item>
        <el-descriptions-item label="押金">100元</el-descriptions-item>
        <el-descriptions-item label="状态">
          <el-tag type="success">进行中</el-tag>
        </el-descriptions-item>
      </el-descriptions>
      <div class="progress-wrapper">
        <h3>进度</h3>
        <el-progress :percentage="(5/30)*100" :format="format" :stroke-width="20"></el-progress>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const format = (percentage: number) => {
  return `${Math.round(percentage)}%`
}
</script>

<style scoped>
.challenge-card {
  margin-bottom: 20px;
}

.progress-wrapper {
  margin-top: 20px;
}

h3 {
  margin-bottom: 10px;
  font-weight: 600;
}
</style>