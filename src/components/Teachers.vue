<script setup>
import { ref } from 'vue'

const teachers = [
  { 
    id: 1, 
    name: 'Павел Николаевич', 
    position: 'Директор, Преподаватель', 
    experience: '10 лет', 
    photo: 'Павел_Николаевич.png', 
    color: '#31A2D6'
  },
  { 
    id: 2, 
    name: 'Галина Петровна', 
    position: 'Арт-директор, Преподаватель',
    experience: '8 лет', 
    photo: 'prepod2.png', 
    color: '#31A2D6'
  },
  { 
    id: 3, 
    name: 'Ольга Николаевна', 
    position: 'Преподаватель математики', 
    experience: '20 лет', 
    photo: 'Ольга_Николаевна.png', 
    color: '#31A2D6'
  },
    {
    id: 4, 
    name: 'Анастасия Владимировна',
    position: 'Преподаватель английского языка', 
    experience: '10 лет', 
    photo: '', 
    color: '#31A2D6'
  }
]

const getTeacherPhoto = (name) => {
  if (!name) return ''
  return new URL(`../assets/teachers/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="teachers" class="bg-white py-16 md:py-28 px-4 font-gothic relative overflow-hidden">
    <!-- Grid background matching the Trial Lesson -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background-size: 40px 40px; background-image: linear-gradient(to right, rgba(39, 57, 114, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(39, 57, 114, 0.1) 1px, transparent 1px);"></div>

    <div class="main-container flex flex-col gap-8 md:gap-12 relative z-10">
      
      <div class="w-full mb-8" data-aos="fade-right">
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-[#273972] uppercase tracking-tighter border-l-8 border-[#E51B51] pl-6 md:pl-8 py-2 bg-[#273972]/5">
          Преподаватели
        </h2>
      </div>

      <div class="w-full">
        <div class="flex flex-wrap justify-center gap-8 md:gap-12">

          <div 
            v-for="(teacher, index) in teachers" 
            :key="teacher.id"
            class="teacher-card group flex flex-col cursor-pointer transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[250px] bg-[#e6e2df] rounded-xl border-2 border-[#273972] shadow-[6px_6px_0_0_rgba(39,57,114,1)] overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Mac Window Top Bar -->
            <div class="h-8 md:h-10 border-b-2 border-[#273972] flex items-center px-3 gap-1.5 shrink-0" :style="{ backgroundColor: teacher.color }">
              <div class="w-3 h-3 rounded-full bg-white border border-[#273972]"></div>
              <div class="w-3 h-3 rounded-full bg-white border border-[#273972]"></div>
              <div class="w-3 h-3 rounded-full bg-white border border-[#273972]"></div>
            </div>

            <div class="p-3 md:p-4 flex flex-col flex-1 h-full">
              <!-- Square Image Container -->
              <div class="w-full aspect-square border-2 border-[#273972] bg-[#273972] mb-4 overflow-hidden relative">
                <img
                  v-if="teacher.photo"
                  :src="getTeacherPhoto(teacher.photo)" 
                  :alt="teacher.name"
                  loading="lazy"
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div v-else class="w-full h-full flex items-center justify-center text-white/50 text-4xl">
                  👤
                </div>
              </div>

              <!-- Text Content (Horizontal layout style per reference) -->
              <div class="flex flex-col text-[#273972] flex-1 border-2 border-[#273972] border-dashed p-3">
                <h3 class="font-bold text-sm md:text-base leading-tight mb-2 uppercase break-words border-b border-[#273972]/30 pb-2">
                  {{ teacher.name }}
                </h3>

                <div class="text-xs md:text-sm font-medium flex flex-col gap-1 flex-1">
                  <div class="flex flex-col">
                    <span class="text-[10px] opacity-70 uppercase tracking-wider">Должность:</span>
                    <span class="leading-tight">{{ teacher.position }}</span>
                  </div>

                  <div class="flex flex-col mt-auto pt-2">
                    <span class="text-[10px] opacity-70 uppercase tracking-wider">Опыт работы:</span>
                    <span class="leading-tight">{{ teacher.experience }}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (hover: hover) {
  .teacher-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 0 rgba(39,57,114,1);
  }
}
</style>
