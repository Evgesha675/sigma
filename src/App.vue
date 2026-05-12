<script setup>
import { onMounted, onUnmounted } from 'vue'

import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import TrialLesson from './components/TrialLesson.vue'
import AboutUs from './components/AboutUs.vue'
import ProjectActivity from './components/ProjectActivity.vue'
import Courses from './components/Courses.vue'
import Teachers from './components/Teachers.vue'
import Contacts from './components/Contacts.vue'
import TheFooter from './components/TheFooter.vue'

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