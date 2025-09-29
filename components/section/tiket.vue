<template>
  <section id="tiket" class="relative w-full bg-utama scroll-mt-24 py-12">
    <div class="text-center mb-10">
      <h2 class="text-4xl md:text-6xl font-extrabold text-utama-teks">
        Tiket
      </h2>
      <p class="text-lg md:text-2xl font-bold text-utama-teks mt-2">
        Beli tiketnya sekarang dan mainkan Wahananya
      </p>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <div
        id="tiket-prev"
        class="swiper-button-prev-custom absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-10 
               w-8 h-8 md:w-12 md:h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-left" class="w-5 h-5 md:w-6 md:h-6 text-utama" />
      </div>

      <div
        id="tiket-next"
        class="swiper-button-next-custom absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-10 
               w-8 h-8 md:w-12 md:h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        <Icon name="heroicons:chevron-right" class="w-5 h-5 md:w-6 md:h-6 text-utama" />
      </div>

      <Swiper
        :modules="[Navigation]"
        :loop="true"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 }
        }"
        :navigation="{
          prevEl: '#tiket-prev',
          nextEl: '#tiket-next'
        }"
        class="w-full px-4 md:px-8"
      >
        <SwiperSlide
          v-for="paket in paketWahana || []"
          :key="paket.id"
          class="flex justify-center items-center"
        >
          <div
            class="bg-white shadow-lg overflow-hidden max-w-sm w-full h-auto p-6 rounded-2xl flex flex-col justify-between mx-auto"
          >
            <h3 class="font-bold text-xl md:text-2xl text-gray-800 text-center">
              {{ paket.nama }}
            </h3>

            <div class="mt-6 w-full flex flex-col sm:flex-row justify-center gap-4">
              <div
                class="bg-green-500 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg text-center w-full sm:w-40"
              >
                Weekday: Rp {{ paket.wd_harga_dasar?.toLocaleString() }}
              </div>
              <div
                class="bg-green-500 text-white text-sm md:text-base font-semibold px-4 py-2 rounded-lg text-center w-full sm:w-40"
              >
                Weekend: Rp {{ paket.we_harga_dasar?.toLocaleString() }}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="w-full flex justify-center p-4 mt-4">
      <button
        type="button"
        @click="lihatTiket"
        class="px-6 py-3 bg-utama border-2 shadow-sm shadow-ungu-terang border-ungu-terang text-ungu-terang font-bold rounded-lg shadow hover:bg-utama-teks hover:text-utama transition"
      >
        Lihat tiket lainnya
      </button>
    </div>
  </section>
</template>



<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const { data: paketWahana, error } = await useAsyncData("paketwahana", async () => {
  const res = await useApi<{ result: { data: any[] } }>("paketwahana")
  return res.result.data.map((wahana) => ({
    ...wahana,
    wd_harga: wahana.pivot?.extra?.wd_harga,
    we_harga: wahana.pivot?.extra?.we_harga,
    catatan: wahana.pivot?.extra?.catatan,
  }))
})

const lihatTiket = () => {
  window.location.href = 'https://fe.hompimplay.id/login-kiosk'
}

</script>
