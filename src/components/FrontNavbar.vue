<template>
  <nav class="navbar navbar-expand-lg fixed-top " 
    :class="isScrolled ? 'navbar-dark bg-dark' : ''"
    >
    <div class="container-fluid">
        <div class="col-3">
          <RouterLink 
              to="/"
              class="navbar-brand"
            >
              <span class="me-3 d-lg-none">—</span>台灣優惠第一品牌
          </RouterLink>
        </div>
      
        <div class="col-6 d-flex justify-content-center" >
          <ul class="navbar-nav ">
            <RouterLink 
              to="/about"
              class="nav-link "
              ><span class="me-3 d-lg-none">—</span>關於我們</RouterLink>
            <!-- <li class="nav-item">
              <a class="nav-link " href="#">關於我們 </a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link " href="#">從品牌尋找</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">從Podcaster尋找</a>
            </li>
          </ul>
        </div>

        <div class="col-3">
          <a href="#" class="position-relative me-3">
            <i class="bi bi-person-circle fs-4" :class="isScrolled ? 'text-white' : 'text-dark'"></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
              <span class="visually-hidden">account</span>
            </span>
          </a>
          <a href="#" class="position-relative me-3">
            <i class="bi bi-heart-fill fs-4" :class="isScrolled ? 'text-white' : 'text-dark'"></i>
            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </a>
          <a href="#" class="position-relative">
            <i class="bi bi-cart-fill fs-4" :class="isScrolled ? 'text-white' : 'text-dark'"></i>
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

</style>