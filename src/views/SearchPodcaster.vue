<template>
  <div class="row mx-0 mb-0 px-0 bg-dark h-100">
    <div class="col-2">
      <div class="row pt-4 ">
        <div class="col-12 ms-auto ">
          <el-menu default-active="0" :router="false" v-model:active-index="activeIndex" class="el-menu-vertical-demo"
            @select="handleSelect">
            <template v-for="item in categoryData" :key="item.id">
              <!-- 如果有 children，就渲染子選單 -->
              <el-sub-menu v-if="item.children" :index="item.id">
                <template #title>
                  <div @click.stop="handleSelect(item.id)" class="menu-title-clickable">
                    {{ item.name }}
                  </div>
                </template>
                <el-menu-item v-for="child in item.children" :key="child.id" :index="child.id">
                  {{ child.name }}
                </el-menu-item>
              </el-sub-menu>

              <!-- 否則就渲染單一選項 -->
              <el-menu-item v-else :index="item.id">
                {{ item.name }}
              </el-menu-item>
            </template>
          </el-menu>
        </div>
      </div>

    </div>
    <div class="col-8 ">
      <div class="d-flex flex-wrap gap-4 p-3 ms-3">
        <div v-for="podcaster in podcasters" :key="podcaster.accountId"
          class="d-flex flex-column align-items-center bg-dark p-0 " style="width: 200px;">
          <RouterLink :to="{
            name: 'profileAndDealPage',
            params: {
              accountId: podcaster.accountId
            }
          }" class="text-decoration-none">
            <div class="d-flex flex-column align-items-center bg-dark p-0">
              <img :src="podcaster.image" :alt="podcaster.podcasterName"
                style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 16px;" />
              <p class="mt-2 mb-0 w-100 text-start fw-bold" style="font-size: 1rem; color: white;">
                {{ podcaster.podcasterName }}
              </p>
              <p class="mt-0 mb-0 w-100 text-start fw-bold" style="font-size: 0.8rem; color: white;">
                {{ podcaster.host }}
              </p>
            </div>
          </RouterLink>

        </div>
      </div>
    </div>
    <div class="col-2">
      <el-image :src=templatead1 fit="cover" style="width: 100%; height: auto; border-radius: 8px;" />
      <el-image :src=templatead2 fit="cover" style="width: 100%; height: auto; border-radius: 8px;" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import baseApi from '@/service/api'
import templatead1 from '@/assets/image/範例外部廣告1.png'
import templatead2 from '@/assets/image/範例外部廣告2.png'

const podcasters = ref([])
const categoryData = ref([])
const activeIndex = ref('0')
const idToItemMap = new Map()

const handleSelect = (id) => {
  console.log('你選了 id:', id)
  const item = idToItemMap.get(id)
  if (!item) return

  console.log('你選了整個物件：', item)
}

function handlePageChange(page) {
  console.log('切換到第', page, '頁')
}

function flattenCategory(data) {
  data.forEach(item => {
    idToItemMap.set(item.id, item)
    if (item.children) {
      item.children.forEach(child => idToItemMap.set(child.id, child))
    }
  })
}

onMounted(async () => {
  const podcaster_category_result = (await baseApi.get('/podcaster_category')).data
  const fisrtCategory = podcaster_category_result.data[0]
  const podcaster_list_result = (await baseApi.post('/podcaster_list', {
    category: fisrtCategory
  })).data
  categoryData.value = podcaster_category_result.data
  podcasters.value = podcaster_list_result.data
  flattenCategory(categoryData.value)
})

</script>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
}

.square-avatar {
  margin-bottom: 0;
  border-radius: 0 !important;
  overflow: hidden;
}

.collapse-button {
  /* 去掉默认边框和阴影 */
  border: none;
  box-shadow: none;
}

.filter-tree {
  width: 240px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 8px;
}
</style>

<style>
.custom-collapse .el-collapse-item__wrap,
.custom-collapse .el-collapse-item__content {
  padding: 0 !important;
}

.collapse-like-card {
  cursor: pointer;
  margin-bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 0;
  box-shadow: none;
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>
