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
    <div class="main-container">
      <div class="flex justify-between items-center h-20 px-4">
        
        <div class="flex-shrink-0">
          <img src="../assets/logo/logo.svg" alt="СИГМА" class="h-6 sm:h-8 w-auto" />
        </div>

        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-10">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             class="text-sigma-blue font-bold uppercase text-sm hover:text-sigma-pink transition-colors whitespace-nowrap">
            {{ link.name }}
          </a>
        </nav>

        <div class="hidden lg:flex items-center gap-6">
          <a href="tel:+79247174852" class="text-sigma-blue font-bold whitespace-nowrap text-sm xl:text-base">
            8 (924) 717-48-52
          </a>
          <button class="bg-sigma-pink text-white px-6 py-2.5 font-bold uppercase tracking-widest hover:bg-sigma-blue transition-all shrink-0 shadow-md">
            ЗАПИСАТЬСЯ
          </button>
        </div>

        <div class="lg:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-sigma-blue p-2 outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" stroke-width="2" stroke-linecap="round"/>
              <path v-else d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white border-t border-gray-100 absolute top-20 left-0 w-full shadow-2xl z-50 pb-8">
        <div class="flex flex-col p-6 space-y-4">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             class="text-sigma-blue font-bold uppercase text-lg border-b border-gray-50 pb-2" 
             @click="isMenuOpen = false">
            {{ link.name }}
          </a>
          <a href="tel:+79247174852" class="text-xl text-sigma-blue font-black pt-2">8 (924) 717-48-52</a>
          <button class="w-full bg-sigma-pink text-white py-4 font-bold uppercase tracking-widest shadow-lg">
            ЗАПИСАТЬСЯ
          </button>
        </div>
      </div>
    </transition>
  </header>
  </template>