import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CurrentChallenges from '../views/CurrentChallenges.vue'
import ChallengeDetails from '../views/ChallengeDetails.vue'
import NewChallenge from '../views/NewChallenge.vue'
import ChallengeRecords from '../views/ChallengeRecords.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/current-challenges',
      name: 'currentChallenges',
      component: CurrentChallenges
    },
    {
      path: '/challenge-details',
      name: 'challengeDetails',
      component: ChallengeDetails
    },
    {
      path: '/new-challenge',
      name: 'newChallenge',
      component: NewChallenge
    },
    {
      path: '/challenge-records',
      name: 'challengeRecords',
      component: ChallengeRecords
    }
  ]
})

export default router