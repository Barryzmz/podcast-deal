<template>
  <div class="container-fluid bg-light px-0">
    <div class="p-0 bg-light">
      <div
        class="pt-3 pb-2 px-2 sticky-top"
        style="top: 3.5rem; background-color: white; border-bottom: 1px solid #dee2e6;"
      >
        <h4>廣告資訊</h4>
      </div>
      <el-card
        v-for="post in posts"
        :key="post.id"
        class="mb-4 shadow-sm rounded-4 border-0"
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
            <strong class="d-block">{{ post.username }}</strong>
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
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { ElCard, ElAvatar } from 'element-plus'

const props = defineProps({
  posts: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
.square-avatar {
  border-radius: 0 !important; /* 移除圓角，讓它變成方形 */
  overflow: hidden; /* 確保圖片不會溢出 */
}

</style>
