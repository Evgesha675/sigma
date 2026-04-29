<script setup>
import { siteConfig } from '../config/data.js'

const navLinks = [
  { name: 'О школе', href: '#about' },
  { name: 'Направления', href: '#courses' },
  { name: 'Проекты', href: '#project-activity' },
  { name: 'Преподаватели', href: '#teachers' },
  { name: 'Контакты', href: '#contacts' },
]
</script>

<template>
  <footer class="bg-sigma-blue pt-20 pb-10 px-4 font-gothic border-t border-white/5 overflow-hidden">
    <div class="main-container">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        <div class="md:col-span-5 space-y-6" data-aos="fade-up">
          <div class="flex items-center">
            <img src="../assets/logo/logo.svg" alt="СИГМА" loading="lazy" class="h-6 md:h-8 w-auto brightness-0 invert" />
          </div>
          <p class="text-white/60 text-sm max-w-sm leading-relaxed uppercase tracking-wider">
            Школа программирования для детей и подростков в Иркутской области. 
            Обучаем технологиям будущего через создание реальных проектов.
          </p>
        </div>

        <div class="md:col-span-3" data-aos="fade-up" data-aos-delay="100">
          <h4 class="footer-title">Навигация</h4>
          <nav class="flex flex-col gap-3">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" class="footer-link">
              {{ link.name }}
            </a>
          </nav>
        </div>

        <div class="md:col-span-4" data-aos="fade-up" data-aos-delay="200">
          <h4 class="footer-title">Связь</h4>
          <div class="space-y-4">
            <a :href="`tel:${siteConfig.phoneLink}`" class="text-xl md:text-2xl font-bold text-white block hover:text-sigma-pink transition-colors">
              {{ siteConfig.phone }}
            </a>
            <div class="space-y-1 mt-4">
              <p class="text-[10px] text-white/60 leading-relaxed uppercase tracking-widest font-bold">
                {{ siteConfig.ipName }}
              </p>
              <p class="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                ИНН: {{ siteConfig.inn }} | ОГРНИП: {{ siteConfig.ogrnip }}
              </p>
              <p class="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest mt-2">
                © {{ new Date().getFullYear() }} Школа «Сигма». Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] uppercase tracking-[0.2em]">
<a href="https://evgesha675.github.io/sigma/privacy.html" target="_blank" class="text-white/30 hover:text-white transition-colors">
  Политика конфиденциальности
</a>          <a href="#" class="text-white/30 hover:text-white transition-colors" @click.prevent>Договор оферты</a>
        </div>
        
        <!-- <div class="text-[10px] text-white/20 uppercase tracking-widest">
          Разработка: <a href="#" class="hover:text-sigma-pink transition-colors"></a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-title {
  @apply text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 block border-l-2 border-sigma-pink pl-3;
}

.footer-link {
  @apply text-white/60 text-xs font-bold uppercase tracking-widest hover:text-sigma-pink transition-colors duration-300;
}

.brightness-0.invert {
  filter: brightness(0) invert(1);
  opacity: 0.9;
}
</style>