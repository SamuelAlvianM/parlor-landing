<template>
  <section
    id="pesan"
    class="relative w-full min-h-[88vh] bg-ungu-terang flex flex-col scroll-mt-24 overflow-hidden"
  >
    <!-- Konten utama -->
    <div class="relative z-10">
      <div class="w-full flex justify-center mt-4 sm:mt-6 px-4">
        <ClientOnly>
          <ScriptYouTubePlayer
            videoId="eCSMpw4RoCY"
            class="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg"
          />
        </ClientOnly>
      </div>

      <div class="text-center text-utama px-4 mt-8 space-y-2 sm:space-y-2">
        <h3 class="text-2xl sm:text-4xl lg:text-5xl font-bold">
          Daftarkan Dirimu Sekarang
        </h3>
        <div class="text-lg sm:text-2xl lg:text-4xl font-bold text-center">
          Dapatkan rewards untuk setiap pembelian tiket
        </div>

        <div class="flex flex-col md:flex-row justify-center gap-3 sm:gap-4 mt-6">
          <button
            type="button"
            @click="daftarMember"
            class="px-5 sm:px-6 py-3 bg-utama text-white font-bold rounded-lg shadow hover:bg-utama-dark transition"
          >
            Daftar Sekarang
          </button>
          <button
            class="px-5 sm:px-6 py-3 border-2 border-utama text-utama font-bold rounded-lg shadow hover:bg-utama-dark hover:text-utama-teks transition flex items-center justify-center gap-2"
          >
            <Icon name="logos:google-icon" class="w-5 h-5" />
            Login with Google
          </button>
        </div>
      </div>
    </div>

    <!-- Lingkaran paling belakang -->
    <NuxtImg
      src="/images/parlor-image/wahana/p-flyingfox.webp"
      alt="Lingkaran"
      class="absolute bottom-[-100px] sm:bottom-[-160px] left-[-30px] sm:left-[-50px] 
            w-80 sm:w-80 aspect-square rounded-full object-cover opacity-80 z-[-1] pointer-events-none"
    />
  </section>
</template>


<script setup lang="ts">
const daftarMember = () => {
  window.location.href = 'https://fe.hompimplay.id/daftar-kiosk'
}
</script>
