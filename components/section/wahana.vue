<template>
  <section
    id="wahana"
    class="w-full min-h-[100vh] bg-ungu-terang flex flex-col scroll-mt-24"
  >
    <div class="py-4 md:py-6 text-center px-4">
      <div class="text-3xl md:text-5xl font-extrabold text-utama">
        Wahana Permainan
      </div>
      <div class="text-lg md:text-2xl lg:text-4xl font-bold text-violet-500 mt-2">
        Berbagai Wahana Seru Untuk Kamu dan Keluarga
      </div>
    </div>

    <div class="relative w-full px-6 md:px-12">
      <Swiper
        :modules="[Navigation, Autoplay]"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :navigation="{
          prevEl: '#wahana-prev',
          nextEl: '#wahana-next'
        }"
        :space-between="20"
        :centered-slides="true"
        :breakpoints="{
          320: { slidesPerView: 1.2, spaceBetween: 12 },   // HP kecil
          480: { slidesPerView: 2, spaceBetween: 16 },    // HP besar
          768: { slidesPerView: 3, spaceBetween: 20 },    // Tablet
          1024: { slidesPerView: 4, spaceBetween: 20 },   // Laptop
          1280: { slidesPerView: 5, spaceBetween: 24 }    // Desktop lebar
        }"
        class="w-full"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(wahana, index) in data" :key="index">
          <!-- Card -->
          <div
            class="bg-white rounded-[10%] shadow-lg overflow-hidden max-w-xs mx-auto"
          >
            <NuxtImg
              :src="wahana.imagePath"
              :alt="wahana.nama"
              class="w-full h-54 md:h-[24em] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Tombol arrow -->
      <div
        id="wahana-prev"
        class="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-left" class="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      <div
        id="wahana-next"
        class="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-right" class="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
    </div>

    <!-- Judul & Deskripsi wahana aktif -->
    <div class="text-center text-utama px-4 mt-6 md:mt-8 space-y-4 md:space-y-8">
      <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold">
        {{ currentTitle }}
      </h3>
      <p class="text-base md:text-lg lg:text-2xl max-w-3xl mx-auto text-center mb-4">
        {{ currentDesc }}
      </p>
    </div>
  </section>
</template>



<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const { data } = await useAsyncData("wahana", async () => {
  const apiRes = await useApi<{ result: { data: Wahana[] } }>("wahana")
  return apiRes.result.data
})

const currentTitle = ref("")
const currentDesc = ref("")

// Update judul sesuai slide aktif
const onSlideChange = (swiper: any) => {
  const index = swiper.realIndex
  const item = data.value?.[index]
  currentTitle.value = item?.nama ?? ""
  currentDesc.value = item?.deskripsi ?? ""
}

// set default judul & deskripsi awal
watchEffect(() => {
  if (data.value && data.value.length > 0 && data.value[0]) {
    currentTitle.value = data.value[0].nama
    currentDesc.value = data.value[0].deskripsi ?? ""
  }
})
</script>


<style scoped>
:deep(.swiper-pagination) {
  display: none !important;
}
</style>
