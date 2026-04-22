<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import image1 from '../assets/hero/slayder_1.png'
import image2 from '../assets/hero/slayder_2.png'
import image3 from '../assets/hero/slayder_3.png'
import image4 from '../assets/hero/slayder_4.png'

const initialSlides = [
  { 
    id: 1, 
    title1: "3D МОДЕЛИРОВАНИЕ", 
    title2: "РОБОТОТЕХНИКА", 
    subtitle: "ЛЕТНИЙ ИНТЕНСИВ", 
    image: image1, 
    bgColor: "#97D3CB", 
    tgLink: "https://t.me/SigmaEdu_bot?start=promo_3d_robot" 
  },
  { 
    id: 2, 
    title1: "АНГЛИЙСКИЙ ЯЗЫК", 
    title2: "АНИМАЦИЯ", 
    subtitle: "ЛЕТНИЙ ИНТЕНСИВ", 
    image: image2, 
    bgColor: "#F1D5AD", 
    tgLink: "https://t.me/SigmaEdu_bot?start=promo_english_anim" 
  },
  { 
    id: 3, 
    title1: "ВМЕСТЕ ДЕШЕВЛЕ", 
    title2: "СКИДКИ ПРИ ВЫБОРЕ", 
    subtitle: "НЕСКОЛЬКИХ КУРСОВ", 
    image: image3, 
    bgColor: "#E9AC44", 
    hideButton: true 
  },
  { 
    id: 4, 
    title1: "ПОДГОТОВКА", 
    title2: "К ОГЭ ЕГЭ", 
    subtitle: "Специальный семинар", 
    image: image4, 
    bgColor: "#69B3D6", 
    tgLink: "https://t.me/SigmaEdu_bot?start=promo_exam",
    alignRight: true,
    isBlueText: true 
  }
]

const slides = [...initialSlides, ...initialSlides, ...initialSlides]
const currentSlide = ref(initialSlides.length)
const swipeOffset = ref(0)
const isDragging = ref(false)
const isTransitioning = ref(false)
const startX = ref(0)
const startY = ref(0)
const isHorizontalSwipe = ref(false)
let timer = null

const resetTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(nextSlide, 3000)
}

const pauseTimer = () => {
  if (timer) clearInterval(timer)
}

const resumeTimer = () => {
  onEnd()
  resetTimer()
}

const nextSlide = () => {
  if (currentSlide.value >= slides.length - 1) return 
  isTransitioning.value = true
  currentSlide.value++
  resetTimer()
}

const prevSlide = () => {
  if (currentSlide.value <= 0) return 
  isTransitioning.value = true
  currentSlide.value--
  resetTimer()
}

const goToSlide = (index) => {
  isTransitioning.value = true
  currentSlide.value = initialSlides.length + index
  resetTimer()
}

const handleTransitionEnd = () => {
  isTransitioning.value = false
  if (currentSlide.value >= initialSlides.length * 2) {
    currentSlide.value = currentSlide.value - initialSlides.length
  } else if (currentSlide.value < initialSlides.length) {
    currentSlide.value = currentSlide.value + initialSlides.length
  }
}

const onStart = (e) => {
  isDragging.value = true
  isHorizontalSwipe.value = false
  startX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  startY.value = e.type.includes('touch') ? e.touches[0].clientY : e.clientY
  if (isTransitioning.value) {
    isTransitioning.value = false
    handleTransitionEnd() 
  }
}

const onMove = (e) => {
  if (!isDragging.value) return
  const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const y = e.type.includes('touch') ? e.touches[0].clientY : e.clientY
  const dx = x - startX.value
  const dy = y - startY.value
  if (!isHorizontalSwipe.value && Math.abs(dx) > 5) {
    if (Math.abs(dx) > Math.abs(dy)) isHorizontalSwipe.value = true
  }
  if (isHorizontalSwipe.value) {
    if (e.cancelable) e.preventDefault()
    swipeOffset.value = dx
  }
}

const onEnd = () => {
  if (!isDragging.value) return
  if (isHorizontalSwipe.value || Math.abs(swipeOffset.value) > 50) {
    if (swipeOffset.value < -50) nextSlide()
    else if (swipeOffset.value > 50) prevSlide()
  }
  isDragging.value = false
  swipeOffset.value = 0
}

onMounted(() => {
  resetTimer()
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  })
})

