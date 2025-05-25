<template>
  <div class="container-fluid bg-light px-0">
    <div class="p-0 bg-light">
      <div
        class="pt-3 pb-2 px-2 sticky-top"
        style="top: 3.5rem; background-color: white; border-bottom: 1px solid #dee2e6;"
      >
        <h4>廣告資訊</h4>
      </div>
      <router-link
        v-for="post in pagedPosts"
        :key="post.id"
        :to="{ name: 'Advertorial', params: { id: post.id } }"
        class="text-decoration-none d-block mb-4"
      >
        <el-card
          class="shadow-sm rounded-4 border-0"
          :body-style="{ padding: '1.2rem' }"
        >
          <div class="d-flex align-items-center mb-3">
            <el-avatar
              :src="post.avatar"
              size="default"
              class="me-3 mx-2"
              shape="circle"
              fit="cover"
            />
            <div class="text-start">
              <strong class="d-block">{{ post.podcasterName }}</strong>
              <small class="text-muted">#{{ post.available }}</small>
            </div>
            <div class="text-end ms-auto">
              <p class="d-block">{{ post.dateTime }}</p>
            </div>
          </div>
          <h5 class="fw-bold mb-2 text-center">{{ post.title }}</h5>
          <p class="mb-3 text-secondary text-start">{{ post.content }}</p>
          <div class="d-flex justify-content-start mx-2 row">
            <div class="col-1"><i class="bi bi-heart"></i></div>
            <div class="col-1"><i class="bi bi-chat-square"></i></div>
            <div class="col-1"><i class="bi bi-bookmark"></i></div>
          </div>
        </el-card>
      </router-link>
      <div class="d-flex justify-content-center bg-dark py-5">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="posts.length"
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, toRefs, defineOptions } from 'vue'
import { ElCard, ElAvatar } from 'element-plus'
import { RouterLink} from 'vue-router';
import type { Advertorial } from '@/types/advertorial'

const props = defineProps<{
  advertorial: Advertorial[]
}>()
const { advertorial } = toRefs(props)
const posts = ref(advertorial)

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return posts.value.slice(start, start + pageSize.value)
})
const currentPage = ref(1)
const pageSize    = ref(10)

function onPageChange(page: number) {
  currentPage.value = page
}
onMounted(() => {
  // 等 DOM 渲染完毕后再滚到顶端
  console.log('AdvertorialList onMounted');
  
})
defineOptions({
  name: 'AdvertorialList'
})
</script>

<style scoped>
.square-avatar {
  border-radius: 0 !important; /* 移除圓角，讓它變成方形 */
  overflow: hidden; /* 確保圖片不會溢出 */
}

</style>
