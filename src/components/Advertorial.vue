<template>
  <div v-if="isReady">
    <div v-if="advertorial" class="mt-3 bg-light">
      <div class="card p-2 ">
        <!-- 你既有的貼文內容 -->
        <div class="text-start my-3">
          <h2 class="mb-1">{{ advertorial?.title }}</h2>
        </div>
        <div class="d-flex align-items-center">
          <img :src="advertorial?.account.avatar" alt="個人照片" class="rounded-circle me-3"
            style="width:50px; height:50px; object-fit:cover;" />
          <div class="text-start">
            <h5 class="mb-1">{{ advertorial?.account.accountName }}</h5>
            <p class="mb-0 text-muted">{{ advertorial?.account.accountId }}</p>
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
            <div v-for="other in advertorial.partners" :key="other.accountId"
              class="d-flex align-items-start me-4 mb-2">
              <el-avatar :src="other.avatar" size="default" shape="square" fit="cover" />
              <span class="ms-2">{{ other.accountName }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center mx-2">
          <!-- 愛心按鈕：stop 阻止事件冒泡，prevent 防止 link 預設行為 -->
          <div class="d-flex align-items-center me-4" style="cursor: pointer;"
            @click.stop.prevent="toggArticleLike(advertorial)">
            <i :class="[
              'bi',
              advertorial.liked ? 'bi-heart-fill text-danger' : 'bi-heart-fill text-muted',
              'fs-5'  // 加上大小
            ]"></i>
            <span class="ms-1">{{ advertorial.likeCount }}</span>
          </div>
          <!-- 留言按鈕 -->
          <div class="d-flex align-items-center me-4">
            <i class="bi bi-chat-square fs-5"></i>
            <span class="ms-1">{{ advertorial.commentCount }}</span>
          </div>
          <!-- 收藏按鈕 -->
          <div class="d-flex align-items-center" style="cursor: pointer;">
            <i class="bi bi-bookmark fs-5"></i>
          </div>
        </div>
      </div>
      <div class="mt-3 bg-light">
        <div v-for="(comment, idx) in comments" :key="idx" class="comment-card border-0 border-bottom px-3 pb-2 pt-4">
          <div class="d-flex justify-content-between align-items-start bg-light">
            <!-- 左側：頭像 + 留言 -->
            <div class="d-flex">
              <!-- 頭像 -->
              <div class="flex-shrink-0">
                <el-avatar :src="comment.avatar || circleUrl" shape="circle" fit="cover" style="height: 40px" />
              </div>

              <!-- 留言內容 -->
              <div class="ms-3 text-start">
                <div style="height: 40px">
                  <strong class="d-block">{{ comment.accountName }}</strong>
                </div>
                <div class="">
                  <p style="font-size: 16px;">{{ comment.content }}</p>
                </div>
                <div class="mt-3">
                  <strong class="text-muted">B{{ idx + 1 }}・{{ comment.date }}</strong>
                </div>
              </div>
            </div>

            <!-- 右側：操作按鈕 -->
            <div class="d-flex align-items-center text-muted">
              <div class="d-flex align-items-center me-4" style="cursor: pointer;"
                @click.stop.prevent="toggCommentLike(comment)">
                <i :class="[
                  'bi',
                  comment.liked ? 'bi-heart-fill text-danger' : 'bi-heart-fill text-muted',
                  'fs-5'  // 加上大小
                ]"></i>
                <span class="ms-1">{{ comment.likeCount }}</span>
              </div>
              <span><i class="bi bi-three-dots-vertical"></i></span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 mt-2 sticky-bottom"
        style="background-color: white; border-top: 1px solid #dee2e6; z-index: 1000; width: 100%; bottom: 0;">
        <!-- 未展開時的簡單輸入框 -->
        <div v-if="!isCommentExpanded" @click="expandComment" class="d-flex align-items-center simple-comment-box">
          <div class="">
            <el-avatar :src="account.avatar || circleUrl" size="default" class="mx-2" shape="circle" fit="cover" />
          </div>
          <div class="fake-input flex-grow-1 d-flex align-items-center ">
            留言......
          </div>
        </div>
        <div v-else>
          <div class="expand-toggle-btn" @click="toggleExpandMode">
            <i :class="[isFullExpand ? 'el-icon-arrow-down' : 'el-icon-arrow-up']"></i>
          </div>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center">
              <div class="">
                <el-avatar :src="account.avatar || circleUrl" size="default" class="mx-2" shape="circle" fit="cover" />
              </div>
              <div class="text-start">
                <strong class="d-block">{{ account.accountName }}</strong>
                <small class="d-block text-muted">{{ currentDate }}</small>
              </div>
            </div>
          </div>
          <div class="d-flex mt-2">
            <el-input v-model="newComment" placeholder="輸入留言..." type="textarea" :rows="isFullExpand ? 50 : 5"
              maxlength="200" show-word-limit />
          </div>
          <div class="d-flex mt-2 justify-content-end">
            <div class="d-flex justify-content-center mt-2">
              <el-button plain size="large" @click="cancelComment">
                取消
              </el-button>
              <el-button type="primary" size="large" @click="submitComment" :disabled="!newComment.trim()">
                送出
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="mt-5 text-white">找不到業配文，有緣再相見</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { ElCard, ElAvatar } from 'element-plus'
import type { Advertorial, Comment, Account } from '@/types/baseType'
import baseApi from '@/service/api'
import Lee from '@/assets/image/user/李毅誠.jpg'

