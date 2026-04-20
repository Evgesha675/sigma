<script setup>
const navLinks = [
  { name: 'О школе', href: '#about' },
  { name: 'Направления', href: '#courses' },
  { name: 'Преподаватели', href: '#teachers' },
  { name: 'Контакты', href: '#contacts' },
]
</script>

<template>
  <footer class="bg-sigma-blue pt-20 pb-10 px-4 font-gothic border-t border-white/5">
    <div class="mx-auto w-full max-w-container qhd:max-w-container-qhd">
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        <div class="md:col-span-5 space-y-6">
          <div class="flex items-center">
            <span class="text-3xl font-black text-white uppercase tracking-tighter">
              <span class="text-sigma-pink">Школа</span>
            </span>
          </div>
          <p class="text-white/60 text-sm max-w-sm leading-relaxed uppercase tracking-wider">
            Школа программирования для детей и подростков в Иркутской области. 
            Обучаем технологиям будущего через создание реальных проектов.
          </p>

        </div>

        <div class="md:col-span-3">
          <h4 class="footer-title">Навигация</h4>
          <nav class="flex flex-col gap-3">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" class="footer-link">
              {{ link.name }}
            </a>
          </nav>
        </div>

        <div class="md:col-span-4">
          <h4 class="footer-title">Контакты и данные</h4>
          <div class="space-y-4">
            <a href="tel:+79247174852" class="text-xl font-bold text-white block hover:text-sigma-pink transition-colors">
              8 (924) 717-48-52
            </a>
            <p class="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
              ИНН: 381100000000<br>
              ОГРНИП: 314385000000000<br>
              © 2026 IT_ART. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </p>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.2em]">
          <a href="#" class="text-white/30 hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" class="text-white/30 hover:text-white transition-colors">Договор оферты</a>
        </div>
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

.social-icon-footer {
  @apply w-10 h-10 border border-white/10 flex items-center justify-center text-[10px] font-black text-white hover:bg-sigma-pink hover:border-sigma-pink transition-all duration-300;
}
</style>