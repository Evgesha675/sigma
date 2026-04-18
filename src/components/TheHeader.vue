<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'О школе', href: '#about' },  
  { name: 'Направления', href: '#courses' },
  { name: 'Преподаватели', href: '#teachers' },
  { name: 'Контакты', href: '#contacts' },
]
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-[100] font-gothic">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <div class="flex-shrink-0 flex items-center">
          <img src="../assets/logo/logo.svg" alt="СИГМА" class="h-6 md:h-8 w-auto transition-all" />
        </div>

        <nav class="hidden md:flex space-x-8 uppercase text-sm font-bold text-sigma-blue">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             class="hover:text-sigma-pink transition-colors uppercase">
            {{ link.name }}
          </a>
        </nav>

        <div class="hidden md:flex items-center gap-6">
          <a href="tel:+79247174852" class="text-sigma-blue font-bold whitespace-nowrap">
            8 (924) 717-48-52
          </a>
          <button class="bg-sigma-pink text-white px-6 py-2.5 font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90 active:scale-95 shadow-md rounded-none">
            ЗАПИСАТЬСЯ
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-sigma-blue p-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2 shadow-xl">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" 
           class="block px-3 py-2 text-sigma-blue font-bold uppercase" @click="isMenuOpen = false">
          {{ link.name }}
        </a>
        <div class="pt-4 border-t border-gray-100">
          <a href="tel:+79247174852" class="block px-3 py-2 text-sigma-blue font-bold mb-4">8 (924) 717-48-52</a>
          <button class="w-full bg-sigma-pink text-white py-4 font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90 active:scale-95 rounded-none shadow-md">
            ЗАПИСАТЬСЯ
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>