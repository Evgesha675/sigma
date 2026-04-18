<template>
  <section id="courses" class="bg-white py-16 md:py-24 px-4 overflow-hidden">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
      
      <div class="hidden md:block w-24 shrink-0" data-aos="fade-right">
        <img 
          src="../assets/logo/Courses.svg" 
          alt="Направления" 
          class="w-full h-auto"
        />
      </div>

      <h2 class="md:hidden text-4xl font-bold text-sigma-blue uppercase tracking-tighter mb-3">
        Направления
      </h2>

      <div class="flex-1">
        <div class="flex overflow-x-auto pb-8 snap-x md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 scrollbar-hide">
          
          <div 
            v-for="i in 9" :key="i"
            class="min-w-[280px] snap-center mr-4 md:mr-0 border-4 border-sigma-blue p-6 flex flex-col items-center text-center cursor-pointer hover:bg-sigma-blue hover:text-white transition-all group"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <div class="w-32 h-32 rounded-full border-4 border-sigma-blue mb-6 overflow-hidden bg-gray-100 group-hover:border-white transition-colors">
              <img src="https://via.placeholder.com/150" alt="icon" class="w-full h-full object-cover" />
            </div>
            
            <h3 class="text-xl font-bold uppercase leading-tight mb-2">Название курса {{ i }}</h3>
            <p class="text-sm opacity-80 uppercase font-bold">Подробнее →</p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Скрываем полосу прокрутки, но оставляем возможность скроллить */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>