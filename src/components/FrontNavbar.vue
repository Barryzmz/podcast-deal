<template>
  <nav class="navbar navbar-expand-lg navbar-dark" :class="isScrolled ? 'fixed-top' : ''"
    style="background-color: #2C2C2C;">
    <div class="container-fluid mx-3">
      <div class="col-2">
        <RouterLink to="/" class="navbar-brand" :class="isScrolled ? 'text-white' : ''">
          <img src="/logo_hands.png" alt="" class="img-fluid d-inline-block align-text-top mx-2" style="height: 30px;">
          <span class="me-3 d-lg-none">—</span>台灣優惠第一品牌
        </RouterLink>
      </div>

      <div class="col-6 d-flex justify-content-center">
        <ul class="navbar-nav ">
          <RouterLink to="/about" class="navbar-brand" :class="isScrolled ? 'text-white' : ''"><span
              class="me-3 d-lg-none">—</span>關於我們</RouterLink>
          <RouterLink to="/podcaster" class="navbar-brand" :class="isScrolled ? 'text-white' : ''"><span
              class="me-3 d-lg-none">—</span>Podcaster</RouterLink>
          <RouterLink to="/brand" class="navbar-brand" :class="isScrolled ? 'text-white' : ''"><span
              class="me-3 d-lg-none">—</span>廣告品牌</RouterLink>
        </ul>
      </div>

      <div class="col-2 d-flex justify-content-end">
        <div>
          <div v-if="!isLoggedIn" class="py-0">
            <RouterLink to="/login" class="text-decoration-none">
              <button class="btn btn-outline-light d-flex align-items-center gap-2 rounded-pill px-3 py-0">
                <i class="bi bi-person fs-5"></i>
                登入
              </button>
            </RouterLink>
          </div>
          <div v-else>
            <div class="d-flex align-items-center gap-3">
              <RouterLink to="/NewAdvertorial" class="text-decoration-none">
                <button class="btn btn-outline-light d-flex align-items-center gap-2 rounded-pill px-3 py-0">
                  <i class="bi bi-plus-lg fs-5 "></i>
                  建立
                </button>
              </RouterLink>
              
              <div class="dropdown dropdown">
                <button class="btn dropdown-toggle p-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  <span class="cursor-pointer m-0">
                    <el-avatar :src="accountProfile.image || circleUrl"  shape="circle" fit="cover" />
                  </span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li>
                    <RouterLink to="/login" class="dropdown-item">
                      <div class=" d-flex align-items-center gap-2 pe-4">
                        <i class="bi bi-person-badge fs-4"></i>
                        <span>查看個人檔案</span>
                      </div>
                    </RouterLink>
                  </li>
                  <li>
                    <div class="dropdown-item d-flex align-items-center gap-2 pe-4">
                      <i class="bi bi-gear-fill fs-4"></i>
                      <span>設定</span>
                    </div>
                  </li>
                  <li>
                    <RouterLink to="/login" class="dropdown-item">
                      <div class=" d-flex align-items-center gap-2 pe-4">
                        <i class="bi bi-box-arrow-right fs-4"></i>
                        <span>登出</span>
                      </div>
                    </RouterLink>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink, useRouter } from 'vue-router';
import avatar1 from '/logo_hands.png'
import commuteforme from '@/assets/image/podcaster/台灣通勤第一品牌.jpg'
const router = useRouter()
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};
const isLoggedIn = ref(true);
const circleUrl = ref(
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
)
const accountProfile = ref({
  accountId: 'commuteImg',
  accountName: '台灣通勤第一品牌',
  name: '',
  image: commuteforme,
  type: '',
  introduction: ''
})

function handleCommand(command) {
  switch (command) {
    case 'profile':
      router.push('/profile')
      break
    case 'settings':
      router.push('/settings')
      break
    case 'logout':
      // 清除登入狀態、導向登入頁等
      isLoggedIn.value = false
      router.push('/login')
      break
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nvbar-bg-init {
  background-color: rgb(234, 225, 211);
}

/* .cursor-pointer {
  cursor: pointer;
} */

/* button:focus {
  outline: none;
} */
</style>

<style></style>