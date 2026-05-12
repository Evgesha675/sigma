<script setup>
</script>

<template>
  <section id="reviews" class="bg-gray-50 py-12 md:py-24 font-gothic w-full">
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16 items-stretch">

      <div class="hidden md:block w-20 shrink-0 border-l-4 border-sigma-blue pl-4" data-aos="fade-right" aria-hidden="true">
        <div class="vertical-title text-5xl lg:text-6xl font-bold text-sigma-blue uppercase tracking-tighter">
          Отзывы
        </div>
      </div>

      <h2 class="md:sr-only text-4xl font-bold text-sigma-blue uppercase tracking-tighter mb-6 border-l-4 border-sigma-blue pl-4">
        Отзывы
      </h2>

      <div class="flex-1 w-full" data-aos="fade-up">
        <p class="text-gray-600 mb-8 max-w-2xl text-lg">
          Что говорят о нас наши ученики и их родители на Яндекс Картах.
        </p>

        <div class="w-full h-[800px] overflow-hidden relative bg-white shadow-lg rounded-xl">
          <iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/1125219904?comments"></iframe>
          <a href="https://yandex.ru/maps/org/sigma/1125219904/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Сигма на карте Астрахани — Яндекс Карты</a>
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
</style>
