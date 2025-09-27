<template>
  <section id="pesan" class="relative w-full h-screen bg-utama-light">
    <!-- Carousel -->
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      navigation
      class="w-full h-full"
    >
      <SwiperSlide v-for="(img, index) in images" :key="index">
        <div
          class="w-full h-full bg-cover bg-center"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </SwiperSlide>
    </Swiper>

    <!-- Teks judul -->
    <div
      class="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white"
    >
      <h2 class="text-2xl md:text-4xl font-bold">
        Nikmati Wahana Seru di
      </h2>
      <h1 class="text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-lg">
        HOMPIMPLAY
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  'https://source.unsplash.com/1600x900/?themepark',
  'https://source.unsplash.com/1600x900/?rollercoaster',
  'https://source.unsplash.com/1600x900/?carousel',
]
</script>
