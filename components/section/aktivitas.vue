<template>
  <section id="aktivitas" class="w-full h-screen bg-utama flex flex-col justify-end">
    <!-- Carousel -->
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true, el: '.custom-pagination' }"
      navigation
      class="w-full h-full"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <div
          class="w-full h-full bg-cover bg-center justify-center"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </SwiperSlide>
    </Swiper>

    <!-- Wrapper teks + pagination -->
<div class="flex flex-col items-center justify-center mb-12 space-y-4 text-center text-white">
  <!-- pagination pindah ke atas judul -->
  <div class="custom-pagination flex justify-center space-x-3 w-full"></div>

  <div>
    <h2 class="text-2xl md:text-4xl font-bold">Nikmati Wahana Seru di</h2>
    <h1 class="text-4xl md:text-6xl font-extrabold text-utama-text drop-shadow-lg">
      HOMPIMPLAY
    </h1>
  </div>
</div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  'https://source.unsplash.com/1600x900/?themepark',
  'https://source.unsplash.com/1600x900/?rollercoaster',
  'https://source.unsplash.com/1600x900/?carousel',
]
</script>

<style scoped>
/* Bullet default */
.swiper-pagination-bullet {
  width: 14px !important;
  height: 14px !important;
  background: transparent !important;
  border: 2px solid white !important;
  opacity: 1 !important;
  transition: all 0.3s ease;
}

/* Bullet aktif */
.swiper-pagination-bullet-active {
  background: #a78bfa !important; /* ungu-terang */
  border-color: #f5f5f5 !important; /* putih */
}
</style>
