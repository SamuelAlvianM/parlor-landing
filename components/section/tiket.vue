<template>
  <section id="tiket" class="relative w-full h-[90vh] bg-utama scroll-mt-24">
      <div class="py-8 text-center">
      <!-- Judul section -->
      <div class="text-6xl font-extrabold text-utama-teks">
        Tiket
      </div>
      <div class="text-4xl font-bold text-utama-teks">
        Beli tiketnya sekarang dan mainkan Wahananya
      </div>
    </div>
    <Swiper
      :modules="[Navigation]"
      :loop="true"
      :slides-per-view="3"
      :navigation="{
        prevEl: '#tiket-prev',
        nextEl: '#tiket-next'
      }"
      class="w-full h-[40vh]"
    >
      <SwiperSlide
        v-for="paket in data  || []"
        :key="paket.id"
      >
        <div class="bg-white shadow-lg overflow-hidden w-[36em] h-[20em] mx-auto p-4 rounded-md flex flex-col justify-between">
          <!-- Nama Wahana -->
          <div class="font-bold text-2xl text-gray-800 text-center">
            {{ paket.nama }}
          </div>

          <!-- Harga -->
          <div class="mt-4 w-full flex justify-evenly gap-4">
            <div class="bg-green-500 text-white text-base font-semibold px-4 py-2 rounded-lg text-center w-60">
              Weekday: Rp {{ paket.nama?.toLocaleString() }}
            </div>
            <div class="bg-green-500 text-white text-base font-semibold px-4 py-2 rounded-lg text-center w-60">
              Weekend: Rp {{ paket.nama?.toLocaleString() }}
            </div>
          </div>
        </div>
      </SwiperSlide>

      <!-- tombol navigasi -->
      <div
        id="tiket-prev"
        class="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 
              w-12 h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-left" class="w-6 h-6 text-utama" />
      </div>

      <div
        id="tiket-next"
        class="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 
              w-12 h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-right" class="w-6 h-6 text-utama" />
      </div>
    </Swiper>



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


// const { data: paketWahana, error } = await useAsyncData(
//   "paketwahana",
//   async () => {
//     const res = await $fetch<ApiResponse>("wahana")

//     return res.result.data.map((wahana) => ({
//       ...wahana,
//       wd_harga: wahana.pivot.extra.wd_harga,
//       we_harga: wahana.pivot.extra.we_harga,
//       catatan: wahana.pivot.extra.catatan,
//     }))
//   }
// )

const { data, error } = await useAsyncData("wahana", async () => {
  const apiRes = await useApi<{ result: { data: Wahana[] } }>("wahana")
  return apiRes.result.data
})

watchEffect(() => {
  console.log("paketWahana:", data.value)
  console.log("error:", error.value)
})
</script>
