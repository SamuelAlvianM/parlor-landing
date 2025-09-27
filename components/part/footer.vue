<template>
  <footer class="bg-utama-light border-t border-ungu-terang text-utama px-4">
    <div class="w-full px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      
    <div class="space-y-6 px-4">
      <!-- Logo + Alamat -->
      <div class="flex items-start gap-4">
        <img src="/favicon.ico" alt="Logo" class="h-28 w-30 mx-4" />
        <p class="text-md">
          Jl. Rancakendal Luhur No.9, Ciburial,<br />
          Kecamatan Cimenyan, Kabupaten Bandung,<br />
          Jawa Barat 40191
        </p>
      </div>

      <!-- Kontak -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-md">
        <div class="flex items-center gap-3">
          <span class="text-md">📞</span>
          <p>+62 811 2345 6789</p>
        </div>
        <div class="flex items-center gap-3">
          <span class=" text-md">📱</span>
          <p>+62 812 4453 9123</p>
        </div>
        <div class="flex items-center gap-3 sm:col-span-2">
          <span class=" text-md">✉️</span>
          <p>cs@parlorhillsbandung.com</p>
        </div>
      </div>
    </div>


      <!-- Kolom 2: Jam Buka -->
      <div>
        <h3 class=" text-xl text-utama font-bold mb-2">Jam Buka</h3>
        <ul class="space-y-1 text-md">
          <li><strong>Aktivitas</strong><br/>Buka Setiap Hari Pukul 13.00 - 21.00</li>
          <li><strong>Cafe</strong><br/>Buka Setiap Hari Pukul 13.00 - 21.00</li>
        </ul>
      </div>

      <!-- Kolom 3: Layanan -->
      <div>
        <h3 class=" text-xl text-utama font-bold mb-2">Layanan</h3>
        <ul class="space-y-1 text-md">
          <li>Reservasi Grup</li>
          <li>Pemesanan Online</li>
          <li>Penawaran Khusus</li>
          <li>Aturan & Regulasi</li>
          <li>Hubungi Kami</li>
        </ul>
      </div>

      <!-- Kolom 4: Pembayaran -->
      <div>
        <h3 class=" text-xl text-utama font-bold mb-2">Cashless Payment</h3>
        <div class="flex flex-wrap items-center gap-3">
          <img src="/images/pg/qris.png" alt="QRIS" class="h-8" />
          <img src="/images/pg/gopay.png" alt="GoPay" class="h-8" />
          <img src="/images/pg/mastercard.png" alt="Mastercard" class="h-8" />
          <img src="/images/pg/visa.png" alt="Visa" class="h-8" />
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-200 mt-6 py-4 px-12 text-left text-md text-utama font-bold">
      © {{ new Date().getFullYear() }} CV 3 Detik. All Rights Reserved.
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
