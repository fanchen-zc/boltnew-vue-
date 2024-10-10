<template>
  <div class="new-challenge">
    <h2>发起新挑战</h2>
    <el-steps :active="currentStep" finish-status="success" simple style="margin-bottom: 20px;">
      <el-step title="填写信息"></el-step>
      <el-step title="确认支付"></el-step>
      <el-step title="挑战开始"></el-step>
    </el-steps>
    <el-form v-if="currentStep === 0" :model="form" label-width="120px" label-position="top">
      <el-form-item label="挑战名称">
        <el-input v-model="form.name" placeholder="请输入挑战名称"></el-input>
      </el-form-item>
      <el-form-item label="目标天数">
        <el-input-number v-model="form.days" :min="1" :max="365" placeholder="请输入目标天数"></el-input-number>
      </el-form-item>
      <el-form-item label="押金">
        <el-input-number v-model="form.deposit" :min="0" :precision="2" :step="10" placeholder="请输入押金金额"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="nextStep" size="large">下一步</el-button>
      </el-form-item>
    </el-form>
    <div v-else-if="currentStep === 1" class="payment-confirmation">
      <h3>确认支付</h3>
      <p>挑战名称：{{ form.name }}</p>
      <p>目标天数：{{ form.days }} 天</p>
      <p>押金金额：{{ form.deposit }} 元</p>
      <el-button type="primary" @click="confirmPayment" size="large">确认支付</el-button>
    </div>
    <div v-else class="challenge-started">
      <h3>挑战已开始</h3>
      <p>祝你成功完成 {{ form.name }} 挑战！</p>
      <el-button type="primary" @click="goToCurrentChallenges" size="large">查看我的挑战</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentStep = ref(0)

const form = reactive({
  name: route.query.title as string || '',
  days: 30,
  deposit: 100,
})

const nextStep = () => {
  currentStep.value++
}

const confirmPayment = () => {
  // TODO: Implement actual payment logic
  setTimeout(() => {
    currentStep.value++
  }, 1500)
}

const goToCurrentChallenges = () => {
  router.push('/current-challenges')
}
</script>

<style scoped>
.new-challenge {
  max-width: 500px;
  margin: 0 auto;
}

.el-form-item {
  margin-bottom: 25px;
}

.el-button {
  width: 100%;
}

.payment-confirmation, .challenge-started {
  text-align: center;
}

.payment-confirmation p, .challenge-started p {
  margin-bottom: 15px;
}
</style>