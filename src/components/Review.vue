<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { siteConfig } from '../config/data.js'

// По умолчанию открываем первый филиал (Молодёжный)
const activeBranch = ref(siteConfig.branches[0])

// Функция для смены филиала
const setBranch = async (branch) => {
  activeBranch.value = branch
  // Перезагружаем виджет при смене ID
  await nextTick()
  if (window.DG && window.DG.Widget && window.DG.Widget.Loader) {
    window.DG.Widget.Loader.init()
  }
}

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://widgets.2gis.com/js/external/widget_loader.js'
  script.async = true
  document.head.appendChild(script)
})
</script>

<template>
  <section id="reviews" class="bg-white py-16 md:py-28 font-gothic relative overflow-hidden">
    
    <!-- ОГРОМНЫЙ ЗАГОЛОВОК -->
    <div class="main-container mb-12">
      <div class="w-full border-b-4 border-sigma-blue pb-8">
        <h2 class="text-6xl md:text-9xl font-black text-sigma-blue uppercase tracking-tighter leading-[0.8]">
          Отзывы <span class="text-sigma-pink">Sigma</span>
        </h2>
      </div>
    </div>

    <div class="main-container">
      <!-- КОНТЕЙНЕР-ОКНО (БЕЗ ТЕНЕЙ, ОСТРЫЕ УГЛЫ) -->
      <div class="border-2 border-sigma-blue bg-white w-full max-w-6xl mx-auto flex flex-col h-[750px]">
        
        <!-- ШАПКА ОКНА -->
        <div class="h-14 bg-sigma-blue flex items-center justify-between px-4 md:px-6 shrink-0">
          <!-- ВКЛАДКИ (ТАБЫ) ФИЛИАЛОВ -->
          <div class="flex gap-1 h-full pt-2 overflow-x-auto no-scrollbar">
            <button 
              v-for="branch in siteConfig.branches" 
              :key="branch.id"
              @click="setBranch(branch)"
              :class="[
                'px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 h-full flex items-center border-t-2 border-x-2',
                activeBranch.id === branch.id 
                  ? 'bg-white text-sigma-blue border-white' 
                  : 'bg-sigma-blue text-white/60 border-transparent hover:text-white'
              ]"
            >
              {{ branch.name }}
            </button>
          </div>

          <!-- КНОПКИ УПРАВЛЕНИЯ СПРАВА -->
          <div class="flex gap-2 ml-4">
            <div class="w-3 h-3 rounded-full bg-white/20"></div>
            <div class="w-3 h-3 rounded-full bg-white/40"></div>
            <div class="w-3 h-3 rounded-full bg-sigma-pink"></div>
          </div>
        </div>

        <!-- АДРЕСНАЯ СТРОКА (ДЕКОР) -->
        <div class="h-10 border-b-2 border-sigma-blue flex items-center px-6 bg-gray-50 gap-4">
          <div class="flex gap-2">
             <div class="w-2 h-2 bg-sigma-blue/20 rounded-full"></div>
             <div class="w-2 h-2 bg-sigma-blue/20 rounded-full"></div>
          </div>
          <div class="flex-1 bg-white border border-sigma-blue/20 px-3 py-0.5 text-[10px] text-sigma-blue/50 font-mono truncate">
            https://2gis.ru/irkutsk/firm/{{ activeBranch.firmId }}/reviews
          </div>
        </div>

        <!-- ОБЛАСТЬ ОТЗЫВОВ -->
        <div class="flex-1 overflow-hidden bg-[#F2F2F2] p-2 md:p-6">
          <!-- Важно: :key заставляет Vue перерисовать блок при смене филиала -->
          <div :key="activeBranch.firmId" class="h-full w-full">
            <div class="dg-widget-container h-full">
              <a 
                class="dg-widget-field" 
                target="_blank" 
                :href="`https://2gis.ru/irkutsk/firm/${activeBranch.firmId}/reviews`"
              >
                Загрузка отзывов для филиала: {{ activeBranch.name }}...
              </a>
            </div>
          </div>
        </div>

        <!-- ПОДВАЛ ОКНА -->
        <div class="h-10 border-t-2 border-sigma-blue bg-white flex items-center justify-between px-6 shrink-0">
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-bold text-sigma-blue">LOCATION: {{ activeBranch.address }}</span>
          </div>
          <div class="hidden md:block text-[10px] uppercase font-bold text-sigma-pink tracking-widest">
            Read_All_Reviews_Mode
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Скрываем скроллбар в табах для чистоты */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.dg-widget-container {
  width: 100%;
  height: 100%;
  border: none !important;
}

/* Стилизация ссылки до загрузки виджета */
.dg-widget-field {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  color: #273972;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 14px;
}
</style>