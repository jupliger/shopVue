<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.title">
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p class="price">{{ formatPrice(product.price) }}</p>
      <button @click="addToCart" class="add-to-cart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const addToCart = () => {
  cartStore.addItem(props.product)
}
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-info {
  margin-top: 1rem;
}

.price {
  font-weight: bold;
  color: #42b883;
}

.add-to-cart {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 0.5rem;
}

.add-to-cart:hover {
  background-color: #3aa876;
}
</style>