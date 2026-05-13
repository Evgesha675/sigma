<script setup>
import { siteConfig } from '../config/data.js'

const telegramLink = siteConfig.telegram
</script>

<template>
  <section id="trial-lesson" class="py-16 md:py-28 px-4 font-gothic w-full relative overflow-hidden bg-white">
    <!-- Grid pattern background similar to reference -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background-size: 40px 40px; background-image: linear-gradient(to right, rgba(39, 57, 114, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(39, 57, 114, 0.1) 1px, transparent 1px);"></div>
    
    <div class="main-container flex justify-center z-10 relative">
      <!-- MacBook Window Card -->
      <div class="w-full max-w-4xl bg-[#e6e2df] rounded-3xl border-4 border-[#273972] shadow-xl overflow-hidden flex flex-col relative" data-aos="fade-up">

        <!-- Mac Window Top Bar -->
        <div class="h-10 md:h-12 bg-[#31A2D6] border-b-4 border-[#273972] flex items-center px-4 gap-2 w-full">
          <!-- Window Dots -->
          <div class="flex gap-2">
            <div class="w-4 h-4 rounded-full bg-white border-2 border-[#273972]"></div>
            <div class="w-4 h-4 rounded-full bg-white border-2 border-[#273972]"></div>
            <div class="w-4 h-4 rounded-full bg-[#E51B51] border-2 border-[#273972]"></div>
          </div>
        </div>

        <!-- Content Area -->
        <div class="flex flex-col md:flex-row relative z-10 p-8 md:p-12 h-full">
          
          <!-- Text Content -->
          <div class="flex flex-col justify-start w-full md:w-1/2 z-20">
            <h2 class="text-3xl md:text-5xl lg:text-[4vw] font-black text-[#273972] uppercase tracking-tighter leading-[0.9] mb-8">
              БЕСПЛАТНОЕ <br> ПРОБНОЕ ЗАНЯТИЕ
            </h2>

            <!-- Address info based on the reference -->
            <div class="mt-4 md:mt-12 flex flex-col gap-2 font-bold text-[#273972] text-sm md:text-base">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                <span>Баумана 237/4</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                <span>Солнечная, 3</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                <span>Слюдянка, Кутелева, 42</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                <span>Большой луг, клубная улица, 2а</span>
              </div>
            </div>

            <!-- QR code placeholder matching reference -->
            <div class="mt-6">
              <!-- Using standard QR code placeholder to match original design's spirit -->
              <div class="w-24 h-24 bg-white border-2 border-[#273972] p-1 flex flex-wrap gap-1">
                 <!-- Simple pure css checkerboard to look like QR -->
                 <div class="w-full h-full" style="background-image: linear-gradient(45deg, #273972 25%, transparent 25%, transparent 75%, #273972 75%, #273972), linear-gradient(45deg, #273972 25%, transparent 25%, transparent 75%, #273972 75%, #273972); background-size: 8px 8px; background-position: 0 0, 4px 4px;"></div>
              </div>
            </div>
          </div>

          <!-- Image/Mascot side with business card style from reference -->
          <div class="w-full md:w-1/2 flex items-end justify-center md:justify-end mt-8 md:mt-0 relative">
             <div class="relative w-full max-w-[300px] aspect-square flex flex-col items-center justify-end">
               <!-- Mascot SVG - Adjust classes as needed to fit properly -->
               <img src="../assets/mascot/mascot_2.svg" alt="Mascot" class="w-full h-auto object-contain z-10" />

               <!-- Business card held by mascot -->
               <a :href="`tel:${siteConfig.phoneLink}`" class="absolute bottom-8 -right-4 md:-right-12 z-20 bg-white border-2 border-[#273972] px-4 py-3 shadow-[4px_4px_0_0_rgba(39,57,114,1)] transform rotate-[-5deg] hover:rotate-0 hover:translate-y-[-2px] transition-transform flex items-center gap-2">
                 <svg class="w-5 h-5 text-[#273972]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                 <span class="font-bold text-[#273972] text-sm md:text-base">{{ siteConfig.phone }}</span>
               </a>
             </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Additional tweaks if needed */
</style>
