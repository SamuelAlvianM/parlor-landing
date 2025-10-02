<template>
  <section
    id="tiket"
    class="relative w-full bg-utama scroll-mt-24 py-12"
  >
    <!-- Judul Section -->
    <div class="text-center mb-10">
      <h2 class="text-4xl md:text-6xl font-extrabold text-utama-teks">
        Tiket
      </h2>
      <p class="mt-2 text-lg md:text-2xl font-bold text-utama-teks">
        Beli tiketnya sekarang dan mainkan Wahananya
      </p>
    </div>

    <div class="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
      <!-- Panah wrapper -->
      <div
        class="absolute inset-0 flex items-center justify-between pointer-events-none"
      >
        <!-- Panah Kiri -->
        <div
          id="tiket-prev"
          class="swiper-button-prev-custom pointer-events-auto
                 w-8 h-8 md:w-12 md:h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10 -translate-x-6"
        >
          <Icon
            name="heroicons:chevron-left"
            class="w-5 h-5 md:w-6 md:h-6 text-utama"
          />
        </div>

        <!-- Panah Kanan -->
        <div
          id="tiket-next"
          class="swiper-button-next-custom pointer-events-auto
                 w-8 h-8 md:w-12 md:h-12 bg-utama-teks rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10 translate-x-6"
        >
          <Icon
            name="heroicons:chevron-right"
            class="w-5 h-5 md:w-6 md:h-6 text-utama"
          />
        </div>
      </div>

      <!-- Swiper -->
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
        class="w-full gap-4"
      >
        <SwiperSlide
          v-for="paket in paketWahana || []"
          :key="paket.id"
          class="flex justify-center items-center"
        >
          <!-- Kartu tiket -->
          <div
            class="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm w-full h-auto p-6 flex flex-col justify-between mx-auto"
          >
            <h3 class="text-xl md:text-2xl font-bold text-gray-800 text-center mb-6">
              {{ paket.nama }}
            </h3>

            <div class="w-full flex flex-col sm:flex-row justify-center gap-4">
              <!-- Weekday -->
              <div
                class="flex-1 sm:w-40 px-4 py-3 bg-green-500 text-white rounded-lg flex flex-col items-center justify-center text-center"
              >
                <div class="text-xs md:text-sm font-medium mb-1">
                  Weekday
                </div>
                <div class="text-base md:text-lg font-bold whitespace-nowrap">
                  Rp {{ paket.wd_harga_dasar?.toLocaleString() }}
                </div>
              </div>

              <!-- Weekend -->
              <div
                class="flex-1 sm:w-40 px-4 py-3 bg-green-500 text-white rounded-lg flex flex-col items-center justify-center text-center"
              >
                <div class="text-xs md:text-sm font-medium mb-1">
                  Weekend
                </div>
                <div class="text-base md:text-lg font-bold whitespace-nowrap">
                  Rp {{ paket.we_harga_dasar?.toLocaleString() }}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Tombol Lihat Semua -->
    <div class="w-full flex justify-center mt-8 px-4">
      <button
        type="button"
        class="px-6 py-3 font-bold rounded-lg transition
               bg-utama border-2 border-ungu-terang text-ungu-terang shadow-sm shadow-ungu-terang
               hover:bg-utama-teks hover:text-utama"
      >
        Lihat tiket lainnya
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const { data: paketWahana } = await useAsyncData("paketwahana", async () => {
  const res = await useApi<{ result: { data: any[] } }>("paketwahana")
  return res.result.data.map((wahana) => ({
    ...wahana,
    wd_harga: wahana.pivot?.extra?.wd_harga,
    we_harga: wahana.pivot?.extra?.we_harga,
    catatan: wahana.pivot?.extra?.catatan,
  }))
})

// const lihatTiket = () => {
//   window.location.href = "https://fe.hompimplay.id/login-kiosk"
// }
</script>