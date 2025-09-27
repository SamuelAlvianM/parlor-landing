<template>
  <section id="pesan" class="relative w-full h-[100vh] bg-utama scroll-mt-24">
      <div class="py-8 text-center">
      <!-- Judul section -->
      <div class="text-4xl font-extrabold text-utama-teks">
        Tiket
      </div>
      <div class="text-xl font-bold text-utama-teks">
        Beli tiketnya sekarang dan mainkan Wahananya
      </div>
    </div>
    <Swiper
      :modules="[Navigation]"
      :loop="true"
      :navigation="{
        prevEl: '#pesan-prev',
        nextEl: '#pesan-next'
      }"
      class="w-full h-[40vh]"
    >
      <SwiperSlide
        v-for="paket in paketWahana || []"
        :key="paket.id"
      >
        <div class="bg-white shadow-lg overflow-hidden w-[200px] mx-auto p-4 rounded-xl">
          <div class="font-bold text-lg text-gray-800">{{ paket.nama }}</div>
          <div class="text-sm text-gray-600">
            Weekday: Rp {{ paket.wd_harga?.toLocaleString?.() }}
          </div>
          <div class="text-sm text-gray-600">
            Weekend: Rp {{ paket.we_harga?.toLocaleString?.() }}
          </div>
        </div>
      </SwiperSlide>

      <!-- tombol navigasi -->
      <div
        id="pesan-prev"
        class="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 
              w-12 h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-left" class="w-6 h-6 text-utama" />
      </div>

      <div
        id="pesan-next"
        class="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 
              w-12 h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-right" class="w-6 h-6 text-utama" />
      </div>
    </Swiper>


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
    <!-- <pre class="text-white">
      INI PAKET WAHAANA

  {{ JSON.stringify(paketWahana, null, 2) }}
</pre> -->
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'


const { data: paketWahana, error } = await useAsyncData<PaketWahana[]>(
  "paketwahana",
  async () => {
    const res = await $fetch<ApiResponse<Wahana>>("paketwahana")

    return res.result.data.map((wahana) => ({
      ...wahana,
      wd_harga: wahana.pivot.extra.wd_harga,
      we_harga: wahana.pivot.extra.we_harga,
      catatan: wahana.pivot.extra.catatan,
    }))
  }
)

watchEffect(() => {
  console.log("paketWahana:", paketWahana.value)
  console.log("error:", error.value)
})
</script>
