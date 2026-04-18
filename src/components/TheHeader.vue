<script setup>
import { ref } from 'vue'

// Состояние открытого меню для мобилок
const isMenuOpen = ref(false)
</script>

<template>
  <header class="w-full bg-white shadow-sm sticky top-0 z-50 font-gothic">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        
        <div class="flex-shrink-0 flex items-center">
          <img src="../assets/logo/logo.svg" alt="СИГМА" class="h-10 w-auto" />
        </div>

        <nav class="hidden md:flex space-x-8 uppercase text-sm font-bold text-sigma-blue">
          <a href="#courses" class="hover:text-sigma-red transition-colors">Курсы</a>
          <a href="#about" class="hover:text-sigma-red transition-colors">О нас</a>
          <a href="#quiz" class="hover:text-sigma-red transition-colors">Тест</a>
          <a href="#contacts" class="hover:text-sigma-red transition-colors">Контакты</a>
        </nav>

        <div class="hidden md:flex items-center gap-6">
          <a href="tel:+79247174852" class="text-sigma-blue font-bold whitespace-nowrap">
            8 (924) 717-48-52
          </a>
          <button class="bg-sigma-red text-white px-5 py-2 rounded-lg font-bold hover:scale-105 transition-transform active:scale-95">
            ЗАПИСАТЬСЯ
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-sigma-blue p-2">
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
        <a href="#courses" class="block px-3 py-2 text-sigma-blue font-bold uppercase" @click="isMenuOpen = false">Курсы</a>
        <a href="#about" class="block px-3 py-2 text-sigma-blue font-bold uppercase" @click="isMenuOpen = false">О нас</a>
        <a href="#quiz" class="block px-3 py-2 text-sigma-blue font-bold uppercase" @click="isMenuOpen = false">Тест</a>
        <a href="#contacts" class="block px-3 py-2 text-sigma-blue font-bold uppercase" @click="isMenuOpen = false">Контакты</a>
        <div class="pt-4 border-t border-gray-100">
          <a href="tel:+79247174852" class="block px-3 py-2 text-sigma-blue font-bold">8 (924) 717-48-52</a>
          <button class="w-full mt-2 bg-sigma-red text-white py-3 rounded-lg font-bold">ЗАПИСАТЬСЯ</button>
        </div>
      </div>
    </transition>
  </header>
</template>