<template>
  <div class="mt-4 bg-light">
    <div class="card p-2 ">
      <!-- 你既有的貼文內容 -->
      <div class="text-start my-3">
        <h2 class="mb-1">{{ data.title }}</h2>
      </div>
      <div class="d-flex align-items-center">
        <img
          :src="data.imageUrl"
          alt="個人照片"
          class="rounded-circle me-3"
          style="width:50px; height:50px; object-fit:cover;"
        />
        <div class="text-start">
          <h5 class="mb-1">{{ data.podcasterName }}</h5>
          <p class="mb-0 text-muted">{{ data.name }}</p>
        </div>
      </div>
      <div>
        <p class="mt-3 text-start">{{ data.content }}</p>
      </div>
    </div>

    
    <!-- 留言列表 -->
    <div class="px-2 mt-3 pb-3 bg-light">
      <el-card
        v-for="(comment, idx) in comments"
        :key="idx"
        class="comment-card"
        :body-style="{ padding: '0.5rem 1rem' }"
      >
        <div class="d-flex align-items-center">
          <div class="">
            <el-avatar
              :src="comment.avatarUrl || circleUrl"
              size="default"
              class="mx-2"
              shape="circle"
              fit="cover"
            />
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
</template>

<script setup>
import { ref, onMounted, reactive, onBeforeUnmount, watch, toRefs  } from 'vue'
import { ElCard, ElAvatar } from 'element-plus'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import Lee from '@/assets/image/user/李毅誠.jpg'
import Hao from '@/assets/image/user/hao.jpg'
import lon from '@/assets/image/user/家倫.jpg'
import AdvertorialList from '@/components/AdvertorialList.vue'
import Advertorial from '@/components/Advertorial.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const isAtTop = ref(false)
// const props = defineProps<{ id: number }>()
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)

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
  },
)

const comments = ref([
  { author: '李毅誠', avatarUrl: Lee, content: '這又沒多少錢，用一下啦', date: '2025-05-18 10:00' },
  { author: '土城吟遊詩人', avatarUrl: Hao, content: '去日本的時候有用，推推推', date: '2025-05-18 11:30' },
  { author: '家倫', avatarUrl: lon, content: '好用一直用', date: '2025-05-18 13:30' },
  { author: '路人1', avatarUrl: null, content: '阿優，還不錯', date: '2025-05-18 13:30' },
  { author: '路人2', avatarUrl: null, content: '很棒', date: '2025-05-18 13:30' },
])

const emit = defineEmits(['submitComment'])

// 本地暫存新留言文字
const newComment = ref('')

// 當父組件傳入的 comments 改變時，若有需要可以做進一步處理
// watch(() => props.comments, (newVal) => {
//   // e.g. 滾動到最新一筆、重置表單之類
// })

</script>

<style scoped>
.comment-card {
  border-bottom: 1px solid #dee2e6;
}

</style>
