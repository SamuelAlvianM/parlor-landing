<template>
  <section id="aktivitas" class="w-full h-[94vh] bg-utama flex flex-col scroll-mt-24">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      }"
      class="w-full h-full relative"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <div
          class="w-full  h-[600px] bg-cover rounded-b-[10%] bg-center"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </SwiperSlide>
      
      <!-- Custom Navigation Buttons -->
      <div class="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <Icon name="heroicons:chevron-left" class="w-6 h-6 text-white" />
      </div>
      <div class="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <Icon name="heroicons:chevron-right" class="w-6 h-6 text-white" />
      </div>
    </Swiper>
    
    <div class="flex flex-col justify-center mb-16 space-y-4 text-center text-white">
        <div class="text-xl md: text-lg font-bold"> Parlor Hills </div>
        <div>
          <h2 class="text-2xl md:text-4xl font-bold">Nikmati Wahana Seru di</h2>
          <h1 class="text-4xl md:text-6xl font-extrabold text-utama-text drop-shadow-lg">
            HOMPIMPLAY
          </h1>
        </div>
      </div>
      <!-- <pre>
        INI DATA
        {{ data }}
      </pre> -->
    </section>
</template>

<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  'https://i.pinimg.com/1200x/8c/8d/b6/8c8db63310d693035b595bc0c60a0dbd.jpg',
  'https://i.pinimg.com/736x/74/20/95/742095aa447be2db79786faef2a5562a.jpg',
  '/images/parlor-image/wahana/p-profesi.png',
  'https://i.pinimg.com/1200x/6b/f5/a6/6bf5a6c1b991e8b75af6ac73fe647486.jpg',
  'https://i.pinimg.com/1200x/7d/19/5c/7d195c4db702712c755cc29b260c4fcd.jpg'
]


</script>

<style scoped>
:deep(.swiper) {
  position: relative; /* pastikan wrapper swiper relative */
}
/* Custom bullet styles - default inactive */
:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  border: 2px solid var(--ui-primary);
  border-color: var(--ui-primary);
  background: var(--color-utama); /* bg-utama */
  opacity: 0.6;
  border-radius: 50%;
}

/* Active bullet */
:deep(.swiper-pagination-bullet-active) {
  background: var(--color-ungu-terang);
  opacity: 1;
  transform: scale(1.2);
}

/* Position pagination at bottom of carousel */
:deep(.swiper-pagination) {
  bottom: 60px !important;
}

/* Hide default navigation arrows */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}
</style>