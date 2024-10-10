<template>
  <div class="home">
    <el-carousel :interval="5000" type="card" height="300px" class="hero-carousel">
      <el-carousel-item v-for="item in carouselItems" :key="item.title">
        <div class="carousel-content" :style="{ backgroundImage: `url(${item.image})` }">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <el-button type="primary" @click="startChallenge(item)">参与挑战</el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
    
    <!-- ... (保留其他内容) -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const carouselItems = ref([
  {
    title: '30天早起挑战',
    description: '每天早起一小时，改变你的生活',
    image: '/src/assets/challenge-1.jpg'
  },
  {
    title: '21天读书马拉松',
    description: '每天阅读30分钟，开启智慧人生',
    image: '/src/assets/challenge-2.jpg'
  },
  {
    title: '100天健身计划',
    description: '每天锻炼30分钟，塑造完美身材',
    image: '/src/assets/challenge-3.jpg'
  }
])

const totalDays = ref(30)
const currentChallenges = ref(2)
const completedChallenges = ref(5)
const dailyQuote = ref('成功不是最终目标，失败也不是终点，重要的是继续前进的勇气。')

const startChallenge = (challenge) => {
  router.push({
    path: '/new-challenge',
    query: { title: challenge.title }
  })
}

// TODO: Fetch actual data from API
</script>

<style scoped>
/* ... (保留之前的样式) */

.hero-carousel {
  margin-bottom: 40px;
}

.carousel-content {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
}

.carousel-content h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.carousel-content p {
  font-size: 16px;
  margin-bottom: 20px;
}

/* ... (保留其他样式) */
</style>