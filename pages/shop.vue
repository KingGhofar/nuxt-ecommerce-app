<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()
const { products, categories } = useProducts()

useSeoMeta({
  title: 'Shop — Verdura',
  description: 'Browse our full range of fresh, organic vegetables.',
})

const search = ref('')
const activeCategory = ref('All')
const sortBy = ref('popular')
const addedIds = ref<Set<number>>(new Set())

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name A-Z' },
]

const filteredProducts = computed(() => {
  let list = [...products]

  if (activeCategory.value !== 'All') {
    list = list.filter(p => p.category === activeCategory.value)
  }

  if (search.value.trim()) {
    const q = search.value.toLowerCase()
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    )
  }

  switch (sortBy.value) {
    case 'price-asc':  return list.sort((a, b) => a.price - b.price)
    case 'price-desc': return list.sort((a, b) => b.price - a.price)
    case 'rating':     return list.sort((a, b) => b.rating - a.rating)
    case 'name':       return list.sort((a, b) => a.name.localeCompare(b.name))
    default:           return list.sort((a, b) => b.reviews - a.reviews)
  }
})

function addToCart(product: any) {
  if (!product.inStock) return
  cart.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    unit: product.unit,
    image: product.image,
  })
  addedIds.value.add(product.id)
  setTimeout(() => addedIds.value.delete(product.id), 1500)
}
</script>

<template>
  <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- Page Header -->
    <div class="mb-10">
      <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-2">Our Selection</p>
      <h1 class="font-display text-4xl md:text-5xl font-bold text-charcoal">Fresh Market</h1>
    </div>

    <!-- Search + Sort Bar -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <!-- Search -->
      <div class="relative flex-1">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          v-model="search"
          type="text"
          placeholder="Search vegetables, herbs, mushrooms…"
          class="input-field pl-11"
        />
        <button v-if="search" @click="search = ''" class="absolute right-4 top-1/2 -translate-y-1/2 text-earth-40 hover:text-earth transition-colors">✕</button>
      </div>
      <!-- Sort -->
      <select v-model="sortBy" class="input-field sm:w-52">
        <option v-for="opt in sortOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
      </select>
    </div>

    <!-- Category Filter -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        :class="activeCategory === cat ? 'tag-active' : 'tag-inactive'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Results Count -->
    <p class="font-body text-sm text-earth mb-6">
      Showing <strong>{{ filteredProducts.length }}</strong> {{ filteredProducts.length === 1 ? 'product' : 'products' }}
      <span v-if="activeCategory !== 'All'"> in <em>{{ activeCategory }}</em></span>
      <span v-if="search"> for "<em>{{ search }}</em>"</span>
    </p>

    <!-- Products Grid -->
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="card-product group"
        :class="{ 'opacity-60': !product.inStock }"
      >
        <!-- Image -->
        <div class="relative h-44 overflow-hidden bg-cream-dark">
          <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <!-- Badges -->
          <span v-if="product.badge" :class="['badge absolute top-3 left-3', product.badgeColor]">
            {{ product.badge }}
          </span>
          <span v-if="!product.inStock" class="badge absolute top-3 right-3 bg-red-100 text-red-600">Out of Stock</span>
          <!-- Origin overlay -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p class="font-body text-xs text-white">📍 {{ product.origin }}</p>
          </div>
        </div>

        <!-- Content -->
        <div class="p-4">
          <div class="flex items-start justify-between mb-1">
            <h3 class="font-display font-semibold text-charcoal text-sm leading-snug">{{ product.name }}</h3>
            <span class="text-xl ml-2 flex-shrink-0">{{ product.emoji }}</span>
          </div>
          <span class="font-body text-xs text-sage font-medium">{{ product.category }}</span>

          <p class="font-body text-earth-60 text-xs leading-relaxed mt-2 mb-3 line-clamp-2">{{ product.description }}</p>

          <!-- Rating -->
          <div class="flex items-center gap-1 mb-3">
            <div class="flex">
              <span v-for="s in 5" :key="s" class="text-xs" :class="s <= Math.round(product.rating) ? 'text-gold' : 'text-earth-20'">★</span>
            </div>
            <span class="font-body text-xs text-earth-50">{{ product.rating }} ({{ product.reviews }})</span>
          </div>

          <!-- Price + CTA -->
          <div class="flex items-center justify-between">
            <div>
              <span class="font-display font-bold text-forest text-lg">${{ product.price.toFixed(2) }}</span>
              <span class="font-body text-xs text-earth ml-1">{{ product.unit }}</span>
            </div>

            <button
              @click="addToCart(product)"
              :disabled="!product.inStock"
              class="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40"
              :class="addedIds.has(product.id) ? 'bg-leaf text-cream scale-110' : 'bg-forest text-cream hover:bg-forest-light hover:scale-110'"
            >
              <svg v-if="!addedIds.has(product.id)" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-24">
      <span class="text-6xl block mb-4">🔍</span>
      <h3 class="font-display text-2xl font-semibold text-charcoal mb-2">Nothing found</h3>
      <p class="font-body text-earth mb-6">Try a different search term or category</p>
      <button @click="search = ''; activeCategory = 'All'" class="btn-outline">
        Clear Filters
      </button>
    </div>

  </div>
</template>