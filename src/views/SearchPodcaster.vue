<template>
  <div class="row mx-0 mb-0 px-0 bg-dark h-100">
    <div class="col-2">
      <div class="row pt-4 ">
        <div class="col-12 ms-auto ">
          <div class="accordion accordion-flush  sticky-top" id="accordionFlushExample" style="top: 5rem;">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  閒聊喜劇
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  新聞時事
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  財經知識
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  運動保健
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder</div>
              </div>
            </div>
          </div>
          
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
            to="/podcasterpage"
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
    <div class="col-2"></div>
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
    podcasterName: '達康還在講 新世界',
    host: '達康.com',
    image: avatar10,
  },
  {
    id: 11,
    podcasterName: '澀情守門員',
    host: '史搞/小迪/阿強',
    image: avatar11,
  }
])

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
  border-radius: 0 !important; /* 移除圓角，讓它變成方形 */
  overflow: hidden; /* 確保圖片不會溢出 */
}

</style>
