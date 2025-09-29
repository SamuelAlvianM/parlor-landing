<template>
  <footer class="relative overflow-visible bg-utama-light border-t border-utama text-utama px-4">

    <!-- Segitiga -->
    <div
      class="absolute top-[-5em] right-0 w-0 h-0 
      border-l-[45vw] border-t-[30vw] rotate-60
      border-l-utama border-t-transparent
      pointer-events-none z-10
      sm:border-l-[4vw] sm:border-t-[6vw] sm:top-[-1em]
      md:border-l-[8vw] md:border-t-[8vw] md:top-[-3em]
      lg:border-l-[8vw] lg:border-t-[8vw]
      xl:border-l-[8vw] xl:border-t-[8vw]"
    ></div>

    <!-- Grid utama -->
    <div class="w-full px-6 py-10 
            grid grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-8 lg:gap-10 
            relative z-20">

      <!-- Kolom 1: Logo + Alamat + Kontak -->
      <div class="space-y-6">
        <!-- Logo + Alamat -->
        <div class="flex items-start gap-4">
          <NuxtImg 
            src="/favicon.ico" 
            alt="Logo" 
            class="h-16 w-auto sm:h-18 lg:h-20"
          />
          <p class="text-sm leading-relaxed sm:text-base">
            Jl. Rancakendal Luhur No.9, Ciburial,<br />
            Kecamatan Cimenyan, Kabupaten Bandung,<br />
            Jawa Barat 40191
          </p>
        </div>

        <!-- Kontak -->
        <div class="grid gap-3 text-sm sm:text-base">
          <div class="flex items-center gap-2">
            <span>📞</span><p>+62 811 2345 6789</p>
          </div>
          <div class="flex items-center gap-2">
            <span>📱</span><p>+62 812 4453 9123</p>
          </div>
          <div class="flex items-center gap-2">
            <span>✉️</span><p>cs@parlorhillsbandung.com</p>
          </div>
        </div>
      </div>

      <!-- Kolom 2: Jam Buka -->
      <div>
        <h3 class="text-lg lg:text-xl text-utama font-bold mb-2">Jam Buka</h3>
        <ul class="space-y-1 text-sm sm:text-base">
          <li><strong>Aktivitas</strong><br/>Buka Setiap Hari 13.00 - 21.00</li>
          <li><strong>Cafe</strong><br/>Buka Setiap Hari 13.00 - 21.00</li>
        </ul>
      </div>

      <!-- Kolom 3: Layanan -->
      <div>
        <h3 class="text-lg lg:text-xl text-utama font-bold mb-2">Layanan</h3>
        <ul class="space-y-1 text-sm sm:text-base">
          <li>Reservasi Grup</li>
          <li>Pemesanan Online</li>
          <li>Penawaran Khusus</li>
          <li>Aturan & Regulasi</li>
          <li>Hubungi Kami</li>
        </ul>
      </div>

      <!-- Kolom 4: Payment -->
      <div>
        <h3 class="text-lg lg:text-xl text-utama font-bold mb-2">Cashless Payment</h3>
        <div class="flex flex-wrap items-center gap-3">
          <img src="/images/pg/qris.png" alt="QRIS" class="h-6 sm:h-7 lg:h-8" />
          <img src="/images/pg/gopay.png" alt="GoPay" class="h-6 sm:h-7 lg:h-8" />
          <img src="/images/pg/mastercard.png" alt="Mastercard" class="h-6 sm:h-7 lg:h-8" />
          <img src="/images/pg/visa.png" alt="Visa" class="h-6 sm:h-7 lg:h-8" />
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-utama mt-6 py-4 px-12 text-left text-sm sm:text-md text-utama font-bold">
      © {{ new Date().getFullYear() }} CV 3 Detik. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
