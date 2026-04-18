<script setup>
import TheHeader from './TheHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    
    <main class="relative overflow-hidden pt-10 pb-20 lg:pt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-sigma-blue sm:text-5xl md:text-6xl font-gothic uppercase">
              <span class="block">Твой путь в IT</span>
              <span class="block text-sigma-red">начинается здесь</span>
            </h1>
            <p class="mt-6 text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl">
              Школа программирования «СИГМА» — обучаем детей и подростков востребованным навыкам: от создания игр до разработки нейросетей.
            </p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <button class="w-full sm:w-auto px-8 py-4 bg-sigma-blue text-white font-bold rounded-2xl hover:bg-sigma-red transition-all shadow-xl active:scale-95">
                ВЫБРАТЬ КУРС
              </button>
              <button class="w-full sm:w-auto mt-3 sm:mt-0 px-8 py-4 border-2 border-sigma-blue text-sigma-blue font-bold rounded-2xl hover:bg-gray-50 transition-all">
                ПРОЙТИ ТЕСТ
              </button>
            </div>
          </div>

          <div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden bg-gray-100 aspect-square flex items-center justify-center">
              <span class="text-gray-400">Здесь будет маскот Сигма</span>
              </div>
          </div>

        </div>
      </div>
    </main>
  </div>
</template>