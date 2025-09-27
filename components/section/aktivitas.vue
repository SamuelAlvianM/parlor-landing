<template>
  <section id="aktivitas" class="w-full h-[94vh] bg-utama flex flex-col scroll-mt-24">
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      :navigation="{
        prevEl: '#aktivitas-prev',
        nextEl: '#aktivitas-next'
      }"
      class="w-full h-full relative"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <NuxtImg
          :src="img"
          class="w-full h-[700px] rounded-b-[10%] object-cover object-center"
          alt="Slide HOMPIMPLAY"
          width="1200"
          height="600"
          format="webp"
          quality="80"
        />
      </SwiperSlide>

      <!-- Custom arrows (ID unik per section) -->
      <div id="aktivitas-prev" class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <Icon name="heroicons:chevron-left" class="w-6 h-6 text-white" />
      </div>
      <div id="aktivitas-next" class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        <Icon name="heroicons:chevron-right" class="w-6 h-6 text-white" />
      </div>
    </Swiper>

    <div class="flex flex-col justify-center mb-20 space-y-4 text-center text-white">
      <div class="text-xl md:text-lg font-bold"> Parlor Hills </div>
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
  position: relative;
}
:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  border: 2px solid var(--ui-primary);
  border-color: var(--ui-primary);
  background: var(--color-utama);
  opacity: 0.6;
  border-radius: 50%;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--color-ungu-terang);
  opacity: 1;
  transform: scale(1.2);
}

:deep(.swiper-pagination) {
  bottom: 60px !important;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}
</style>