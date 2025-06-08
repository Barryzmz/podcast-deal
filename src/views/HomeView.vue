<template>
  <div class="container-fluid">
    <div class="row justify-content-center"> <!-- 加上 row -->
      <div class="col-10 d-flex justify-content-center mx-0 px-0">
        <div id="carouselExampleIndicators" class="carousel slide w-100" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="@/assets/image/banner_advertiser.png" class="image-cover" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/image/banner_podcaster.png" class="image-cover" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/image/banner_singleAdvertiser.png" class="image-cover" alt="...">
            </div>
            <div class="carousel-item">
              <img src="@/assets/image/banner_singlePodcaster.png" class="image-cover" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
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
import homeview1 from '@/assets/image/homeview1.png'
import homeview2 from '@/assets/image/homeview2.png'
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
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.bg-dark-transparent {
  background-color: rgba(0, 0, 0, 0.5);
  /* 黑色 + 50% 透明 */
}

.image-cover {
  object-fit: cover;
  width: 100%;
  height: 600px;
}

.coupon-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-control-prev,
.carousel-control-next {
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1 !important;
  transition: background-color 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
  width: 20px;
  height: 20px;
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
</style>
