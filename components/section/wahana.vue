<template>
  <section id="wahana" class="w-full h-[100vh] bg-ungu-terang flex flex-col scroll-mt-24">
    <div class="py-8 text-center">
      <!-- Judul section -->
      <div class="text-4xl font-extrabold text-utama">
        Wahana Permainan
      </div>
      <div class="text-xl font-bold text-violet-500">
        Berbagai Wahana Seru Untuk Kamu dan Keluarga
      </div>
    </div>

    <div class="relative w-full">
      <Swiper
        :modules="[Navigation, Autoplay]"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }"
        :slides-per-view="5"
        :space-between="20"
        centered-slides
        class="w-full"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="(wahana, index) in data" :key="index">
          <!-- Card aja -->
          <div class="bg-white rounded-[15%] shadow-lg overflow-hidden w-80 mx-auto">
            <img
              :src="wahana.imagePath"
              :alt="wahana.nama"
              class="w-full h-80 object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Tombol navigasi -->
      <div
        class="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-left" class="w-6 h-6 text-white" />
      </div>
      <div
        class="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-utama rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-right" class="w-6 h-6 text-white" />
      </div>
    </div>

    <!-- Judul & Deskripsi wahana aktif -->
    <div class="text-center text-utama px-4 mt-8">
      <h3 class="text-4xl font-bold">
        {{ currentTitle }}
      </h3>
      <p class="text-xl mt-2 max-w-2xl mx-auto text-center">
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

interface Wahana {
  id: number
  nama: string
  imagePath: string
  deskripsi?: string | null
}

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
