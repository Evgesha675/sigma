<script setup>
const reviews = [
  {
    id: 1,
    platform: '2GIS',
    author: 'Евгения С.',
    text: 'Сын ходит на программирование с удовольствием! Замечательные преподаватели, очень понятно всё объясняют, даже мне понятно стало) Отличная атмосфера и современный подход.',
    rating: 5,
    date: '15 мая 2024',
    bgColor: '#A0D23F', // 2GIS green
    logo: 'https://cdn.simpleicons.org/2gis/white',
    link: 'https://2gis.ru/' // Placeholder link to 2gis, normally would link to business page
  },
  {
    id: 2,
    platform: 'Яндекс.Карты',
    author: 'Игорь В.',
    text: 'Лучшая школа программирования в городе. Ребенок сам просится на занятия, что для нас редкость. Изучают Roblox и Python. Рекомендую всем родителям.',
    rating: 5,
    date: '02 апреля 2024',
    bgColor: '#FC3F1D', // Yandex red
    logo: 'https://cdn.simpleicons.org/yandex/white',
    link: 'https://yandex.ru/maps/' // Placeholder link to yandex maps
  },
  {
    id: 3,
    platform: '2GIS',
    author: 'Анна К.',
    text: 'Очень классное место. Дочь подтянула математику и начала увлекаться дизайном. Преподаватель Галина просто чудо! Огромное спасибо за вашу работу.',
    rating: 5,
    date: '20 марта 2024',
    bgColor: '#A0D23F',
    logo: 'https://cdn.simpleicons.org/2gis/white',
    link: 'https://2gis.ru/'
  }
]
</script>

<template>
  <section id="reviews" class="bg-white py-16 md:py-28 px-4 font-gothic w-full relative overflow-hidden">
    <div class="main-container flex flex-col gap-8 md:gap-12">

      <div class="w-full mb-4 md:mb-8" data-aos="fade-right">
        <h2 class="text-4xl md:text-6xl lg:text-7xl font-bold text-sigma-blue uppercase tracking-tighter border-l-8 border-sigma-pink pl-6 md:pl-8 py-2 bg-sigma-blue/5">
          Отзывы
        </h2>
      </div>

      <div class="w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <a
            v-for="(review, index) in reviews"
            :key="review.id"
            :href="review.link"
            target="_blank"
            rel="noopener noreferrer"
            class="review-card block border-t-[10px] p-6 md:p-8 flex flex-col items-start text-left bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
            :style="{ borderTopColor: review.bgColor }"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="w-full flex justify-between items-center mb-6">
              <div
                class="w-10 h-10 flex items-center justify-center rounded-full"
                :style="{ backgroundColor: review.bgColor }"
              >
                <img :src="review.logo" :alt="review.platform" class="w-5 h-5 object-contain" />
              </div>
              <div class="flex gap-1">
                <svg v-for="star in review.rating" :key="star" class="w-5 h-5 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <p class="text-sigma-blue/80 italic text-sm md:text-base leading-relaxed mb-6 flex-grow">
              «{{ review.text }}»
            </p>

            <div class="mt-auto w-full border-t border-sigma-blue/10 pt-4 flex justify-between items-end">
              <h3 class="font-bold text-sigma-blue uppercase tracking-wider text-sm">
                {{ review.author }}
              </h3>
              <span class="text-[10px] text-sigma-blue/50 uppercase tracking-widest">
                {{ review.date }}
              </span>
            </div>
          </a>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.review-card {
  min-height: 250px;
}
</style>
