<script setup>
import { siteConfig } from '../config/data.js'

const teachers = [
  { 
    id: 1, 
    name: 'Павел Николаевич', 
    position: 'Директор, Преподаватель', 
    experience: '10 лет', 
    photo: 'Павел_Николаевич.png', 
    color: '#273972' 
  },
  { 
    id: 2, 
    name: 'Галина Петровна', 
    position: 'Арт-директор, Преподаватель', 
    experience: '8 лет', 
    photo: 'prepod2.png', 
    color: '#E51B51' 
  },
  { 
    id: 3, 
    name: 'Ольга Николаевна', 
    position: 'Преподаватель математики', 
    experience: '20 лет', 
    photo: 'Ольга_Николаевна.png', 
    color: '#28A83E' 
  },
  { 
    id: 4, 
    name: 'Анастасия Владимировна', 
    position: 'Преподаватель английского языка', 
    experience: '10 лет', 
    photo: '', 
    color: '#273972' 
  }
]

const getTeacherPhoto = (name) => {
  if (!name) return 'https://via.placeholder.com/400x400?text=Sigma' // Заглушка если фото нет
  return new URL(`../assets/teachers/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="teachers" class="bg-white py-12 md:py-24 font-gothic relative overflow-hidden">
    <div class="main-container flex flex-col gap-8 md:gap-12">
      
      <div class="hidden md:block w-20 shrink-0 pl-4 relative" data-aos="fade-right" aria-hidden="true">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-pink"></div>
        <div class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-pink uppercase tracking-tighter opacity-90">
          Команда
        </div>
      </div>

      <h2 class="md:sr-only text-4xl font-bold text-sigma-pink uppercase tracking-tighter mb-20 pl-4 border-l-4 border-sigma-pink" data-aos="fade-right">
        Преподаватели
      </h2>

      <div class="flex-1 w-full">
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-24">
          <div 
            v-for="(teacher, index) in teachers" 
            :key="teacher.id"
            class="teacher-card group relative flex flex-col w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Плоская карточка "Окно" -->
            <!-- Удалены тени и скругления. Добавлена рамка. -->
            <div class="flex-1 flex flex-col border-2 border-sigma-blue bg-white relative">
              
              <!-- Верхняя панель окна -->
              <div 
                class="h-8 flex items-center justify-end px-4 gap-1.5 border-b-2 border-sigma-blue"
                :style="{ backgroundColor: teacher.color }"
              >
                <div class="w-2 h-2 rounded-full bg-white/40"></div>
                <div class="w-2 h-2 rounded-full bg-white/60"></div>
                <div class="w-2 h-2 rounded-full bg-white"></div>
              </div>

              <!-- Контент карточки -->
              <div class="p-6 pt-12 md:p-8 md:pt-14 flex flex-col items-center md:items-start text-center md:text-left flex-1">
                
                <!-- Фото теперь внутри "окна", круглое, без тени, с рамкой -->
                <div class="absolute -top-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 w-24 h-24 border-2 border-sigma-blue rounded-full overflow-hidden bg-gray-100 z-30">
                  <img 
                    :src="getTeacherPhoto(teacher.photo)" 
                    :alt="teacher.name"
                    class="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 class="text-xl font-black uppercase text-sigma-blue leading-tight mb-4 min-h-[3rem] flex items-center">
                  {{ teacher.name }}
                </h3>
                
                <div class="mb-6 text-sigma-blue/80 w-full">
                  <span class="block text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Должность:</span>
                  <p class="text-sm font-medium leading-snug">
                    {{ teacher.position }}
                  </p>
                </div>

                <div class="mt-auto pt-4 border-t border-sigma-blue/10 w-full text-sigma-blue">
                  <span class="block text-[10px] uppercase tracking-widest font-bold opacity-50 mb-1">Опыт работы:</span>
                  <p class="text-lg font-black italic" :style="{ color: teacher.color }">{{ teacher.experience }}</p>
                </div>
              </div>

              <!-- Декоративный уголок в стиле Material (опционально) -->
              <div class="absolute bottom-0 right-0 w-4 h-4 bg-sigma-blue/5"></div>
            </div>
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

@media (hover: hover) {
  .teacher-card:hover {
    transform: translateY(-5px);
  }
}

/* Убираем фильтры и тени с фото */
.teacher-card img {
  image-rendering: -webkit-optimize-contrast;
}
</style>