<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <RouterLink to="/" class="logo">
        Vue Shop
      </RouterLink>
      
      <div class="nav-links">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <button class="cart-button" @click="cartStore.isOpen = true">
          Cart ({{ cartStore.totalItems }})
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover {
  color: var(--primary-color);
}

.cart-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
}

.cart-button:hover {
  background-color: #3aa876;
}
</style>