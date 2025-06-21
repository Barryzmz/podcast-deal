<template>
  <div class="min-vh-100 p-0 bg-dark">
    <div>
      <FrontNavbar />
    </div>
    <!-- 這裡放你的內容 -->

    <RouterView />
  </div>
  <FrontFooter v-if="showFooter"/>
  <el-backtop :right="50" :bottom="50" style="color: #000;"/>
</template>

<script setup lang="ts">
import FrontNavbar from '../components/FrontNavbar.vue'
import FrontFooter from '../components/FrontFooter.vue'
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const noFooterRoutes = ['login', 'Advertorial']

const showFooter = computed(() => !noFooterRoutes.includes(route.name as string))

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.min-vh-100 {
  min-height: 100vh;
}

</style>
