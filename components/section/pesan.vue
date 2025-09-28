<template>
  <section
    id="pesan"
    class="relative w-full min-h-screen bg-ungu-terang flex flex-col scroll-mt-24 overflow-hidden"
  >
    <!-- YouTube Embed -->
    <div class="w-full flex justify-center mt-12">
      <ClientOnly>
        <ScriptYouTubePlayer
          videoId="eCSMpw4RoCY"
          class="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg"
        />
      </ClientOnly>
    </div>

    <!-- Konten Tambahan -->
    <div class="text-center text-utama px-4 mt-8 space-y-8">
      <h3 class="text-6xl font-bold">
        Daftarkan Dirimu Sekarang
      </h3>
      <div class="text-4xl mt-2 font-bold text-center">
        Dapatkan rewards untuk setiap pembelian tiket
      </div>

      <div class="flex flex-col md:flex-row justify-center gap-4 mt-6">
      <button
        type="button"
        @click="daftarMember"
        class="px-6 py-3 bg-utama text-white font-bold rounded-lg shadow hover:bg-utama-dark transition"
      >
        Daftar Sekarang
      </button>
        <button
          class="px-6 py-3 border-3 border-utama text-utama font-bold rounded-lg shadow hover:bg-utama-dark hover:text-utama-teks transition flex items-center justify-center gap-2"
        >
          <Icon name="logos:google-icon" class="w-5 h-5 shadow-lg" />
          Login with Google
        </button>
      </div>
    </div>

    <!-- Dekorasi -->
    <!-- Lingkaran bawah kiri -->
    <NuxtImg
      src="/images/parlor-image/wahana/p-flyingfox.webp"
      alt="Lingkaran"
      class="absolute bottom-[-120px] left-[-50px] w-120 h-120 rounded-full object-cover"
    />


  </section>

</template>


<script setup lang="ts">

const daftarMember =  () => {
  window.location.href = 'https://fe.hompimplay.id/daftar-kiosk'
}
</script>
