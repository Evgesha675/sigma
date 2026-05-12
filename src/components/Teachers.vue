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
    color: '#F7A735'
  }
]

const getTeacherPhoto = (name) => {
  if (!name) return ''
  return new URL(`../assets/teachers/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="teachers" class="bg-white py-12 md:py-24 font-gothic relative overflow-hidden">
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16">
      
      <div class="hidden md:block w-20 shrink-0 pl-4 relative" data-aos="fade-right" aria-hidden="true">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-pink"></div>
        <div class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-pink uppercase tracking-tighter opacity-90">
          Команда
        </div>
      </div>

      <h2 class="md:sr-only text-4xl font-bold text-sigma-pink uppercase tracking-tighter mb-12 pl-4 border-l-4 border-sigma-pink" data-aos="fade-right">
        Преподаватели
      </h2>

      <div class="flex-1 w-full">
        <div class="flex flex-col gap-8 md:gap-12">
          <div 
            v-for="(teacher, index) in teachers" 
            :key="teacher.id"
            class="teacher-card group flex flex-col sm:flex-row bg-white w-full max-w-5xl mx-auto border-l-8 shadow-md hover:shadow-2xl transition-all duration-300"
            :style="{ borderColor: teacher.color }"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <!-- Photo container -->
            <div class="w-full sm:w-2/5 lg:w-1/3 aspect-square sm:aspect-auto sm:min-h-[300px] overflow-hidden bg-gray-100 flex-shrink-0 relative">
               <img
                  v-if="teacher.photo"
                  :src="getTeacherPhoto(teacher.photo)" 
                  :alt="teacher.name"
                  loading="lazy"
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div v-else class="w-full h-full flex items-center justify-center bg-gray-200">
                  <span class="text-6xl text-gray-400 font-bold opacity-50">{{ teacher.name.charAt(0) }}</span>
                </div>
            </div>

            <!-- Content -->
            <div class="p-8 md:p-10 flex flex-col justify-center flex-1">
              <h3 class="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-none" :style="{ color: teacher.color }">
                {{ teacher.name }}
              </h3>
              
              <div class="mb-6 flex-1">
                <span class="block text-sm uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">Должность</span>
                <p class="text-xl md:text-2xl font-bold text-gray-800 leading-tight uppercase">
                  {{ teacher.position }}
                </p>
              </div>

              <div class="mt-4 pt-6 border-t-2 border-gray-100">
                <span class="block text-sm uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">Опыт работы</span>
                <p class="text-2xl md:text-3xl font-black italic" :style="{ color: teacher.color }">{{ teacher.experience }}</p>
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
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
  }
  
  .teacher-card:hover {
    transform: translateX(8px);
  }
}

.teacher-card img {
  image-rendering: -webkit-optimize-contrast;
}
</style>
