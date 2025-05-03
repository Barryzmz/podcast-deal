<template>
  <FrontNavbar />
  <div style="height: 100vh;">
    <!-- 這裡放你的內容 -->
    
    <router-view></router-view>
  </div>
  <FrontFooter />
</template>

<script setup lang="ts">
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontFooter from '@/components/FrontFooter.vue'
import { RouterView } from 'vue-router';

</script>

<style scoped>
.read-the-docs {
  color: #888;
}

</style>
