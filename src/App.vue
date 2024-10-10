<template>
  <el-container class="layout-container">
    <el-header>
      <div class="header-content">
        <router-link to="/" class="logo-link">
          <img src="./assets/logo.svg" alt="自律打卡" class="logo" />
        </router-link>
        <el-menu mode="horizontal" router class="nav-menu">
          <el-menu-item index="/">主页</el-menu-item>
          <el-menu-item index="/current-challenges">正在挑战</el-menu-item>
          <el-menu-item index="/challenge-details">挑战详情</el-menu-item>
          <el-menu-item index="/new-challenge">发起挑战</el-menu-item>
          <el-menu-item index="/challenge-records">挑战记录</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <p>&copy; 2023 自律打卡. All rights reserved.</p>
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
// Component logic here
</script>

<style lang="scss">
.layout-container {
  min-height: 100vh;
}

.el-header {
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .logo-link {
    text-decoration: none;
  }

  .logo {
    height: 40px;
    vertical-align: middle;
  }

  .nav-menu {
    border-bottom: none;
  }
}

.el-footer {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-secondary);
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
  padding: 20px;
}

@media (max-width: 768px) {
  .el-menu--horizontal {
    display: flex;
    flex-direction: column;
  }
}
</style>