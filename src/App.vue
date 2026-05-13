<script setup>
import { onMounted, onUnmounted, defineAsyncComponent } from 'vue'

// Статические компоненты (первый экран)
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'

// Асинхронные компоненты (ленивая загрузка)
const TrialLesson = defineAsyncComponent(() => import('./components/TrialLesson.vue'))
const AboutUs = defineAsyncComponent(() => import('./components/AboutUs.vue'))
const ProjectActivity = defineAsyncComponent(() => import('./components/ProjectActivity.vue'))
const Courses = defineAsyncComponent(() => import('./components/Courses.vue'))
const Teachers = defineAsyncComponent(() => import('./components/Teachers.vue'))
const Review = defineAsyncComponent(() => import('./components/Review.vue')) 
const Contacts = defineAsyncComponent(() => import('./components/Contacts.vue'))
const TheFooter = defineAsyncComponent(() => import('./components/TheFooter.vue'))

import faviconBlue from './assets/logo/favicon.svg'
import faviconWhite from './assets/logo/favicon-white.svg'

// Логика динамического фавикона
const updateFavicon = (e) => {
  const isDark = e instanceof MediaQueryListEvent 
    ? e.matches 
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = isDark ? faviconWhite : faviconBlue;
  }
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

onMounted(() => {
  updateFavicon()
  mediaQuery.addEventListener('change', updateFavicon)
})

onUnmounted(() => {
  mediaQuery.removeEventListener('change', updateFavicon)
})
</script>

<template>
  <div class="min-h-screen bg-white font-gothic overflow-x-hidden w-full">
    <TheHeader />
    
    <main id="home" class="mt-10">
      <TheHero />
      <TrialLesson />
      <AboutUs />
      <ProjectActivity />
      <Courses />
      <Teachers />
      
      <Review /> 
      
      <Contacts />
      <TheFooter />
    </main>
  </div>
</template>

<style>

html {
  scroll-behavior: smooth;
}

/* Стилизация скроллбара в стиле Sigma */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #273972; /* sigma-blue */
}
::-webkit-scrollbar-thumb:hover {
  background: #ec4899; /* sigma-pink */
}
</style>