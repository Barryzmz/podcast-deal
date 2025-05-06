<template>
  <FrontNavbar />
  <div class="min-vh-100 ">
    <!-- 這裡放你的內容 -->
    
    <RouterView />
  </div>
  <FrontFooter />
</template>

<script setup lang="ts">
import FrontNavbar from '../components/FrontNavbar.vue'
import FrontFooter from '../components/FrontFooter.vue'
import { RouterView, RouterLink} from 'vue-router';

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.min-vh-100 {
  min-height: 100vh;
}

</style>
