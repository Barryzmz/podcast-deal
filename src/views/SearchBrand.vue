<template>
  <div class="row mx-0 mb-0 px-0 bg-dark h-100">
    <div class="col-2">
      <div class="row pt-4 ">
        <div class="col-12 ms-auto ">
          <el-menu
            default-active="0"
            :router="false"
            v-model:active-index="activeIndex"
            class="el-menu-vertical-demo"
            @select="handleSelect"
          >
            <template v-for="item in categoryData" :key="item.id">
              <!-- 如果有 children，就渲染子選單 -->
              <el-sub-menu
                v-if="item.children"
                :index="item.id"
              >
                <template #title>
                  <span>{{ item.label }}</span>
                </template>
                <el-menu-item
                  v-for="child in item.children"
                  :key="child.id"
                  :index="child.id"
                >
                  {{ child.label }}
                </el-menu-item>
              </el-sub-menu>

              <!-- 否則就渲染單一選項 -->
              <el-menu-item
                v-else
                :index="item.id"
              >
                {{ item.label }}
              </el-menu-item>
            </template>
          </el-menu>
        </div>
      </div>
      
    </div>
    <div class="col-8 ">
      <div class="d-flex flex-wrap gap-4 p-3 ms-3">
        <div
          v-for="podcaster in podcasters"
          :key="podcaster.id"
          class="d-flex flex-column align-items-center bg-dark p-0 "
          style="width: 200px;"
        >
          <RouterLink 
            :to ="{
              name: 'profileAndDealPage',
              params:{
                userid: podcaster.id
              }
            }"

            class="text-decoration-none"
          >
            <div class="d-flex flex-column align-items-center bg-dark p-0">
              <img
                :src="podcaster.image"
                :alt="podcaster.podcasterName"
                style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 16px;"
              />
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
</template>

<script setup>
import { ref } from 'vue'
import avatar1 from '@/assets/image/podcaster/呱吉.jpg'
import avatar2 from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
import avatar3 from '@/assets/image/podcaster/百靈果.jpg'
import avatar4 from '@/assets/image/podcaster/股癌.jpg'
import avatar5 from '@/assets/image/podcaster/蔡阿嘎543.jpg'
import avatar6 from '@/assets/image/podcaster/唐洋雞酒屋.jpg'
import avatar7 from '@/assets/image/podcaster/好味小姐.jpg'
import avatar8 from '@/assets/image/podcaster/瘋女人聊天室.jpg'
import avatar9 from '@/assets/image/podcaster/吳淡如人生實用商學院.jpg'
import avatar10 from '@/assets/image/podcaster/達康還在講新世界.jpg'
import avatar11 from '@/assets/image/podcaster/澀情守門員.jpg'
import templatead1 from '@/assets/image/範例外部廣告1.png'
import templatead2 from '@/assets/image/範例外部廣告2.png'
const podcasters = ref([
  {
    id: 1,
    podcasterName: '呱吉',
    host: '呱吉&采翎',
    image: avatar1,
  },
  {
    id: 2,
    podcasterName: '台灣通勤第一品牌',
    host: '台灣通勤第一品牌',
    image: avatar2,
  },
  {
    id: 3,
    podcasterName: '百靈果 News',
    host: 'Bailingguo News',
    image: avatar3,
  },
  {
    id: 4,
    podcasterName: '股癌',
    host: '謝孟恭',
    image: avatar4,
  },
  {
    id: 5,
    podcasterName: '蔡阿嘎543',
    host: '蔡阿嘎',
    image: avatar5,
  },
  {
    id: 6,
    podcasterName: '唐洋雞酒屋',
    host: '唐綺揚',
    image: avatar6,
  },
  {
    id: 7,
    podcasterName: '好味小姐開束縛我還你原形',
    host: '好味小姐',
    image: avatar7,
  },
  {
    id: 8,
    podcasterName: '瘋女人聊天室',
    host: 'Apple 泰辣 G蛋布丁',
    image: avatar8,
  },
  {
    id: 9,
    podcasterName: '吳淡如人生實用商學院',
    host: '吳淡如',
    image: avatar9,
  },
  {
    id: 10,
    podcasterName: '澀情守門員',
    host: '史搞/小迪/阿強',
    image: avatar11,
  }
])

const categoryData = ref([
  { label: '🔥排行榜前十名', id: "0" },
  { label: '🔥訂閱前十名',   id: "1" },
  {
    label: '藝術與娛樂',
    id: "2",
    children: [
      { label: '藝術與娛樂', id: "2-1" },
      { label: '影視作品', id: "2-2" },
      { label: '書籍文學', id: "2-3" },
      { label: '喜劇', id: "2-4" },
      { label: '名人', id: "2-5" },
      { label: '流行文化', id: "2-6" },
      { label: '故事', id: "2-7" },
    ],
  },
  {
    label: '商業與科技',
    id: "3",
    children: [
      { label: '商業與科技', id: "3-1" },
      { label: '商業', id: "3-2" },
      { label: '職業', id: "3-3" },
      { label: '經濟學', id: "3-4" },
      { label: '金融', id: "3-5" },
      { label: '行銷', id: "3-6" },
      { label: '科技', id: "3-7" },
    ],
  },
  {
    label: '教育',
    id: "4",
    children: [
      { label: '教育', id: "4-1" },
      { label: '政府', id: "4-2" },
      { label: '歷史', id: "4-3" },
      { label: '語言', id: "4-4" },
      { label: '哲學', id: "4-5" },
      { label: '科學', id: "4-6" },
    ],
  },
  {
    label: '遊戲',
    id: "5",
    children: [
      { label: '遊戲', id: "5-1" },
      { label: '電玩', id: "5-2" },
    ],
  },
  {
    label: '生活與健康',
    id: "6",
    children: [
      { label: '美容', id: "6-1" },
      { label: '時尚', id: "6-2" },
      { label: '健身與營養', id: "6-3" },
      { label: '餐飲', id: "6-4" },
      { label: '健康', id: "6-5" },
      { label: '嗜好', id: "6-6" },
      { label: '生活風格', id: "6-7" },
      { label: '冥想Podcast', id: "6-8" },
      { label: '育兒', id: "6-9" },
      { label: '關係', id: "6-10" },
      { label: '自我關懷', id: "6-11" },
      { label: '性', id: "6-12" },
    ],
  }
])

const activeIndex = ref('0')

function handleSelect(index, indexPath) {
  console.log('你點中了 index：', index)
  console.log('完整路徑為：', indexPath)
  // 在這裡可以依 index 做後續操作
}

function handlePageChange(page) {
  console.log('切換到第', page, '頁')
}
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

.collapse-button{
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
  margin-bottom: 0;         /* 和 collapse 紧贴 */
  width: 100%;
  height: 40px;             /* 根据你的情况微调 */
  line-height: 40px;        /* 文本垂直居中 */
  border-radius: 0;
  box-shadow: none;
  background-color: #fff;   /* 或者你实际折叠 header 的背景色 */
  padding: 0 16px;          /* 根据你的主题间距调整 */
  display: flex;
  align-items: center;
  justify-content: start;
}
</style>
