<template>
  <nav class="navbar navbar-expand-lg navbar-dark" 
    :class="isScrolled ? 'fixed-top' : ''"
    style="background-color: #2C2C2C;"
    >
    <div class="container-fluid">
        <div class="col-3">
          <RouterLink 
            to="/"
            class="navbar-brand"
            :class="isScrolled ? 'text-white' : ''"
          >
            <img src="/logo_hands.png" alt="" class="img-fluid d-inline-block align-text-top mx-2" style="height: 30px;">
            <span class="me-3 d-lg-none">—</span>台灣優惠第一品牌
          </RouterLink>
        </div>
      
        <div class="col-6 d-flex justify-content-center" >
          <ul class="navbar-nav ">
            <RouterLink 
              to="/podcasterpage"
              class="navbar-brand"
              :class="isScrolled ? 'text-white' : ''"
              ><span class="me-3 d-lg-none">—</span>關於我們</RouterLink>
            <RouterLink 
              to="/podcaster"
              class="navbar-brand"
              :class="isScrolled ? 'text-white' : ''"
            ><span class="me-3 d-lg-none">—</span>Podcaster</RouterLink>
            <RouterLink 
              to="/brand"
              class="navbar-brand"
              :class="isScrolled ? 'text-white' : ''"
            ><span class="me-3 d-lg-none">—</span>廣告品牌</RouterLink>
          </ul>
        </div>

        <div class="col-3">
          <a href="#" class="position-relative me-3">
            <i class="bi bi-person-circle fs-4 text-white" ></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
              <span class="visually-hidden">account</span>
            </span>
          </a>
          <a href="#" class="position-relative me-3">
            <i class="bi bi-heart-fill fs-4 text-white"></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </a>
          <a href="#" class="position-relative">
            <i class="bi bi-cart-fill fs-4 text-white"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
              <span class="visually-hidden">items in cart</span>
            </span>
          </a>
        </div>
      </div>
  </nav>
</template>

<script setup>
import { ref, reactive, toRefs, toRef, computed, watch, onMounted, onBeforeUnmount  } from "vue";
import { RouterView, RouterLink} from 'vue-router';
import avatar1 from '/logo_hands.png'

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.nvbar-bg-init{
  background-color: rgb(234, 225, 211);
}
</style>