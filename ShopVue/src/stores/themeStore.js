import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false
  }),
  
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light')
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    
    initTheme() {
      const savedTheme = localStorage.getItem('theme') || 'light'
      this.isDark = savedTheme === 'dark'
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }
})