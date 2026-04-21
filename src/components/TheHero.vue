<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import image1 from '../assets/hero/slayder_1.png'
import image2 from '../assets/hero/slayder_2.png'

const slides = [
  {
    id: 1,
    title1: "3D МОДЕЛИРОВАНИЕ",
    title2: "РОБОТОТЕХНИКА",
    subtitle: "ЛЕТНИЙ ИНТЕНСИВ",
    image: image1,
    bgColor: "#97D3CB",
    tgLink: "https://t.me/your_bot?start=3d_robot"
  },
  {
    id: 2,
    title1: "АНГЛИЙСКИЙ ЯЗЫК",
    title2: "АНИМАЦИЯ",
    subtitle: "ЛЕТНИЙ ИНТЕНСИВ",
    image: image2,
    bgColor: "#F1D5AD",
    tgLink: "https://t.me/your_bot?start=english_anim"
  }
]

const currentSlide = ref(0)
const isFirstLoad = ref(true)
let timer = null

// Универсальные состояния
const startX = ref(0)
const currentX = ref(0)
const swipeOffset = ref(0)
const isDragging = ref(false)


// =========================
// ЛОГИКА ПЕРЕКЛЮЧЕНИЯ
// =========================
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetTimer()
}

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
  resetTimer()
}

const resetTimer = () => {
  if (timer) clearInterval(timer)
  timer = setInterval(nextSlide, 7000)
}


// =========================
// TOUCH + MOUSE (ОБЩАЯ ЛОГИКА)
// =========================
const startDrag = (x) => {
  isDragging.value = true
  startX.value = x
  swipeOffset.value = 0
}

const moveDrag = (x) => {
  if (!isDragging.value) return
  currentX.value = x
  swipeOffset.value = currentX.value - startX.value
}

const endDrag = () => {
  if (!isDragging.value) return

  const diff = startX.value - currentX.value

  if (Math.abs(diff) > 50) {
    diff > 0 ? nextSlide() : prevSlide()
  }

  isDragging.value = false
  swipeOffset.value = 0
}


// =========================
// TOUCH EVENTS
// =========================
const handleTouchStart = (e) => {
  startDrag(e.touches[0].clientX)
}

const handleTouchMove = (e) => {
  moveDrag(e.touches[0].clientX)
}

const handleTouchEnd = () => {
  endDrag()
}


// =========================
// MOUSE EVENTS
// =========================
const handleMouseDown = (e) => {
  startDrag(e.clientX)
}

const handleMouseMove = (e) => {
  moveDrag(e.clientX)
}

const handleMouseUp = () => {
  endDrag()
}


// =========================
// KEYBOARD
// =========================
const handleKeydown = (e) => {
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}


// =========================
// LIFECYCLE
// =========================
onMounted(() => {
  window.scrollTo(0, 0)

  timer = setInterval(nextSlide, 7000)

  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('mouseup', handleMouseUp)

  setTimeout(() => {
    isFirstLoad.value = false
  }, 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)

  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <section
    class="relative w-full h-[550px] md:h-[600px] overflow-hidden pt-[70px] font-gothic select-none cursor-grab active:cursor-grabbing"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseUp"
  >
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="absolute inset-0 transition-all duration-1000 ease-in-out"
      :style="{
        backgroundColor: slide.bgColor,
        transform: `translateX(${index === currentSlide ? swipeOffset : 0}px)`
      }"
      :class="[
        currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0',
        {
          'current-peek': isFirstLoad && index === 0,
          'next-peek': isFirstLoad && index === 1
        }
      ]"
    >
      <div class="absolute inset-0 z-0">
        <img
          :src="slide.image"
          class="absolute right-0 bottom-0 w-full h-full object-cover md:object-right-bottom transition-transform duration-[4000ms]"
          :class="[
            currentSlide === index ? 'scale-100' : 'scale-110',
            'object-right md:object-right-bottom'
          ]"
        />
        <div class="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent z-10"></div>
      </div>

      <div class="main-container h-full flex flex-col md:flex-row items-start md:items-center relative z-20 px-6">
        <div
          class="w-full md:max-w-2xl text-left mt-12 md:mt-0"
          :class="[
            currentSlide === index
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0',
            'transition-all duration-700 delay-300'
          ]"
        >
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-2 tracking-tight text-white drop-shadow-xl">
            {{ slide.title1 }} <br />
            <span class="text-2xl sm:text-3xl lg:text-4xl font-bold opacity-90">
              - {{ slide.title2 }}
            </span>
          </h1>

          <p class="text-xs sm:text-sm lg:text-lg font-bold uppercase tracking-[0.2em] mb-8 opacity-80 text-white drop-shadow-md">
            {{ slide.subtitle }}
          </p>

          <a
            :href="slide.tgLink"
            target="_blank"
            class="inline-block bg-sigma-pink text-white px-10 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-sigma-blue active:scale-95 shadow-2xl"
          >
            Записаться
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
      <div
        v-for="(_, index) in slides"
        :key="index"
        @click="currentSlide = index"
        class="h-2 rounded-full transition-all duration-500 cursor-pointer shadow-lg"
        :class="currentSlide === index ? 'bg-white w-10' : 'bg-white/40 w-2'"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.current-peek {
  animation: currentPeek 2.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1 !important;
  z-index: 20 !important;
}

.next-peek {
  animation: nextPeek 2.5s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1 !important;
  z-index: 10 !important;
}

@keyframes currentPeek {
  0%, 100% { transform: translateX(0); }
  30%, 70% { transform: translateX(-50px); opacity: 0.95; }
}

@keyframes nextPeek {
  0%, 100% { transform: translateX(100%); }
  30%, 70% { transform: translateX(calc(100% - 60px)); }
}

.select-none {
  -webkit-user-select: none;
  user-select: none;
}
</style>