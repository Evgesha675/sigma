<script setup>
import { ref } from 'vue'

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
    position: 'Арт-директор,Преподаватель', 
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
    name: 'Анастасия Владимировна ', 
    position: 'Преподаватель английского языка', 
    experience: '10 лет', 
    photo: '', 
    color: '#28A83E' 
  }
]

const getTeacherPhoto = (name) => {
  return new URL(`../assets/teachers/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="teachers" class="bg-white py-12 md:py-24 font-gothic relative overflow-hidden">
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16">
      
      <div class="hidden md:block w-20 shrink-0 pl-4 relative" data-aos="fade-right">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-pink"></div>
        <h2 class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-pink uppercase tracking-tighter opacity-90">
          Команда
        </h2>
      </div>

      <h2 class="md:hidden text-4xl font-bold text-sigma-pink uppercase tracking-tighter mb-20 pl-4 border-l-4 border-sigma-pink" data-aos="fade-right">
        Преподаватели
      </h2>

      <div class="flex-1 w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          <div 
            v-for="(teacher, index) in teachers" 
            :key="teacher.id"
            class="teacher-card group relative flex flex-col cursor-pointer transition-all duration-500"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="relative z-20 flex justify-center h-16 md:h-20">
              <div class="absolute -top-12 md:-top-16 w-40 md:w-44 aspect-square rounded-full border-4 border-white bg-white overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-110">
                <img 
                  :src="getTeacherPhoto(teacher.photo)" 
                  :alt="teacher.name"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div 
              class="flex-1 p-6 md:p-8 pt-16 md:pt-20 flex flex-col text-left transition-all duration-300 shadow-lg group-hover:shadow-2xl"
              :style="{ backgroundColor: teacher.color }"
            >
              <h3 class="text-xl font-bold uppercase text-white leading-tight mb-6 min-h-[3.5rem] flex items-center">
                {{ teacher.name }}
              </h3>
              
              <div class="mb-8 text-white flex-1">
                <span class="block text-[10px] uppercase tracking-widest opacity-70 mb-2">Должность:</span>
                <p class="text-sm md:text-base font-medium leading-snug">
                  {{ teacher.position }}
                </p>
              </div>

              <div class="mt-auto pt-4 border-t border-white/20 text-white">
                <span class="block text-[10px] uppercase tracking-widest opacity-70 mb-1">Опыт работы:</span>
                <p class="text-base md:text-lg font-bold italic">{{ teacher.experience }}</p>
              </div>
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
  .teacher-card {
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .teacher-card:hover {
    /* Чуть уменьшил подъем, чтобы не перекрывать контент выше */
    transform: translateY(-10px);
  }
}

.teacher-card img {
  image-rendering: -webkit-optimize-contrast;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.15));
}
</style>