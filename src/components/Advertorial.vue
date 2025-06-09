<template>
  <div v-if="isReady">
    <div v-if="advertorial" class="mt-4 bg-light">
      <div class="card p-2 ">
        <!-- 你既有的貼文內容 -->
        <div class="text-start my-3">
          <h2 class="mb-1">{{ advertorial?.title }}</h2>
        </div>
        <div class="d-flex align-items-center">
          <img :src="advertorial?.avatar" alt="個人照片" class="rounded-circle me-3"
            style="width:50px; height:50px; object-fit:cover;" />
          <div class="text-start">
            <h5 class="mb-1">{{ advertorial?.accountId }}</h5>
            <p class="mb-0 text-muted">{{ advertorial?.name }}</p>
          </div>
        </div>
        <div>
          <p class="mt-3 text-start">{{ advertorial?.content }}</p>
        </div>
        <div v-if="advertorial.partners && advertorial.partners?.length" class="mb-4">
          <div class="text-start">
            <strong>合作夥伴：</strong>
          </div>
          <div class="flex-wrap mt-2">
            <div v-for="other in advertorial.partners" :key="other.id" class="d-flex align-items-start me-4 mb-2">
              <el-avatar :src="other.avatar" size="default" shape="square" fit="cover" />
              <span class="ms-2">{{ other.name }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mx-2">
          <!-- 愛心按鈕：stop 阻止事件冒泡，prevent 防止 link 預設行為 -->
          <div class="d-flex align-items-center me-4" style="cursor: pointer;"
            @click.stop.prevent="toggleLike(advertorial)">
            <i :class="['bi', advertorial.liked ? 'bi-heart-fill text-danger' : 'bi-heart']"></i>
            <span class="ms-1">{{ advertorial.likeCount }}</span>
          </div>
          <!-- 留言按鈕 -->
          <div class="d-flex align-items-center me-4" style="cursor: pointer;">
            <i class="bi bi-chat-square"></i>
            <span class="ms-1">{{ advertorial.commentCount }}</span>
          </div>
          <!-- 收藏按鈕 -->
          <div class="d-flex align-items-center" style="cursor: pointer;">
            <i class="bi bi-bookmark"></i>
          </div>
        </div>
      </div>


      <!-- 留言列表 -->
      <div class="px-2 mt-3 pb-3 bg-light">
        <el-card v-for="(comment, idx) in comments" :key="idx" class="comment-card"
          :body-style="{ padding: '0.5rem 1rem' }">
          <div class="d-flex align-items-center">
            <div class="">
              <el-avatar :src="comment.avatarUrl || circleUrl" size="default" class="mx-2" shape="circle" fit="cover" />
            </div>
            <div class="text-start">
              <strong class="d-block">{{ comment.author }}</strong>
            </div>
          </div>
          <div class="text-start mt-2 px-2">
            <p>{{ comment.content }}</p>
          </div>
          <div class="text-start mt-3 px-2">
            <small>{{ comment.date }}</small>
          </div>
        </el-card>
      </div>
    </div>
    <div v-else>
      <h1 class="mt-5 text-white">找不到業配文，有緣再相見</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElCard, ElAvatar } from 'element-plus'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import Lee from '@/assets/image/user/李毅誠.jpg'
import Hao from '@/assets/image/user/hao.jpg'
import lon from '@/assets/image/user/家倫.jpg'
import type { Advertorial, Comment } from '@/types/advertorial'
import baseApi from '@/service/api'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
// console.log('收到的 id22：', id)
const isAtTop = ref(false)
// const props = defineProps<{ id: number }>()
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
const advertorial = ref<Advertorial | null>(null);
const comments = ref<Comment[]>([]);
const error = ref<string | null>(null)
const isReady = ref(false)

function toggleLike(advertorial: Advertorial) {
  if (advertorial.liked) {
    advertorial.likeCount--
  } else {
    advertorial.likeCount++
  }
  advertorial.liked = !advertorial.liked
}

const emit = defineEmits(['submitComment'])

// 本地暫存新留言文字
const newComment = ref('')

// 當父組件傳入的 comments 改變時，若有需要可以做進一步處理
// watch(() => props.comments, (newVal) => {
//   // e.g. 滾動到最新一筆、重置表單之類
// })
async function getAdvertorialDeal(id) {
  try {
    const res = (await baseApi.get(`/advertorial/${id}`))
    advertorial.value = res.data.data
  } catch (e: any) {
    error.value = e.message
  }
}

async function getAdvertorialComment(id) {
  try {
    const res = (await baseApi.get(`/advertorial_comment/${id}`))
    comments.value = res.data.data
  } catch (e: any) {
    error.value = e.message
  }
}

onMounted(async () => {
  await getAdvertorialDeal(props.id);
  await getAdvertorialComment(props.id);
  isReady.value = true
})
</script>

<style scoped>
.comment-card {
  border-bottom: 1px solid #dee2e6;
}
</style>
