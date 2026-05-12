<script setup>
const getDecorUrl = (name) => new URL(`../assets/decor/${name}`, import.meta.url).href

const features = [
  'Работа в команде', 
  'Возможность поработать с новыми технологиями', 
  'Дополнить своё портфолио', 
  'Прокачать лидерский навык'
]
</script>

<template>
  <section id="project-activity" class="bg-white py-16 md:py-28 px-4 w-full overflow-hidden font-gothic">
    <div class="main-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div 
          data-aos="fade-right"
          data-aos-duration="1000"
          class="flex flex-col items-start text-left"
        >
          <h2 class="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold text-sigma-blue uppercase tracking-tighter mb-8 leading-[0.9] break-words">
            Проектная деятельность
          </h2>
          
          <div class="space-y-6 text-sigma-blue w-full">
            <ul class="space-y-3 mb-10">
              <li 
                v-for="(item, index) in features" 
                :key="index"
                data-aos="fade-up"
                :data-aos-delay="200 + (index * 100)"
                class="flex items-center gap-3 text-lg md:text-xl font-medium"
              >
                <span class="w-3 h-3 rounded-full bg-sigma-pink shrink-0 shadow-[0_0_10px_rgba(229,27,81,0.4)]"></span>
                {{ item }}
              </li>
            </ul>

            <div class="space-y-8 text-sigma-blue/90">
              <p class="text-lg md:text-2xl leading-relaxed font-medium">
                Школа программирования и точных наук для детей и подростков, где во главу угла ставится очень популярный и эффективный метод — проектный подход.
              </p>
              <p class="text-lg md:text-2xl leading-relaxed font-medium">
                В отличие от классической системы дополнительного образования, на каждом из наших курсов предусмотрены занятия по развитию <strong>SOFT-компетенции</strong>.
              </p>
              <p class="text-lg md:text-2xl leading-relaxed font-medium border-l-4 border-sigma-pink pl-6 py-1">
                Благодаря беспрерывной образовательной траектории, ребенок в любой момент может принять участие в открытых лекциях и мастер-классах.
              </p>
            </div>
          </div>
        </div>

        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
          class="hidden lg:flex relative justify-center items-center"
        >
          <div class="relative w-full lg:max-w-[650px]">
            <img 
              :src="getDecorUrl('proektnaya_deyatelnost.png')" 
              alt="Проектная деятельность в Сигме" 
              class="w-full h-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.15)] visual-main" 
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.visual-main {
  image-rendering: -webkit-optimize-contrast;
  /* Можно добавить легкое покачивание, если картинка выглядит скучновато */
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@media (max-width: 400px) {
  h2 {
    font-size: 2.1rem;
    line-height: 1;
  }
}
</style>