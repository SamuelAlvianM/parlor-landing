<template>
  <header class="sticky top-0 z-50 bg-utama-light font-bold shadow-md py-4">
    <div class="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">

      <NuxtLink to="/">
        <NuxtImg src="/favicon.ico" alt="Logo" class="h-20 w-24 object-contain" />
      </NuxtLink>

      <!-- Kanan: Desktop Nav + Language + Kids, Mobile Hamburger + Language + Kids -->
      <div class="flex items-center gap-4">

        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="tab in tabKeys"
            :key="tab.id"
            :to="tab.to"
            @click.prevent="handleNavClick(tab)"
            class="text-lg font-bold transition-default cursor-pointer"
            :class="{
              'text-utama border-b-2 border-utama pb-1': activeSection === tab.id && isHomePage,
              'text-utama hover:text-utama-dark': activeSection !== tab.id || !isHomePage
            }"
          >
            {{ tab.label }}
          </NuxtLink>
        </nav>

        <!-- Language Switch -->
        <!-- <div class="flex items-center text-lg font-medium space-x-2">
          <template v-for="(loc, index) in locales" :key="loc">
            <button
              @click="setLocale(loc)"
              class="transition-default font-bold"
              :class="{
                'text-utama border-b-2 border-utama': currentLocale === loc,
                'text-utama hover:text-utama': currentLocale !== loc
              }"
            >
              {{ loc.toUpperCase() }}
            </button>
            <span v-if="index < locales.length - 1" class="text-utama">|</span>
          </template>
        </div> -->

        <!-- Kids Mode -->
        <!-- <div class="flex flex-col items-center w-[100px]">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" v-model="kidsMode" class="sr-only" />
            <div
              class="w-11 h-6 bg-gray-300 rounded-full border border-utama shadow-md p-1 flex items-center transition-all"
              :class="{ 'bg-utama': kidsMode }"
            >
              <div
                class="bg-white shadow-md w-4 h-4 rounded-full transform transition-transform"
                :class="{ 'translate-x-5 border border-utama': kidsMode }"
              />
            </div>
          </label>
          <span class="mt-1 text-sm text-utama">
            {{ $t(kidsMode ? 'mode.kids' : 'mode.normal') }}
          </span>
        </div> -->

        <!-- Hamburger-->
        <button
          class="md:hidden text-utama focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <Icon v-if="!isOpen" name="heroicons:bars-3" class="w-8 h-8" />
          <Icon v-else name="heroicons:x-mark" class="w-8 h-8" />
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden mt-4 flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-4"
      >
        <nav class="flex flex-col space-y-3">
          <a
            v-for="tab in tabKeys"
            :key="tab.id"
            href="#"
            @click.prevent="handleNavClick(tab)"
            class="text-lg font-bold transition-default"
            :class="{
              'text-utama border-b-2 border-utama pb-1': activeSection === tab.id && isHomePage,
              'text-utama hover:text-utama-dark': activeSection !== tab.id || !isHomePage
            }"
          >
            {{ tab.label }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const tabKeys = [
  { id: 'aktivitas', label: 'Aktivitas', to: '/#aktivitas' },
  { id: 'wahana', label: 'Wahana', to: '/#wahana' },
  { id: 'tiket', label: 'Tiket & Paket', to: '/#tiket' },
  { id: 'pesan', label: 'Pesan Tiket', to: '/#pesan' },
]

const activeSection = ref('aktivitas')
const isOpen = ref(false)

const locales = ['id', 'en'] as const
type Locale = typeof locales[number]
const currentLocale = computed(() => locale.value)
const setLocale = (loc: Locale) => { locale.value = loc }

const kidsMode = ref(false)

// Cek apakah di homepage
const isHomePage = computed(() => route.path === '/')

const handleNavClick = async (tab: any) => {
  isOpen.value = false
  
  if (!isHomePage.value) {
    await router.push('/')
    await nextTick()
  }
  
  activeSection.value = tab.id
  
  const element = document.getElementById(tab.id)
  if (element) {
    const headerOffset = 100 
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Setup intersection observer
const setupObserver = () => {
  // Hanya jalankan di client-side dan homepage
  if (process.server || !isHomePage.value) {
    activeSection.value = ''
    return
  }

  const sections = tabKeys
    .map(tab => document.getElementById(tab.id))
    .filter((el): el is HTMLElement => el !== null)
  
  if (sections.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          activeSection.value = entry.target.id
        }
      })
    },
    { 
      threshold: 0.5,
      rootMargin: '-100px 0px -50% 0px'
    }
  )
  
  sections.forEach(sec => observer.observe(sec))
  
  // Return cleanup function
  return () => {
    sections.forEach(sec => observer.unobserve(sec))
  }
}

// Watch route changes
watch(() => route.path, () => {
  if (!isHomePage.value) {
    activeSection.value = ''
  }
  
  nextTick(() => {
    setupObserver()
  })
}, { immediate: true })

onMounted(() => {
  setupObserver()
  
  // Handle hash in URL on mount
  if (route.hash) {
    const sectionId = route.hash.replace('#', '')
    const tab = tabKeys.find(t => t.id === sectionId)
    if (tab) {
      setTimeout(() => {
        handleNavClick(tab)
      }, 500)
    }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>