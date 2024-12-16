import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Вказуємо новий порт
    open: true // Автоматично відкривати браузер при запуску сервера
  }
})
