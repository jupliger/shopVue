<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import CartModal from './components/CartModal.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <RouterView />
    </main>
    <CartModal />
  </div>
</template>

<style>
:root {
  --primary-color: #42b883;
  --secondary-color: #35495e;
  --background-color: #ffffff;
  --text-color: #2c3e50;
  --border-color: #e2e8f0;
  --navbar-height: 70px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
}

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  outline: none;
  transition: all 0.3s ease;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1024px) {
  .main-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 0.75rem;
  }
}
</style>
