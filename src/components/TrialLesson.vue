<script setup>
// Ссылка на ТГ или форму
const telegramLink = 'https://t.me/your_username'
</script>

<template>
  <section id="trial-lesson" class="bg-white py-16 md:py-28 px-4 font-gothic w-full relative overflow-hidden">
    
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">
      
      <div class="hidden md:block w-20 shrink-0 border-l-4 border-sigma-pink pl-4" data-aos="fade-right">
        <h2 class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-blue uppercase tracking-tighter">
          Попробуйте
        </h2>
      </div>

      <h2 class="md:hidden text-4xl font-bold text-sigma-blue uppercase tracking-tighter mb-6 border-l-4 border-sigma-pink pl-4">
        Пробный урок
      </h2>

      <div class="flex-1 flex flex-col justify-center">
        <div class="max-w-4xl" data-aos="fade-up">
          <h3 class="text-4xl md:text-6xl font-black text-sigma-blue uppercase tracking-tighter leading-[0.9] mb-8">
            Первое занятие <br> <span class="text-sigma-pink">бесплатно</span>
          </h3>
          
          <p class="text-lg md:text-2xl text-sigma-blue/80 font-medium uppercase tracking-wide mb-12 max-w-2xl">
            Познакомим с миром IT, определим уровень знаний и подберем идеальное направление для вашего ребенка.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <a 
              :href="telegramLink" 
              target="_blank"
              class="w-full sm:w-auto text-center bg-sigma-pink text-white px-10 py-5 text-xl font-black uppercase tracking-widest hover:bg-sigma-blue transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Записаться
            </a>

            <div class="flex flex-col items-center sm:items-start">
              <span class="text-[10px] text-sigma-blue/40 uppercase tracking-[0.2em] font-bold mb-1">Или позвоните нам:</span>
              <a 
                href="tel:+79247174852" 
                class="text-2xl md:text-3xl font-black text-sigma-blue hover:text-sigma-pink transition-colors"
              >
                8 (924) 717-48-52
              </a>
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

/* Плавный переход для тени кнопки */
a {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Декоративный элемент на фоне, чтобы белый блок не был пустым */
@media (min-width: 768px) {
  #trial-lesson::after {
    content: 'СИГМА';
    position: absolute;
    right: -5%;
    bottom: -5%;
    font-size: 20vw;
    font-weight: 900;
    color: rgba(39, 57, 114, 0.03);
    z-index: 0;
    pointer-events: none;
    line-height: 1;
  }
}
</style>