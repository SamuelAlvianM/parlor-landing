<template>
  <header class="sticky top-0 z-50 bg-utama shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between text-white">
        
        <!-- Kiri: Logo -->
        <div class="flex items-center space-x-2">
          <img src="/favicon.ico" alt="Logo" class="h-12 w-17" />
        </div>


        <div class="flex flex-row items-center gap-10">
          <!-- Tengah: Navigation Tabs -->
          <nav class="hidden md:flex space-x-8">
            <NuxtLink
              v-for="key in tabKeys"
              :key="key"
              :to="$t(`tabs.${key}.to`)"
              class="text-sm font-medium transition-default"
              :class="{
                'text-ungu-terang border-b-2 border-utama-teks pb-1': isActive(key),
                'text-utama-teks hover:text-ungu-terang': !isActive(key)
              }"
            >
              {{ $t(`tabs.${key}.label`) }}
            </NuxtLink>
          </nav>
  
          <!-- Kanan: Controls -->
          <div class="flex items-center gap-8">
            
            <!-- Language Switch -->
          <div class="flex items-center text-sm font-medium space-x-2">
            <template v-for="(loc, index) in locales" :key="loc">
              <button
                @click="setLocale(loc)"
                class="transition-default"
                :class="{
                  'text-ungu-terang border-b-2 border-ungu-terang': currentLocale === loc,
                  'text-utama-teks hover:text-ungu-terang': currentLocale !== loc
                }"
              >
                {{ $t(loc.toUpperCase()) }}
              </button>

              <span v-if="index < locales.length - 1" class="text-utama-teks">|</span>
            </template>
          </div>
  
            <!-- Kids Mode Toggle -->
            <div class="flex flex-col items-center w-[100px]">
              <label class="flex items-center cursor-pointer">
                <input type="checkbox" v-model="kidsMode" class="sr-only" />
                <div
                  class="w-11 h-6 bg-gray-300 rounded-full p-1 flex items-center transition-all"
                  :class="{ 'bg-ungu-terang': kidsMode }"
                >
                  <div
                    class="bg-white w-4 h-4 rounded-full shadow transform transition-transform"
                    :class="{ 'translate-x-5 shadow-md border border-utama': kidsMode }"
                  />
                </div>
              </label>
              <span 
                class="mt-1 text-xs transition-colors"
                :class="kidsMode ? 'text-ungu-terang' : 'text-utama-teks'"
              >
                {{ kidsMode ? 'Kids Mode' : 'Normal Mode' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <pre>
    <p>{{ $t('tabs.aktivitas_val.label') }}</p>
  </pre>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { locale, t } = useI18n()

const tabKeys = ['aktivitas_val', 'wahana_val', 'tiket_val', 'pesan_val']


const isActive = (path: string) => route.path.startsWith(path)

const locales = ['id', 'en'] as const
type Locale = typeof locales[number]

const currentLocale = computed(() => locale.value)
const setLocale = (loc: Locale) => {
  locale.value = loc
}

const kidsMode = ref(false)
</script>