onUnmounted(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <section 
    class="relative w-full h-[550px] md:h-[600px] lg:h-[700px] pt-4 md:pt-0 overflow-hidden font-gothic select-none bg-white cursor-grab active:cursor-grabbing"
    @mousedown="onStart" @mousemove="onMove" @mouseup="onEnd"
    @mouseenter="pauseTimer" @mouseleave="resumeTimer"
    @touchstart="onStart" @touchmove="onMove" @touchend="onEnd"
  >
    <div 
      class="flex h-full w-full will-change-transform"
      :style="{ 
        transform: `translate3d(calc(${-currentSlide * 100}% + ${swipeOffset}px), 0, 0)`,
        transition: isDragging || !isTransitioning ? 'none' : 'transform 1s cubic-bezier(0.25, 1, 0.5, 1)'
      }"
      @transitionend="handleTransitionEnd"
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="relative min-w-full h-full flex flex-col md:block overflow-hidden"
        :style="{ backgroundColor: slide.bgColor }"
        :aria-hidden="index < initialSlides.length || index >= initialSlides.length * 2 ? 'true' : 'false'"
      >
        <div class="relative z-20 flex-1 md:h-full flex items-start md:items-center pt-10 md:pt-0 pointer-events-none">
          <div 
            class="w-full px-6 md:px-16 flex transition-all duration-500" 
            :class="[slide.alignRight ? 'justify-end' : 'justify-start']"
          >
            <div 
              class="w-full pointer-events-auto flex flex-col"
              :class="[
                slide.alignRight 
                  ? 'md:max-w-xl items-center text-center md:items-end md:text-right' 
                  : 'md:max-w-3xl items-start text-left',
                slide.isBlueText ? 'text-[#273972]' : 'text-white' 
              ]"
            >
              <component 
                :is="index === initialSlides.length ? 'h1' : 'h2'"
                class="text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] mb-3 uppercase break-words"
                :class="slide.isBlueText ? '' : 'drop-shadow-xl'"
              >
                {{ slide.title1 }} <br />
                <span class="text-[7vw] sm:text-3xl md:text-4xl lg:text-5xl opacity-90">
                   {{ slide.alignRight ? '' : '- ' }}{{ slide.title2 }}
                </span>
              </component>
              
              <p class="text-[11px] sm:text-sm md:text-xl font-bold uppercase tracking-widest mb-6 md:mb-8 opacity-80">
                {{ slide.subtitle }}
              </p>

              <a 
                v-if="!slide.hideButton"
                :href="slide.tgLink" 
                target="_blank" 
                :tabindex="index < initialSlides.length || index >= initialSlides.length * 2 ? '-1' : '0'"
                class="inline-block bg-sigma-pink text-white px-10 py-4 md:px-14 md:py-6 text-sm md:text-xl font-black uppercase tracking-tighter hover:scale-105 active:scale-95 shadow-2xl transition-all"
              >
                Записаться
              </a>
            </div>
          </div>
        </div>

        <div class="relative w-full h-[55%] md:absolute md:inset-0 md:h-full overflow-hidden z-10 pointer-events-none">
          <img 
            :src="slide.image" 
            draggable="false"
            :loading="index === initialSlides.length ? 'eager' : 'lazy'"
            class="hidden md:block w-full h-full object-cover"
            :style="{ objectPosition: slide.alignRight ? 'left center' : 'right bottom' }"
          />
          
          <img 
            :src="slide.image" 
            draggable="false"
            :loading="index === initialSlides.length ? 'eager' : 'lazy'"
            class="md:hidden absolute top-0 w-[220%] max-w-none h-full object-contain"
            :class="slide.alignRight ? 'left-0 object-left' : 'right-0 object-right'"
          />
          
          <div 
            v-if="!slide.isBlueText"
            class="absolute inset-0 bg-black/5 md:bg-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-transparent z-10"
          ></div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3 pointer-events-auto">
      <button 
        v-for="(_, index) in initialSlides" :key="index"
        @click="goToSlide(index)"
        aria-label="Переключить слайд"
        class="h-1.5 md:h-2 transition-all duration-300 rounded-full shadow-md outline-none cursor-pointer"
        :class="(currentSlide % initialSlides.length) === index ? 'bg-white w-10 md:w-16' : 'bg-white/40 w-2 md:w-4 hover:bg-white/70'"
      ></button>
    </div>
  </section>
</template>

<style scoped>
img {
  backface-visibility: hidden;
  transform: translateZ(0);
}
/* Плавная коррекция для мобильных, чтобы текст не сливался с краем */
@media (max-width: 768px) {
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>