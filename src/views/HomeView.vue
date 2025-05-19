<template>
  <div class="container-fluid">
    <div class="row justify-content-center"> <!-- 加上 row -->
      <div class="col-10 d-flex justify-content-center mx-0 px-0"> 
        <div id="carouselExampleIndicators" class="carousel slide w-100" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
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
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  
</template>

<script setup lang="js" name="Home">

const modules = [EffectFade, Autoplay, Pagination];
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
  object-fit: cover; /* 裁切填滿，不變形 */
  display: block;
}

.carousel-control-prev,
.carousel-control-next {
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.7); /* 半透明灰黑底 */
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1 !important; /* 防止 Bootstrap hover 時變透明 */
  transition: background-color 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(255, 255, 255, 0.7); /* hover 深一點 */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1); /* 讓白色箭頭更明顯（也可以不加） */
  width: 20px;
  height: 20px;
}
</style>
