<script setup>
import { ref } from 'vue'
import { siteConfig } from '../config/data.js'

const activeBranch = ref(siteConfig.branches[0])
const isClosed = ref(false)

const setBranch = (branch) => {
  activeBranch.value = branch
}

const getReviewLink = (firmId) => {
  return `https://2gis.ru/irkutsk/firm/${firmId}/tab/reviews`
}

const rebootWindow = () => {
  isClosed.value = true
  setTimeout(() => {
    isClosed.value = false
  }, 1000)
}
</script>

<template>
  <section id="reviews" class="bg-white py-12 md:py-24 font-gothic relative overflow-hidden">
    <!-- Отступы контейнера синхронизированы с Направлениями -->
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16">
      
      <!-- Боковой заголовок (Стиль 1 в 1 как в Направлениях/Команде) -->
      <div class="hidden md:block w-20 shrink-0 pl-4 relative" data-aos="fade-right" aria-hidden="true">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-pink"></div>
        <div class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-pink uppercase tracking-tighter opacity-90">
          Отзывы
        </div>
      </div>

      <!-- Заголовок для мобилок (Синхронизирован: mb-16, border-l-4) -->
      <h2 class="md:sr-only text-4xl font-bold text-sigma-pink uppercase tracking-tighter mb-16 pl-4 border-l-4 border-sigma-pink" data-aos="fade-right">
        Отзывы
      </h2>

      <!-- Основное окно -->
      <div class="flex-1 w-full transition-all duration-500 ease-in-out" :class="isClosed ? 'scale-0 opacity-0' : 'scale-100 opacity-100'">
        
        <!-- Рамка окна: border-2 как у карточек направлений, без тени -->
        <div class="border-2 border-sigma-blue bg-white w-full flex flex-col h-[500px] md:h-[600px] relative">
          
          <!-- Шапка окна с табами -->
          <div class="h-12 bg-sigma-blue flex items-center justify-between px-2 md:px-4 shrink-0 border-b-2 border-sigma-blue">
            
            <!-- Табы -->
            <div class="flex gap-1 h-full pt-1.5 overflow-x-auto no-scrollbar">
              <button 
                v-for="branch in siteConfig.branches" 
                :key="branch.id"
                @click="setBranch(branch)"
                :class="[
                  'px-4 text-[9px] md:text-[11px] font-black uppercase tracking-wider h-full flex items-center border-t-2 border-x-2 transition-all',
                  activeBranch.id === branch.id 
                    ? 'bg-white text-sigma-blue border-white' 
                    : 'bg-sigma-blue text-white/40 border-transparent hover:text-white'
                ]"
              >
                {{ branch.name }}
              </button>
            </div>
            
            <!-- ТРИ КРУЖОЧКА (Размеры и gap синхронизированы с карточками: w-2 h-2 gap-1.5) -->
            <div class="flex items-center justify-end gap-1.5 ml-4 shrink-0">
              <div class="w-2 h-2 rounded-full bg-white/40"></div>
              <div class="w-2 h-2 rounded-full bg-white/60"></div>
              <!-- Красная кнопка -->
              <button 
                @click="rebootWindow"
                class="w-2 h-2 rounded-full bg-sigma-pink hover:scale-150 transition-transform active:opacity-50 cursor-pointer"
                title="Перезагрузить окно"
              ></button>
            </div>
          </div>

          <!-- Адресная строка браузера -->
          <div class="h-10 border-b-2 border-sigma-blue flex items-center px-4 bg-gray-50 gap-4 shrink-0 overflow-hidden">
            <div class="flex-1 bg-white border border-sigma-blue/20 px-3 py-1 text-[9px] md:text-[11px] text-sigma-blue/40 font-mono truncate uppercase">
              SIGMA://REVIEWS/{{ activeBranch.id }}
            </div>
          </div>

          <!-- ТЕЛО ТЕРМИНАЛА -->
          <div class="flex-1 bg-sigma-blue flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            
            <!-- Водяной знак -->
            <div class="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-4 p-4 font-mono text-[80px] leading-none select-none">
              SIGMA SIGMA SIGMA
            </div>

            <div class="relative z-10 max-w-lg w-full" data-aos="zoom-in" data-aos-delay="100">
              <div class="mb-8">
                <h3 class="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                  {{ activeBranch.name }}
                </h3>
                <p class="text-white/60 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed">
                  Нажмите на кнопку, чтобы открыть<br>официальные отзывы в 2ГИС
                </p>
              </div>

              <!-- Кнопка -->
              <a 
                :href="getReviewLink(activeBranch.firmId)"
                target="_blank"
                class="group relative inline-flex items-center gap-4 bg-sigma-pink text-white px-8 py-5 md:px-12 md:py-6 font-black uppercase tracking-widest text-sm md:text-base hover:bg-white hover:text-sigma-blue transition-all duration-300"
              >
                <span>Читать отзывы</span>
                <span class="group-hover:translate-x-2 transition-transform">—></span>
              </a>

              <!-- Статистика -->
              <div class="mt-8 flex justify-center gap-8">
                <div class="text-left">
                  <span class="block text-[10px] text-white/40 uppercase font-black">Рейтинг</span>
                  <span class="text-xl text-white font-black tracking-widest">5.0 / 5.0</span>
                </div>
                <div class="text-left border-l border-white/20 pl-8">
                  <span class="block text-[10px] text-white/40 uppercase font-black">Статус</span>
                  <span class="text-xl text-white font-black tracking-widest uppercase">Проверено</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Футер терминала -->
          <div class="h-10 border-t-2 border-sigma-blue bg-white flex items-center justify-between px-4 md:px-6 shrink-0">
            <span class="text-[9px] md:text-[11px] font-black text-sigma-blue uppercase">
                📍 {{ activeBranch.address }}
            </span>
            <div class="hidden sm:block text-[9px] font-black text-sigma-pink uppercase tracking-widest">
              [ СИСТЕМА АКТИВНА ]
            </div>
          </div>

          <!-- Декоративный уголок (как в Направлениях) -->
          <div class="absolute bottom-0 right-0 w-3 h-3 bg-sigma-blue/5 pointer-events-none"></div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Тот самый идеальный класс для вертикального текста */
.vertical-title {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
}

/* Скрываем скроллбар для табов */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>