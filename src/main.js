import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true,
  offset: 0, // Убираем глобальный отступ для всех анимаций
  startEvent: 'DOMContentLoaded', // Запуск сразу после загрузки структуры
});

// Дополнительный "пинок" для мобилок:
window.addEventListener('load', () => {
  AOS.refresh();
});
createApp(App).mount('#app')