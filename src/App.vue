<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import AboutUs from './components/AboutUs.vue'
import Courses from './components/Courses.vue'
</script>

<template>
  <div class="min-h-screen bg-white font-gothic overflow-hidden">
    <TheHeader />
    
    <main class="mt-20">
      <TheHero />
      <AboutUs />
      <Courses />
    </main>
  </div>
</template>