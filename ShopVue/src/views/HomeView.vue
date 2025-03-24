<template>
  <div class="home">
    <div class="filters">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="Search products..."
        class="search-input"
      >
      <select v-model="selectedCategory" class="category-select">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <div class="products-container">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import ProductCard from '../components/ProductCard.vue'

const products = ref([])
const categories = ref([])
const searchQuery = ref('')
const selectedCategory = ref('')

const fetchProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products')
  products.value = response.data
}

const fetchCategories = async () => {
  const response = await axios.get('https://fakestoreapi.com/products/categories')
  categories.value = response.data
}

const filteredProducts = computed(() => {
  return products.value
    .filter(product => 
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (!selectedCategory.value || product.category === selectedCategory.value)
    )
})

onMounted(() => {
  fetchProducts()
  fetchCategories()
})
</script>

<style scoped>
.home {
  width: 100%;
}

.filters {
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-input,
.category-select {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}

.products-container > * {
  flex: 0 1 calc(25% - 4.5rem);
  min-width: 250px;
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
  }
  
  .products-container > * {
    flex: 0 1 calc(50% - 3rem);
    min-width: 150px;
  }
}
</style>
