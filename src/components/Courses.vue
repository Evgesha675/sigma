<script setup>
import { ref } from 'vue'

const courses = [
  { id: 1, name: 'Математика. Устранение пробелов', icon: 'icon_1.svg', color: '#F7A62A' },
  { id: 2, name: 'Программирование Python', icon: 'icon_2.svg', color: '#152E6F' },
  { id: 3, name: 'Компьютерная грамотность', icon: 'icon_3.svg', color: '#16A636' },
  { id: 4, name: 'Математика. Подготовка ОГЭ, ЕГЭ', icon: 'icon_4.svg', color: '#2e7d32' },
  { id: 5, name: 'Программирование Scratch', icon: 'icon_5.svg', color: '#F7A62A' },
  { id: 6, name: 'Графический дизайн', icon: 'icon_6.svg', color: '#E5024B' },
  { id: 7, name: 'Информатика. Подготовка ОГЭ, ЕГЭ', icon: 'icon_7.svg', color: '#152E6F' },
  { id: 8, name: 'Создание игр Roblox', icon: 'icon_8.svg', color: '#E5024B' },
  { id: 9, name: '3D моделирование Blender', icon: 'icon_9.svg', color: '#F7A62A' },
]

const isExpanded = ref(false)

const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="courses" class="bg-white py-12 md:py-24 font-gothic relative overflow-hidden">
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16">
      
      <!-- Боковой заголовок в едином стиле с Командой -->
      <div class="hidden md:block w-20 shrink-0 pl-4 relative" data-aos="fade-right" aria-hidden="true">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-blue"></div>
        <div class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-blue uppercase tracking-tighter opacity-90">
          Направления
        </div>
      </div>

      <h2 class="md:sr-only text-4xl font-bold text-sigma-blue uppercase tracking-tighter mb-16 pl-4 border-l-4 border-sigma-blue" data-aos="fade-right">
        Направления
      </h2>

      <div class="flex-1 w-full">
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-16">
          
          <div 
            v-for="(course, index) in courses" 
            :key="course.id"
            class="course-card group relative flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            :class="{ 'hidden md:flex': index >= 6 && !isExpanded }"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <!-- Карточка-окно -->
            <div class="flex-1 flex flex-col border-2 border-sigma-blue bg-white relative transition-transform duration-300 group-hover:-translate-y-2">
              
              <!-- Верхняя панель окна (как в Преподавателях) -->
              <div 
                class="h-8 flex items-center justify-end px-4 gap-1.5 border-b-2 border-sigma-blue"
                :style="{ backgroundColor: course.color }"
              >
                <div class="w-2 h-2 rounded-full bg-white/40"></div>
                <div class="w-2 h-2 rounded-full bg-white/60"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
              </div>

              <!-- Контент -->
              <div class="p-6 flex flex-col items-start flex-1">
                <div class="w-full h-24 mb-6 flex items-center justify-center">
                  <img 
                    :src="getImageUrl(course.icon)" 
                    :alt="course.name" 
                    class="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 class="text-lg md:text-xl font-black uppercase text-sigma-blue leading-tight mb-6 flex-1">
                  {{ course.name }}
                </h3>
                
                <div class="w-full pt-4 border-t border-sigma-blue/10 flex justify-between items-center">
                  <span class="text-[10px] uppercase font-bold tracking-widest text-sigma-blue/50">Программа</span>
                  <span class="text-sm font-black text-sigma-blue group-hover:text-sigma-pink transition-colors">
                    Подробнее →
                  </span>
                </div>
              </div>

              <!-- Декоративный уголок -->
              <div class="absolute bottom-0 right-0 w-3 h-3 bg-sigma-blue/5"></div>
            </div>
          </div>

        </div>

        <!-- Кнопка для мобилок -->
        <div class="mt-12 md:hidden flex justify-center">
          <button 
            @click="isExpanded = !isExpanded"
            class="border-2 border-sigma-blue text-sigma-blue px-10 py-3 uppercase font-black tracking-widest text-sm active:scale-95 transition-all"
          >
            {{ isExpanded ? 'Скрыть' : 'Все курсы' }}
          </button>
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

/* Убираем лишние тени, работаем только с перемещением */
.course-card {
  perspective: 1000px;
}

img {
  image-rendering: -webkit-optimize-contrast;
}
</style>