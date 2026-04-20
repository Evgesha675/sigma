<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import AboutUs from './components/AboutUs.vue'
import Courses from './components/Courses.vue'
import Teachers from './components/Teachers.vue'
import Contacts from './components/Contacts.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white font-gothic">
    <TheHeader />
    
    <main id="home" class="mt-20 4k:mt-28">
      <TheHero />
      <AboutUs />
      <Courses />
      <Teachers />
      <Contacts />
      <TheFooter />
    </main>
  </div>
</template>