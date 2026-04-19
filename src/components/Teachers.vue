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

const isGrid = ref(false)
const activeIndex = ref(0)

const getTeacherPhoto = (name) => {
  return new URL(`../assets/teachers/${name}`, import.meta.url).href
}

const handleScroll = (event) => {
  if (isGrid.value) return
  const scrollLeft = event.target.scrollLeft
  const width = event.target.offsetWidth
  activeIndex.value = Math.round(scrollLeft / width)
}
</script>

<template>
  <section id="teachers" class="bg-white py-24 md:py-32 px-4 font-gothic relative">
    
    <button 
      @click="isGrid = !isGrid"
      class="md:hidden fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg border-2 border-sigma-pink transition-all duration-300 flex items-center justify-center bg-white active:scale-90"
    >
      <div class="w-3 h-3 rounded-full transition-colors" :class="isGrid ? 'bg-sigma-pink' : 'bg-gray-300'"></div>
    </button>

    <div class="mx-auto w-full max-w-container qhd:max-w-container-qhd 4k:max-w-container-4k flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
      
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
          @scroll="handleScroll"
          :class="[
            'w-full transition-all duration-500 pt-20 md:pt-0 items-stretch',
            !isGrid 
              ? 'flex overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide md:grid' 
              : 'grid grid-cols-1 gap-y-24 pb-10 md:grid',
            'md:grid md:grid-cols-2 lg:grid-cols-4 qhd:grid-cols-5 md:gap-x-6 md:gap-y-24 md:overflow-visible'
          ]"
        >
          <div 
            v-for="(teacher, index) in teachers" 
            :key="teacher.id"
            :class="[
              'teacher-card relative flex flex-col items-center cursor-pointer transition-all duration-300 group',
              !isGrid ? 'min-w-[85vw] snap-center mr-6 md:mr-0 md:min-w-0' : 'w-full'
            ]"
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

        <div v-if="!isGrid" class="flex md:hidden justify-center gap-2 mt-4">
          <div 
            v-for="(_, index) in teachers" 
            :key="index"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="activeIndex === index ? 'bg-sigma-pink w-6' : 'bg-gray-300 w-1.5'"
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