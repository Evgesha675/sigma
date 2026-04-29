<script setup>
import { onMounted, onUnmounted, defineAsyncComponent } from 'vue'

import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'

// Асинхронная загрузка компонентов, находящихся ниже первого экрана (lazy loading),
// что позволяет существенно сократить размер начального bundle JS и ускорить загрузку.
const TrialLesson = defineAsyncComponent(() => import('./components/TrialLesson.vue'))
const AboutUs = defineAsyncComponent(() => import('./components/AboutUs.vue'))
const ProjectActivity = defineAsyncComponent(() => import('./components/ProjectActivity.vue'))
const Courses = defineAsyncComponent(() => import('./components/Courses.vue'))
const Teachers = defineAsyncComponent(() => import('./components/Teachers.vue'))
const Contacts = defineAsyncComponent(() => import('./components/Contacts.vue'))
const TheFooter = defineAsyncComponent(() => import('./components/TheFooter.vue'))

import faviconBlue from './assets/logo/favicon.svg'
import faviconWhite from './assets/logo/favicon-white.svg'

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
      <Contacts />
      <TheFooter />
    </main>
  </div>
</template>