const isCommentExpanded = ref(false)
const newComment = ref('')
const commentInputRef = ref(null)
const isFullExpand = ref(false)
const comments = ref<Comment[]>([]);
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
const advertorial = ref<Advertorial | null>(null);
const error = ref<string | null>(null)
const isReady = ref(false)
const currentDate = ref(null)
const checkCurrentDateTimeFrequency = 1000
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const account = ref<Account>({
  avatar: Lee,
  accountId: 'Lee1',
  accountName: '李毅誠',
  name: '',
  type: 'user',
  introduction: ''
})
let intervalId

function toggleExpandMode() {
  isFullExpand.value = !isFullExpand.value
}
function updateTime() {
  currentDate.value = new Date().toLocaleString('zh-Hant', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
// 展開留言輸入框
function expandComment() {
  isCommentExpanded.value = true
  nextTick(() => {
    // 聚焦輸入框
    if (commentInputRef.value) {
      commentInputRef.value.focus()
    }
  })
}
function cancelComment() {
  newComment.value = ''; // 清空輸入內容
  isCommentExpanded.value = false; // 收起輸入區
}

async function submitComment() {
  if (!newComment.value.trim()) return;

  try {
    // 假設您有一個 API 可以提交留言
    await baseApi.post('/create_advertorial_comment', {
      advertorialId: props.id,
      content: newComment.value,
      author: account.value.accountName,
      date: new Date().toLocaleString()
    });
    // 重新獲取留言數據
    await getAdvertorialComment(props.id);
    isCommentExpanded.value = false
    // 清空輸入框
    newComment.value = '';

    // 通知父組件留言已提交
  } catch (e: any) {
    error.value = e.message;
    console.error('提交留言失敗:', e);
  }
}

async function getAdvertorialComment(id) {
  try {
    const res = (await baseApi.get(`/advertorial_comment/${id}`))
    comments.value = res.data.data
    console.log("getAdvertorialComment")
  } catch (e: any) {
    error.value = e.message
  }
}

function toggArticleLike(advertorial: Advertorial) {
  if (advertorial.liked) {
    advertorial.likeCount--
  } else {
    advertorial.likeCount++
  }
  advertorial.liked = !advertorial.liked
}

function toggCommentLike(comment: Comment) {
  if (comment.liked) {
    comment.likeCount--
  } else {
    comment.likeCount++
  }
  comment.liked = !comment.liked
}

// 移除了留言相關的變數和函數，因為這些會由 CommentSection 組件處理
async function getAdvertorialDeal(id) {
  try {
    const res = (await baseApi.get(`/advertorial/${id}`))
    advertorial.value = res.data.data
  } catch (e: any) {
    error.value = e.message
  }
}

onMounted(async () => {
  updateTime() // 初始立即設定時間
  intervalId = setInterval(updateTime, checkCurrentDateTimeFrequency)
  await getAdvertorialDeal(props.id);
  await getAdvertorialComment(props.id);
  isReady.value = true
})
onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped></style>