<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import AboutUs from './components/AboutUs.vue'
import ProjectActivity from './components/ProjectActivity.vue'
import Courses from './components/Courses.vue'

import Teachers from './components/Teachers.vue'
import TrialLesson from './components/TrialLesson.vue'
import Contacts from './components/Contacts.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>ф
  <div class="min-h-screen bg-white font-gothic">
    <TheHeader />
    
    <main id="home" class="mt-20">
      <TheHero />
      <AboutUs />
      <ProjectActivity />
      <Courses />
      
      <Teachers />
      <TrialLesson />
      <Contacts />
      <TheFooter />
    </main>
  </div>
</template>
