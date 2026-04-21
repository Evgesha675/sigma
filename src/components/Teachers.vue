<script setup>
import { ref } from 'vue'

const teachers = [
  { 
    id: 1, 
    name: 'Павел Николаевич', 
    position: 'Директор, Преподаватель', 
    experience: '5 лет', 
    photo: 'Павел_Николаевич.png', 
    color: '#273972' 
  },
  { 
    id: 2, 
    name: 'Галина Петровна', 
    position: 'Преподаватель', 
    experience: '8 лет', 
    photo: 'Галина_Петровна.png', 
    color: '#E51B51' 
  },
  { 
    id: 3, 
    name: 'Ольга Николаевна', 
    position: 'Преподаватель', 
    experience: '20 лет', 
    photo: 'Ольга_Николаевна.png', 
    color: '#28A83E' 
  },
  { 
    id: 4, 
    name: 'Галина Георгиевна', 
    position: 'Преподаватель', 
    experience: '33 года', 
    photo: 'Галина_Георгиевна.png', 
    color: '#F7A735' 
  }
]

const getTeacherPhoto = (name) => {
  return new URL(`../assets/teachers/${name}`, import.meta.url).href
}
</script>

<template>
  <section id="teachers" class="bg-white py-24 md:py-32 px-4 font-gothic relative">
    <div class="mx-auto w-full max-w-container qhd:max-w-container-qhd flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
      
      <div class="hidden md:block w-20 shrink-0 pl-4 relative">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-pink"></div>
        <h2 class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-pink uppercase tracking-tighter opacity-90">
          Команда
        </h2>
      </div>

      <h2 class="md:hidden text-4xl font-bold text-sigma-pink uppercase tracking-tighter mb-16 pl-4 border-l-4 border-sigma-pink">
        Преподаватели
      </h2>

      <div class="flex-1 flex flex-col">
        <div 
          class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 qhd:grid-cols-5 gap-y-24 md:gap-x-6 md:gap-y-24 pb-10 items-stretch"
        >
          <div 
            v-for="(teacher, index) in teachers" 
            :key="teacher.id"
            class="teacher-card relative flex flex-col items-center cursor-pointer transition-all duration-300 group w-full"
          >
            <div class="relative w-full h-40 md:h-auto md:aspect-square -mb-12 md:-mb-20 z-20 flex justify-center items-center overflow-visible">
              <div class="w-64 h-64 md:w-48 lg:w-44 xl:w-52 2xl:w-56 qhd:w-64 aspect-square shrink-0 rounded-full border-4 border-white bg-white overflow-hidden shadow-xl transition-all duration-500 origin-bottom group-hover:scale-105">
                <img 
                  :src="getTeacherPhoto(teacher.photo)" 
                  :alt="teacher.name"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div 
              class="w-full flex-1 p-6 md:p-8 pt-24 md:pt-28 flex flex-col items-start text-left shadow-lg transition-colors duration-300"
              :style="{ backgroundColor: teacher.color }"
            >
              <h3 class="text-xl md:text-2xl font-bold uppercase text-white leading-tight mb-4 font-gothic">
                {{ teacher.name }}
              </h3>
              
              <div class="mb-4 text-white font-gothic">
                <span class="block text-xs uppercase tracking-widest opacity-70 mb-1">Должность:</span>
                <p class="text-sm md:text-base font-medium leading-snug">
                  {{ teacher.position }}
                </p>
              </div>

              <div class="mt-auto text-white font-gothic">
                <span class="block text-xs uppercase tracking-widest opacity-70 mb-1">Опыт работы:</span>
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

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.teacher-card {
  /* Чтобы карточки имели одинаковую высоту внутри грида */
  height: 100%;
}

.teacher-card img {
  /* Улучшенное сглаживание для фото */
  image-rendering: -webkit-optimize-contrast;
  filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.15));
}
</style>