<template>
  <div v-if="cartStore.isOpen" class="cart-modal">
    <div class="cart-content">
      <div class="cart-header">
        <h2>Shopping Cart</h2>
        <button @click="cartStore.isOpen = false" class="close-btn">&times;</button>
      </div>
      
      <div class="cart-items">
        <div v-if="cartStore.items.length === 0" class="empty-cart">
          Your cart is empty
        </div>
        <div v-else v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title">
          <div class="item-details">
            <h3>{{ item.title }}</h3>
            <p>{{ formatPrice(item.price) }}</p>
            <div class="quantity-controls">
              <button @click="updateQuantity(item, item.quantity - 1)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="updateQuantity(item, item.quantity + 1)">+</button>
            </div>
          </div>
          <button @click="cartStore.removeItem(item.id)" class="remove-btn">&times;</button>
        </div>
      </div>
      
      <div class="cart-footer">
        <div class="total">
          Total: {{ formatPrice(cartStore.totalAmount) }}
        </div>
        <button class="checkout-btn" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const updateQuantity = (item, newQuantity) => {
  if (newQuantity > 0) {
    cartStore.updateQuantity(item.id, newQuantity)
  }
}

const checkout = () => {
  alert('Checkout functionality will be implemented soon!')
  cartStore.isOpen = false
}
</script>

<style scoped>
.cart-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 400px;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.cart-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cart-header {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.cart-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.item-details {
  flex: 1;
}

.quantity-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.5rem;
}

.quantity-controls button {
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--border-color);
  background: white;
}

.cart-footer {
  padding: 1rem;
  border-top: 1px solid var(--border-color);
}

.total {
  font-weight: bold;
  margin-bottom: 1rem;
}

.checkout-btn {
  width: 100%;
  padding: 0.75rem;
  background: var(--primary-color);
  color: white;
  border-radius: 4px;
}

.empty-cart {
  text-align: center;
  padding: 2rem;
  color: #666;
}

@media (max-width: 480px) {
  .cart-modal {
    width: 100%;
  }
}
</style>