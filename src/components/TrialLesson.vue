<script setup>
import { siteConfig } from '../config/data.js'

const telegramLink = siteConfig.telegram
</script>

<template>
  <section id="trial-lesson" class="bg-white py-16 md:py-28 px-4 font-gothic w-full relative overflow-hidden">
    
    <div class="main-container flex justify-center">
      
        <!-- Карточка в стиле Material Outlined: плоская, без теней, с четкой рамкой -->
        <!-- border-[1px] или border-2 для акцента, никаких shadow -->
        <div class="border-2 border-sigma-blue overflow-hidden bg-white max-w-6xl mx-auto w-full" data-aos="fade-up">
          
          <!-- Шапка карточки: кнопки справа -->
          <div class="h-10 bg-sigma-blue flex items-center justify-end px-6 gap-2">
            <!-- Круглые кнопки без теней -->
            <div class="w-2.5 h-2.5 rounded-full bg-white/30"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/50"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-sigma-pink"></div>
          </div>

          <!-- Контентная часть -->
          <div class="p-10 md:p-16 flex flex-col items-center md:items-start text-center md:text-left">
            
            <h3 class="text-4xl md:text-5xl lg:text-7xl font-black text-sigma-blue uppercase tracking-tighter leading-[0.9] mb-8">
              Первое занятие <br> <span class="text-sigma-pink">бесплатно</span>
            </h3>
            
            <p class="text-lg md:text-xl text-sigma-blue/80 font-medium uppercase tracking-wide mb-12 max-w-2xl">
              Познакомим с миром IT, определим уровень знаний и подберем идеальное направление для вашего ребенка.
            </p>

            <!-- Группа действий -->
            <div class="w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-6">
              
              <!-- Кнопка: тоже плоская, без теней -->
              <a 
                :href="telegramLink" 
                target="_blank"
                class="w-full md:w-auto text-center bg-sigma-pink text-white px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-sigma-blue transition-colors duration-200"
              >
                Записаться
              </a>

              <div class="flex items-center gap-3 text-sigma-blue/40 w-full md:w-auto">
                <span class="h-[1px] w-12 bg-sigma-blue/30"></span>
                <span class="text-xs uppercase tracking-widest font-bold whitespace-nowrap">Или позвоните нам:</span>
                <span class="h-[1px] w-12 bg-sigma-blue/30"></span>
              </div>

              <a 
                :href="`tel:${siteConfig.phoneLink}`" 
                class="text-3xl md:text-4xl font-black text-sigma-blue hover:text-sigma-pink transition-colors"
              >
                {{ siteConfig.phone }}
              </a>
            </div>
          </div>

        </div>

    </div>
  </section>
</template>

<style scoped>
/* Только базовые переходы цвета, без трансформаций и теней */
a {
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
</style>