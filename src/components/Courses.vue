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

const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="courses" class="bg-white py-12 md:py-24 px-4 font-gothic w-full relative">

    <div class="max-w-7xl 5k:max-w-[2400px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
      
      <div class="hidden md:block w-20 shrink-0 border-l-4 border-sigma-blue pl-4" data-aos="fade-right">
        <h2 class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-blue uppercase tracking-tighter">
          Направления
        </h2>
      </div>

      <h2 class="md:hidden text-4xl font-bold text-sigma-blue uppercase tracking-tighter mb-6 border-l-4 border-sigma-blue pl-4">
        Направления
      </h2>

      <div class="flex-1 w-full">
        <div 
          class="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-10 md:pb-0"
        >
          <div 
            v-for="(course, index) in courses" 
            :key="course.id"
            class="course-card border-l-[10px] p-6 md:p-8 flex flex-col items-start text-left cursor-pointer transition-all duration-500 group relative shadow-xl hover:shadow-2xl w-full"
            :style="{ borderLeftColor: course.color, '--item-color': course.color }"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <div class="w-full h-32 md:h-32 mb-6 flex items-center justify-start relative bg-transparent overflow-visible">
              <img 
                :src="getImageUrl(course.icon)" 
                :alt="course.name" 
                class="scale-150 max-h-full object-contain h-auto transition-transform duration-700 pointer-events-none origin-left group-hover:scale-[2]"
              />
            </div>
            
            <h3 class="w-full text-xl md:text-2xl font-bold uppercase leading-tight mb-8 break-words text-sigma-blue group-hover:text-white transition-colors duration-300">
              {{ course.name }}
            </h3>
            
            <span class="text-sm font-bold uppercase tracking-widest mt-auto group-hover:text-white transition-colors duration-300">
              Подробнее →
            </span>
          </div>
        </div>

        <div v-if="!isGrid" class="flex md:hidden justify-center gap-2 mt-4">
          <div 
            v-for="(_, index) in courses" 
            :key="index"
            class="h-2 rounded-full transition-all duration-300"
            :class="activeIndex === index ? 'bg-sigma-blue w-6' : 'bg-gray-300 w-2'"
          ></div>
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

.course-card {
  min-height: 220px; 
  background-color: white;
  border-top: none;
  border-right: none;
  border-bottom: none;
}

@media (min-width: 2560px) {
  .course-card {
    min-height: 320px;
    min-width: 380px;
  }
}

.course-card:hover {
  background-color: var(--item-color) !important;
  border-left-color: var(--item-color) !important;
}

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.course-card img {
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.08));
}

@media (hover: hover) {
  .course-card:hover img {
    filter: brightness(1.05) drop-shadow(0 15px 12px rgba(0, 0, 0, 0.15));
  }
}
</style>