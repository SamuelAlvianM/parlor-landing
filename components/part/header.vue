<template>
  <header class="sticky top-0 z-50 bg-utama shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        
        <!-- Kiri: Logo -->
        <div class="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" class="h-12 w-17" />
        </div>


        <div class="flex flex-row items-center">
          <!-- Tengah: Navigation Tabs -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink
              v-for="tab in tabs"
              :key="tab.to"
              :to="tab.to"
              class="text-sm font-medium transition-default"
              :class="{
                'text-utama border-b-2 border-utama pb-1': isActive(tab.to),
                'text-gray-600 hover:text-utama': !isActive(tab.to)
              }"
            >
              {{ tab.label }}
            </NuxtLink>
          </nav>
  
          <!-- Kanan: Controls -->
          <div class="flex items-center gap-6">
            
            <!-- Language Switch -->
            <div class="flex items-center text-sm font-medium space-x-2">
              <button
                v-for="(loc, idx) in locales"
                :key="loc"
                @click="setLocale(loc)"
                class="transition-default"
                :class="{
                  'text-utama': currentLocale === loc,
                  'text-gray-500 hover:text-utama': currentLocale !== loc
                }"
              >
                {{ loc.toUpperCase() }}
              </button>
              <!-- Separator ID | EN -->
              <div   
                class="text-gray-400 select-none"
              >|</div>
            </div>
  
            <!-- Kids Mode Toggle -->
            <div class="flex flex-col items-center">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" v-model="kidsMode" class="sr-only" />
                <div
                  class="w-11 h-6 bg-gray-300 rounded-full p-1 flex items-center transition-all"
                  :class="{ 'bg-utama': kidsMode }"
                >
                  <div
                    class="bg-white w-4 h-4 rounded-full shadow transform transition-transform"
                    :class="{ 'translate-x-5': kidsMode }"
                  />
                </div>
              </label>
              <span class="mt-1 text-xs text-gray-600">
                {{ kidsMode ? 'Kids Mode' : 'Normal Mode' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale } = useI18n()

const tabs = [
  { label: 'Aktivitas', to: '/aktivitas' },
  { label: 'Wahana', to: '/wahana' },
  { label: 'Tiket & Paket', to: '/tiket' },
  { label: 'Pesan Tiket', to: '/pesan' }
]

const isActive = (path: string) => route.path.startsWith(path)

const locales = ['id', 'en'] as const
type Locale = typeof locales[number]

const currentLocale = computed(() => locale.value)
const setLocale = (loc: Locale) => {
  locale.value = loc
}

const kidsMode = ref(false)
</script>
