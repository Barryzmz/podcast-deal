<template>
  <div class="container-fluid">
    <div class="row position-relative">
      <swiper :navigation="true" :pagination="{ clickable: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules"
        class="homeViewSwiper">
        <swiper-slide>
          <img src="@/assets/image/banner_advertiser.png" alt="Slide 1" class="slide-img" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/banner_podcaster.png" alt="Slide 2" class="slide-img" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/image/banner_singlePodcaster.png" alt="Slide 3" class="slide-img" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="container ">
    <div data-aos="fade-up" class="row py-5 py-lg-9 px-4 g-4 g-lg-3 text-white">
      <h3 class="title-border-dark position-relative text-center pb-5 mb-0">協助品牌與Podcaster打造曝光聲音廣告</h3>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8 d-flex justify-content-center">
          <div class="Txt text-center text-lg-start">
            <h2 class="titleBox">
              <span class="text-white">Podcaster 與 品牌方共創雙贏機會</span>
            </h2>

            <div class="text mt-5 mb-4 text-white">
              <h4>合作 Podcaster，精準觸及受眾，提升聲量銷售</h4>
              <span>在這裡，觀眾可以簡單獲取品牌優惠與發現其他優質Podcaster。</span>
            </div>
            <a href="./bookClub.html" class="btn btn-primary px-5 py-3">查看一下</a>
          </div>
        </div>
        <div class="col-lg-4 pe-0">
          <img src="@/assets/image/homeview1.png" width="100%" alt="BOOK CLUB發起讀書會">
        </div>
      </div>
      <div class="row align-items-center mt-5">
        <div class="col-lg-4 ps-0">
          <img src="@/assets/image/homeview2.png" width="100%" alt="BOOK CLUB發起讀書會">
        </div>
        <div class="col-lg-8 d-flex justify-content-center">
          <div class="Txt text-center text-lg-start ">
            <h2 class="titleBox">
              <span class="text-white">流量數據分析</span>
            </h2>

            <div class="text mt-5 mb-4 text-white">
              <h4>掌握流量脈動</h4>
              <span>透過蒐集網站流量，圖表視覺化分析，評估合作機會，提升節目與行銷品質</span>
            </div>
            <a href="./bookClub.html" class="btn btn-primary px-5 py-3">查看一下</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="partner-marque mt-5 py-1 ">
      <div class="marquee d-flex align-items-center">
        <div v-for="(logo, index) in logos" :key="index" class="mx-2">
          <el-image :src="logo" fit="contain" alt="partner" style="width: 100px; height: 100px;" />
        </div>
        <div v-for="(logo, index) in logos" :key="index" class="mx-2">
          <el-image :src="logo" fit="contain" alt="partner" style="width: 100px; height: 100px;" />
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <h2 class="text-center mt-5 mb-3 text-white">選擇適合你的方案</h2>
    <div class="row g-4 d-flex justify-content-center pb-5">
      <!-- 免費方案 -->
      <div class="col-md-3">
        <div class="card h-100 shadow-sm">
          <div class="card-header text-center bg-white">
            <h5 class="card-title mb-0">免費方案</h5>
          </div>
          <div class="card-body d-flex flex-column">
            <h2 class="card-price text-dark text-start mb-3">NT$0<span class="fs-6">/月</span></h2>
            <ul class="list-unstyled mb-4 text-start">
              <li>✅ 基本優惠上架</li>
            </ul>
            <a href="#" class="btn btn-primary mt-auto">開始使用</a>
          </div>
        </div>
      </div>
      <!-- 專業方案 -->
      <div class="col-md-3">
        <div class="card h-100 shadow-sm">
          <div class="card-header text-center bg-white">
            <h5 class="card-title mb-0">基本方案</h5>
          </div>
          <div class="card-body d-flex flex-column">
            <h2 class="card-price text-dark text-start mb-3">NT$150<span class="fs-6">/月</span></h2>
            <ul class="list-unstyled mb-4 text-start">
              <li>✅ 基本優惠上架</li>
              <li>✅ 演算法靠前</li>
              <li>✅ 技術支援</li>
            </ul>
            <a href="#" class="btn btn-primary mt-auto">開始使用</a>
          </div>
        </div>
      </div>
      <!-- 企業方案 -->
      <div class="col-md-3">
        <div class="card h-100 shadow-sm">
          <div class="card-header text-center bg-white">
            <h5 class="card-title mb-0">升級方案</h5>
          </div>
          <div class="card-body d-flex flex-column">
            <h2 class="card-price text-dark text-start mb-3">NT$250<span class="fs-6">/月</span></h2>
            <ul class="list-unstyled mb-4 text-start">
              <li>✅ 基本優惠上架</li>
              <li>✅ 演算法靠前</li>
              <li>✅ 技術支援</li>
              <li>✅ 流量技術分析</li>
            </ul>
            <a href="#" class="btn btn-primary mt-auto">開始使用</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js" name="Home">
import { onMounted, ref } from 'vue'
import homeview1 from '@/assets/image/homeview1.png'
import homeview2 from '@/assets/image/homeview2.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import logo1 from '@/assets/image/advitiser/ASUS.png'
import logo2 from '@/assets/image/advitiser/fangzih.png'
import logo3 from '@/assets/image/advitiser/healthdaily.png'
import logo4 from '@/assets/image/advitiser/guliuguliu.jpg'
import logo5 from '@/assets/image/advitiser/nordvpn.png'
import logo6 from '@/assets/image/advitiser/Roichen.png'
import logo7 from '@/assets/image/advitiser/saholea.png'
import logo8 from '@/assets/image/advitiser/saily_esim.png'
import logo9 from '@/assets/image/advitiser/小磨坊.png'
import logo10 from '@/assets/image/advitiser/sony.png'
import logo11 from '@/assets/image/advitiser/眠豆腐.png'
import logo12 from '@/assets/image/advitiser/萬萬兩.png'
import logo13 from '@/assets/image/advitiser/翰方御品.png'
import logo14 from '@/assets/image/advitiser/zzsleeper.png'
import logo15 from '@/assets/image/advitiser/plain_me.png'
// const modules = [EffectFade, Autoplay, Pagination];
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15]
const modules = [Navigation, Pagination, Autoplay]
</script>

<style scoped>
.homeViewSwiper {
  width: 75vw;
  aspect-ratio: 16 / 9;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* 圖片滿版顯示 */
.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.partner-marque {
  overflow: hidden;
  position: relative;
}

.marquee {
  animation: scroll-left 40s linear infinite;
  width: max-content;
  display: flex;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

/* 響應式調整 */
@media (max-width: 1024px) {
  .homeViewSwiper {
    width: 90vw;
  }
}

@media (max-width: 600px) {
  .homeViewSwiper {
    width: 100vw;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
