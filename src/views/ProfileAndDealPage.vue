<template>
  <div class="container-fluid">
    <div class="row m-0 p-0">
      <!-- 左側個人資料區塊 -->
      <div class="col-3 mt-3">
        <div class="card p-2 sticky-top" style="top: 5rem;">
          <div class="d-flex align-items-center">
            <el-avatar :src="accountProfile.imageUrl || circleUrl" :size="80" class="mx-2" shape="square" fit="cover" />
            <!-- <img :src="accountProfile.imageUrl" alt="個人照片" class="me-3" style="width:80px; height:80px; object-fit:cover;"> -->
            <div class="text-start">
              <p class="mb-0 small text-muted">{{ accountProfile.type }}</p>
              <strong class="mb-0 text-muted">{{ accountProfile.name }}</strong>
            </div>
          </div>
          <div>
            <p class="mt-3 text-start">{{ accountProfile.introduction }}</p>
          </div>
        </div>
      </div>

      <!-- 中間葉配資訊 -->
      <div class="col-6 mb-5">
        <router-view v-slot="{ Component, route }">
          <!-- 只有 AdvertorialList 需要被 keep-alive 缓存 -->
          <keep-alive include="AdvertorialList">
            <component :is="Component" :advertorial="posts" />
          </keep-alive>
        </router-view>
      </div>

      <!-- 右側廣告區塊 -->
      <div class="col-3 mt-3">
        <el-image :src=templatead1 fit="cover" style="width: 100%; height: auto; border-radius: 8px;" />
        <el-image :src=templatead2 fit="cover" style="width: 100%; height: auto; border-radius: 8px;" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import templatead1 from '@/assets/image/範例外部廣告1.png'
import templatead2 from '@/assets/image/範例外部廣告2.png'
import type { Advertorial } from '@/types/advertorial'
import baseApi from '@/service/api'
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
// 個人資訊
const props = defineProps({
  accountId: {
    type: String,
    required: true
  }
})
console.log('ProfileAndDealPage收到的 id：', props.accountId)
const error = ref<string | null>(null)

const accountProfile = ref({
  imageUrl: null,
  accountName: '',
  name: '',
  type: '',
  introduction: ''
})

const posts = ref<Advertorial[]>([])
const originalPosts = ref<Advertorial[]>([])

// 文章列表

// 廣告資料
const ads = ref([])

onMounted(async () => {
  try {
    const accountProfile_result = (await baseApi.post('/profile', {
      accountId: props.accountId
    })).data
    const advertorialList_result = (await baseApi.post('/advertorialList', {
      accountId: props.accountId
    })).data

    const outer_advertisements_result = (await baseApi.get('/outer_advertisement')).data
    posts.value = advertorialList_result.data
    accountProfile.value = accountProfile_result.data
  } catch (e: any) {
    error.value = e.message
  }
})
</script>

<style scoped>
.list-group-item {
  margin-bottom: 0.5rem;
}
</style>
