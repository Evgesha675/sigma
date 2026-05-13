<script setup>
import { siteConfig } from '../config/data.js'

const telegramLink = siteConfig.telegram
</script>

<template>
  <section id="trial-lesson" class="bg-white py-16 md:py-28 px-4 font-gothic w-full relative overflow-hidden">
    
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
      
      <div class="hidden md:block w-20 shrink-0 border-l-4 border-sigma-pink pl-4" data-aos="fade-right" aria-hidden="true">
        <div class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-blue uppercase tracking-tighter">
          Попробуйте
        </div>
      </div>

      <h2 class="md:sr-only text-4xl font-bold text-sigma-blue uppercase tracking-tighter mb-6 border-l-4 border-sigma-pink pl-4">
        Пробный урок
      </h2>

      <div class="flex-1 flex flex-col justify-center">
        <div class="max-w-4xl" data-aos="fade-up">
          <h3 class="text-4xl md:text-6xl font-black text-sigma-blue uppercase tracking-tighter leading-[0.9] mb-8">
            Первое занятие <br> <span class="text-sigma-pink">бесплатно</span>
          </h3>
          
          <p class="text-lg md:text-2xl text-sigma-blue/80 font-medium uppercase tracking-wide mb-12 max-w-2xl">
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
.vertical-title {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
}

/* Плавный переход для тени кнопки */
a {
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
</style>