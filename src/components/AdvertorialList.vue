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
        v-for="advertorial in advertorialList"
        :key="advertorial.id"
        :to="{ name: 'Advertorial', params: { id: advertorial.id } }"
        class="text-decoration-none d-block mb-4"
      >
        <el-card
          class="shadow-sm rounded-4 border-0"
          :body-style="{ padding: '1.2rem' }"
        >
          <div class="d-flex align-items-center mb-3">
            <el-avatar
              :src="advertorial.avatar"
              size="default"
              class="me-3 mx-2"
              shape="square"
              fit="cover"
            />
            <div class="text-start">
              <strong class="d-block">{{ advertorial.name }}</strong>
              <small class="text-muted">#{{ advertorial.available }}</small>
            </div>
            <div class="d-flex align-items-center ms-auto">
              <!-- 日期 -->
              <span v-if="advertorial.startDate || advertorial.endDate" class="text-muted small me-3">
                {{ advertorial.startDate }} ~ {{ advertorial.endDate }}
              </span>
              <!-- 三點選單 -->
              <el-dropdown
                trigger="click"
                @command="onCommand(advertorial, $event)"
              >
                <span
                  class="cursor-pointer p-2 fs-5"
                  @click.stop.prevent
                >
                  <i class="bi bi-three-dots-vertical"></i>
                </span>
                <template #dropdown>
                  <el-dropdown-item command="report" class="text-danger">
                    檢舉
                  </el-dropdown-item>
                  <el-dropdown-item command="hide">
                    隱藏這篇
                  </el-dropdown-item>
                </template>
              </el-dropdown>
            </div>
          </div>
          <h5 class="fw-bold mb-2 text-center">{{ advertorial.title }}</h5>
          <p class="mb-3 text-secondary text-start">{{ advertorial.content }}</p>
          <div v-if="advertorial.partners && advertorial.partners.length" class="mb-4">
            <div class="text-start">
              <strong>合作夥伴：</strong>
            </div>
            <div class="flex-wrap mt-2">
              <div
                v-for="other in advertorial.partners"
                :key="other.id"
                class="d-flex align-items-start me-4 mb-2"
              >
                <el-avatar
                  :src="other.avatar"
                  size="default"
                  shape="square"
                  fit="cover"
                />
                <span class="ms-2">{{ other.name }}</span>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center mx-2" >
            <!-- 愛心按鈕：stop 阻止事件冒泡，prevent 防止 link 預設行為 -->
            <div
              class="d-flex align-items-center me-4"
              style="cursor: pointer;"
              @click.stop.prevent="toggleLike(advertorial)"
            >
              <i :class="['bi', advertorial.liked ? 'bi-heart-fill text-danger' : 'bi-heart']"></i>
              <span class="ms-1">{{ advertorial.likeCount }}</span>
            </div>
            <!-- 留言按鈕 -->
            <div
              class="d-flex align-items-center me-4"
              style="cursor: pointer;"
            >
              <i class="bi bi-chat-square"></i>
              <span class="ms-1">{{ advertorial.commentCount }}</span>
            </div>
            <!-- 收藏按鈕 -->
            <div
              class="d-flex align-items-center"
              style="cursor: pointer;"
            >
              <i class="bi bi-bookmark"></i>
            </div>
          </div>
        </el-card>
      </router-link>
      <div class="d-flex justify-content-center bg-dark py-5">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="advertorials.length"
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
import { 
  ElCard, 
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem } from 'element-plus'
import { RouterLink} from 'vue-router';
import type { Advertorial } from '@/types/advertorial'

const props = defineProps<{
  advertorial: Advertorial[]
}>()
const { advertorial } = toRefs(props)
const advertorials = ref(advertorial)

const advertorialList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return advertorials.value.slice(start, start + pageSize.value)
})
const currentPage = ref(1)
const pageSize    = ref(10)

function onPageChange(page: number) {
  currentPage.value = page
}

function onCommand(ad: Advertorial, action: string) {
  switch (action) {
    case 'report':
      // 打開檢舉對話框
      console.log('檢舉', ad.id)
      break
    case 'hide':
      // 隱藏這篇貼文
      console.log('隱藏', ad.id)
      break
  }
}

function toggleLike(advertorial: Advertorial) {
  if (advertorial.liked) {
    advertorial.likeCount--
  } else {
    advertorial.likeCount++
  }
  advertorial.liked = !advertorial.liked
}
function openComments(advertorial) {
  // your comment-panel logic…
}
function collectvertorial(advertorial) {
  // your share logic…
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
