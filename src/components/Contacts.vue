<script setup>
import { ref } from 'vue'
import { siteConfig } from '../config/data.js'

const phoneNumber = siteConfig.phone
const rawPhone = siteConfig.phoneLink.replace(/\D/g, '')

const locations = [
  {
    city: 'Иркутск',
    address: 'Баумана, 237/4',
    mapLink: 'https://yandex.ru/map-widget/v1/?ll=104.154862%2C52.350014&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=104.147521%2C52.351109&whatshere%5Bzoom%5D=17&z=16'
  },
  {
    city: 'Молодёжный',
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
  <section id="contacts" class="bg-sigma-blue py-12 md:py-24 px-4 font-gothic relative overflow-hidden">
    <div class="main-container flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
      
      <!-- Боковой заголовок -->
      <div class="hidden md:block w-20 shrink-0 pl-4 relative" data-aos="fade-right">
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-sigma-pink"></div>
        <div class="vertical-title text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter opacity-90 leading-none">
          Контакты
        </div>
      </div>

      <div class="flex-1 w-full">
        <h2 class="md:sr-only text-4xl font-black text-white uppercase tracking-tighter mb-12 pl-4 border-l-4 border-sigma-pink" data-aos="fade-right">
          Контакты
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <!-- Левая колонка -->
          <div class="space-y-10 order-2 lg:order-1" data-aos="fade-up">
            <div class="space-y-6">
              <span class="text-white text-[10px] font-black uppercase tracking-[0.3em] block opacity-60">Наши филиалы</span>
              <div class="flex flex-col gap-3">
                <button 
                  v-for="(loc, index) in locations" 
                  :key="index"
                  @click="activeIndex = index"
                  class="text-left p-4 border-l-2 transition-all duration-300 outline-none"
                  :class="activeIndex === index 
                    ? 'border-sigma-pink bg-white/10' 
                    : 'border-white/10 hover:border-white/40 bg-transparent'"
                >
                  <span class="block text-[10px] uppercase opacity-50 text-white mb-1">{{ loc.city }} [0{{ index + 1 }}]</span>
                  <p class="text-lg md:text-xl text-white font-bold leading-tight">{{ loc.address }}</p>
                </button>
              </div>
            </div>

            <!-- Блок с телефоном и соцсетями -->
            <div class="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24">
              <div class="contact-block shrink-0">
                <span class="text-white text-[10px] font-black uppercase tracking-[0.3em] block mb-3 opacity-60">Телефон</span>
                <!-- whitespace-nowrap чтобы не рвало номер -->
                <a :href="`tel:${rawPhone}`" class="text-2xl md:text-3xl font-black text-white hover:text-sigma-pink transition-colors whitespace-nowrap">
                  {{ phoneNumber }}
                </a>
              </div>

              <div class="contact-block">
                <span class="text-white text-[10px] font-black uppercase tracking-[0.3em] block mb-4 opacity-60">Соцсети</span>
                <div class="flex gap-5">
                  <a :href="siteConfig.vk" target="_blank" class="hover:scale-110 transition-transform">
                    <img height="28" width="28" src="https://cdn.simpleicons.org/vk/white" alt="VK" />
                  </a>
                  <a :href="siteConfig.telegram" target="_blank" class="hover:scale-110 transition-transform">
                    <img height="28" width="28" src="https://cdn.simpleicons.org/telegram/white" alt="TG" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Карта -->
          <div 
            class="h-[400px] md:h-[500px] lg:h-[600px] w-full relative border-2 border-white/20 order-1 lg:order-2"
            data-aos="zoom-in"
          >
            <iframe 
              :key="activeIndex"
              :src="locations[activeIndex].mapLink" 
              class="w-full h-full border-0 grayscale-[0.3] contrast-[1.1]"
              allowfullscreen="true"
              loading="lazy"
            ></iframe>
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

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>