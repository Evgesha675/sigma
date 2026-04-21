<template>
  <section id="about" class="bg-white py-16 md:py-28 px-4 w-full font-gothic">
    <div class="main-container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div 
          data-aos="fade-right"
          data-aos-duration="1000"
          class="order-2 md:order-1 flex justify-center md:justify-start"
        >
          <img 
            src="../assets/mascot/mascot_1.svg" 
            alt="Маскот Сигма" 
            class="w-full max-w-[320px] md:max-w-[500px] h-auto drop-shadow-xl" 
          />
        </div>

        <div 
          data-aos="fade-left"
          data-aos-duration="1000"
          class="order-1 md:order-2 flex flex-col items-start text-left"
        >
          <h2 class="text-6xl md:text-8xl font-bold text-sigma-blue uppercase tracking-tighter mb-8 leading-none">
            О НАС
          </h2>
          <div class="space-y-6 text-sigma-blue">
            <p class="text-lg md:text-2xl leading-relaxed font-medium">
              Мы создали школу, где каждый ребенок сможет раскрыть свои таланты в области информационных технологий и точных наук. Наши программы обучения охватывают программирование, информатику, математику, робототехнику и многое другое.
            </p>
            <p class="text-lg md:text-2xl leading-relaxed font-medium border-l-4 border-sigma-pink/30 pl-6">
              Мы верим в индивидуальный подход, креативное обучение и создание дружелюбной атмосферы. Наша миссия — воспитать новое поколение инноваторов и исследователей.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Скрипт не требуется
</script>