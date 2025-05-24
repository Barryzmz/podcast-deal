<template>
  <div class="container-fluid">
    <div class="row m-0 p-0">
      <!-- 左側個人資料區塊 -->
      <div class="col-3 mt-3">
        <div class="card p-2 sticky-top" style="top: 5rem;">
          <div class="d-flex align-items-center">
            <img :src="user.imageUrl" alt="個人照片" class="rounded-circle me-3" style="width:80px; height:80px; object-fit:cover;">
            <div class="text-start">
              <p class="mb-0 small text-muted">Podcaster</p>
              <p class="mb-0 text-muted">{{ user.name }}</p>
            </div>
          </div>
          <div>
            <p class="mt-3 text-start">{{ user.introduction }}</p>
          </div>
        </div>
      </div>
        
      <!-- 中間葉配資訊 -->
      <div class="col-6">
        <router-view />
      </div>

      <!-- 右側廣告區塊 -->
      <div class="col-3 mt-3">
        <el-image
          :src=templatead1
          fit="cover"
          style="width: 100%; height: auto; border-radius: 8px;"
        />
        <el-image
          :src=templatead2
          fit="cover"
          style="width: 100%; height: auto; border-radius: 8px;"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import templatead1 from '@/assets/image/範例外部廣告1.png'
import templatead2 from '@/assets/image/範例外部廣告2.png'
import AdvertorialList from '@/components/AdvertorialList.vue'
import Advertorial from '@/components/Advertorial.vue'

// 個人資訊
const user = ref({
  imageUrl: avatar2,
  podcasterName: '台灣通勤第一品牌',
  name: '台灣通勤第一品牌',
  introduction: '各類合作請丟commuteforme@gmail.com，目前臉書收件匣被各式聊天仔灌爆中。短期目標更動為錄音清晰音量宜人既往追究。本節目各大平台均有上架，感謝支持。'
})

const data = ref(
  {
    id: 1,
    podcasterName: '台灣通勤第一品牌',
    name: '台灣通勤第一品牌',
    username: '台灣通勤第一品牌',
    imageUrl: avatar2,
    avatar: avatar2,
    title: '本集節目由【Saily】贊助播出',
    content: '前往 下載 Saily APP，並在結帳時使用優惠代碼 【commute】立即享有專屬 eSIM 方案 85 折優惠！ #SailyeSIM',
    dateTime: '2025/05/10 ~ 2025/05/21',
    available: '可用'
  }
)

const comments = ref([
  { author: '李議程', content: '這又沒多少錢，用一下啦', date: '2025-05-18 10:00' },
  { author: '皇民葉', content: '跟小何去日本的時候有用，推推推', date: '2025-05-18 12:30' },
])


// 文章列表

// 廣告資料
const ads = ref([
  { imageUrl: 'https://via.placeholder.com/250x150', caption: '廣告一' },
  { imageUrl: 'https://via.placeholder.com/250x150', caption: '廣告二' }
])


function handleCommentSubmit(newCommentText) {
  if (!newCommentText.trim()) return
  comments.value.push({
    author: '訪客',
    content: newCommentText,
    date: new Date().toLocaleString(),
  })
}

// function goDetail(id) {
//   router.push({ name: 'Advertorial', params: { id } })
// }

</script>

<style scoped>

.list-group-item {
  margin-bottom: 0.5rem;
}
</style>
