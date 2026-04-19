<script setup>
import { ref } from 'vue'

const phoneNumber = '8 (924) 717-48-52'
const rawPhone = '79247174852'

const locations = [
  {
    city: 'Иркутск',
    address: 'Баумана, 237/4',
    mapLink: 'https://yandex.ru/map-widget/v1/?ll=104.154862%2C52.350014&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=104.147521%2C52.351109&whatshere%5Bzoom%5D=17&z=16'
  },
  {
    city: 'Иркутск',
    address: 'Солнечная, 3',
    mapLink: 'https://yandex.ru/map-widget/v1/?ll=104.423511%2C52.237667&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTY5MDI3NTcyEo0B0KDQvtGB0YHQuNGPLCDQmNGA0LrRg9GC0YHQutC40Lkg0LzRg9C90LjRhtC40L_QsNC70YzQvdGL0Lkg0L7QutGA0YPQsywg0L_QvtGB0ZHQu9C-0Log0JzQvtC70L7QtNGR0LbQvdGL0LksINCh0L7Qu9C90LXRh9C90LDRjyDRg9C70LjRhtCwLCAzIgoN19jQQhVf81BC&tab=inside&utm_source=share&z=17.19'
  },
  {
    city: 'Большой Луг',
    address: 'Клубная улица, 2а',
    mapLink: 'https://yandex.ru/map-widget/v1/?ll=104.077083%2C52.054958&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=104.076098%2C52.055465&whatshere%5Bzoom%5D=17&z=17.9'
  },
  {
    city: 'Слюдянка',
    address: 'Кутелева, 42',
    mapLink: 'https://yandex.ru/map-widget/v1/?l=pht&ll=103.722447%2C51.650913&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDk5NjY3NDE2EnrQoNC-0YHRgdC40Y8sINCY0YDQutGD0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KHQu9GO0LTRj9C90LrQsCwg0YPQu9C40YbQsCDQuNC80LXQvdC4INCc0LDQudC-0YDQsCDQmtGD0YLQtdC70LXQstCwLCA0MiIKDeRxz0IViZpOQg%2C%2C&utm_source=share&z=17.19'
  }
]

const activeIndex = ref(0)
</script>

<template>
  <section id="contacts" class="bg-sigma-blue py-24 md:py-32 px-4 font-gothic relative overflow-hidden">
    <div class="mx-auto w-full max-w-container qhd:max-w-container-qhd flex flex-col md:flex-row gap-12 md:gap-20 items-stretch relative z-10">
      
      <div class="hidden md:block w-20 shrink-0 border-l-4 border-sigma-pink pl-4">
        <h2 class="vertical-title text-5xl lg:text-6xl font-bold text-white uppercase tracking-tighter">
          Контакты
        </h2>
      </div>

      <h2 class="md:hidden text-4xl font-bold text-white uppercase tracking-tighter mb-10 border-l-4 border-sigma-pink pl-4">
        Контакты
      </h2>

      <div class="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="space-y-10">
          <div class="space-y-6">
            <span class="text-white text-[10px] font-black uppercase tracking-[0.3em] block">Наши филиалы</span>
            <div class="flex flex-col gap-4">
              <button 
                v-for="(loc, index) in locations" 
                :key="index"
                @click="activeIndex = index"
                class="text-left p-4 border-l-2 transition-all duration-300 outline-none"
                :class="activeIndex === index 
                  ? 'border-sigma-pink bg-white/10' 
                  : 'border-white/10 hover:border-white/30 bg-transparent'"
              >
                <span class="block text-[10px] uppercase opacity-50 text-white mb-1">{{ loc.city }}</span>
                <p class="text-lg md:text-xl text-white font-bold leading-tight">{{ loc.address }}</p>
              </button>
            </div>
          </div>

          <div class="contact-block">
            <span class="text-white text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Запись по телефону</span>
            <a :href="`tel:${rawPhone}`" class="text-3xl md:text-4xl font-black text-white hover:text-sigma-pink transition-colors">
              {{ phoneNumber }}
            </a>
          </div>

          <div class="contact-block">
            <span class="text-white text-[10px] font-black uppercase tracking-[0.3em] block mb-4">Мы в сети</span>
            <div class="flex gap-6">
                       <!--   !-- VK -->
              <a href="https://vk.com/your_profile" target="_blank"
                class="opacity-80 hover:opacity-100 transition-opacity">
                <img height="32" width="32" src="https://cdn.simpleicons.org/vk/white" />
              </a>

              <!-- Telegram -->
              <a href="https://t.me/your_username" target="_blank"
                class="opacity-80 hover:opacity-100 transition-opacity">
                <img height="32" width="32" src="https://cdn.simpleicons.org/telegram/white" />
              </a>

              <!-- Instagram -->
              <a href="https://instagram.com/your_username" target="_blank"
                class="opacity-80 hover:opacity-100 transition-opacity">
                <img height="32" width="32" src="https://cdn.simpleicons.org/instagram/white" />
              </a>
            </div>
          </div>
        </div>

        <div class="map-container overflow-hidden rounded-sm relative shadow-2xl">
          <transition name="fade" mode="out-in">
            <iframe 
              :key="activeIndex"
              :src="locations[activeIndex].mapLink" 
              class="absolute inset-0 w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
          </transition>
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

.map-container {

  @apply w-full h-[450px] lg:h-[600px] bg-white/5 border-2 border-white/10;
}

/* Анимация перехода между картами */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>