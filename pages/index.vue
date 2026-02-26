<script setup lang="ts">
import ChevronRight from '../components/svg/ChevronRight.vue'
import Leaf from '../components/svg/Leaf.vue'
import Recycle from '../components/svg/Recycle.vue'
import TruckDelivery from '../components/svg/TruckDelivery.vue'
import HandShake from '../components/svg/HandShake.vue'
import PlusAdd from '../components/svg/PlusAdd.vue'
import ArrowNarrowRight from '../components/svg/ArrowNarrowRight.vue'
import { useCartStore } from '../stores/cart'
import { useProducts } from '../composables/useProducts'

const cart = useCartStore()
const { featured } = useProducts()

useSeoMeta({
  title: 'Cungpruy — Fresh From The Farm',
  description: 'Farm-fresh organic vegetables delivered to your door.',
})

const stats = [
  { value: '50+', label: 'Local Farms' },
  { value: '200+', label: 'Varieties' },
  { value: '24h', label: 'Farm to Door' },
  { value: '100%', label: 'Organic' },
]

function addToCart(product: any) {
  cart.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
  })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-forest min-h-[88vh] flex items-center">
      <!-- Background texture -->
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 20% 50%, #87A96B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4A7C59 0%, transparent 40%)">
      </div>
      <!-- Decorative circles -->
      <div class="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-sage-20"></div>
      <div class="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-leaf-20"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-sage-20 text-white px-4 py-2 rounded-full text-sm font-body font-medium mb-6">
            <span class="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
            Dipanen segar hari ini
          </div>
          <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
            From Soil<br/>
            <em class="text-sage">to Your</em><br/>
            Table
          </h1>
          <p class="font-body text-cream-70 text-lg leading-relaxed mb-8 max-w-md">
            We work directly with 50+ local farmers to bring you the most vibrant, nutrient-packed vegetables — delivered within 24 hours of harvest.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/shop" class="btn-gold text-base px-8 py-4">
              Beli Produk Segar
              <ChevronRight class="w-5 h-5" />
            </NuxtLink>
            <NuxtLink to="/about" class="inline-flex items-center gap-2 text-cream-80 hover:text-cream font-body font-medium text-base transition-colors py-4">
              Kisah Kami <ArrowNarrowRight class="w-6 h-6" />
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="font-aeonik text-2xl font-bold text-cream">{{ stat.value }}</div>
              <div class="font-semibold text-sm text-cream-50 mt-0.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Hero Image Grid -->
        <div class="hidden lg:grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="rounded-2xl overflow-hidden h-48 shadow-xl shadow-black/20">
              <img fetchpriority="high" src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=360&q=75" alt="Fresh vegetables" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="rounded-2xl overflow-hidden h-64 shadow-xl shadow-black/20">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=360&q=75" alt="Farmer" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <div class="space-y-4 mt-8">
            <div class="rounded-2xl overflow-hidden h-64 shadow-xl shadow-black/20">
              <img loading="lazy" decoding="async" src="https://i.pinimg.com/1200x/1b/04/fc/1b04fc4b0dbb8bd66c98d85bdb9c345d.jpg" alt="Salad bowl" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="rounded-2xl overflow-hidden h-48 shadow-xl shadow-black/20">
              <img loading="lazy" decoding="async" src="https://i.pinimg.com/1200x/e3/67/05/e36705fb3a2b4268771c102a84196f36.jpg" alt="Carrots" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between mb-10">
        <div>
          <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-2">Tersedia Hari Ini</p>
          <h2 class="section-title">Produk Unggulan</h2>
        </div>
        <NuxtLink to="/shop" class="btn-outline text-sm hidden sm:inline-flex">
          View All
          <ChevronRight class="w-4 h-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(product, i) in featured"
          :key="product.id"
          class="card-product group"
          :style="`animation-delay: ${i * 80}ms`"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden bg-cream-dark">
            <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <!-- Badge -->
            <span v-if="product.badge" :class="['badge absolute top-3 left-3', product.badgeColor]">
              {{ product.badge }}
            </span>
          </div>
          <!-- Content -->
          <div class="p-5">
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-display font-semibold text-charcoal">{{ product.name }}</h3>
            </div>
            <p class="font-body text-earth-70 text-sm leading-relaxed mb-3 line-clamp-2">{{ product.description }}</p>
            <!-- Rating -->
            <div class="flex items-center gap-1 mb-4">
              <div class="flex">
                <span v-for="s in 5" :key="s" :class="s <= Math.round(product.rating) ? 'star' : 'star opacity-30'">★</span>
              </div>
              <span class="font-body text-xs text-earth">({{ product.reviews }})</span>
            </div>
            <!-- Price + Add -->
            <div class="flex items-center justify-between">
              <div>
                <span class="font-display text-xl font-bold text-forest">${{ product.price.toFixed(2) }}</span>
              </div>
              <button
                @click="addToCart(product)"
                class="w-10 h-10 bg-forest text-cream rounded-full flex items-center justify-center hover:bg-forest-light hover:scale-110 transition-all duration-150 shadow-sm"
              >
                <PlusAdd class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Props Banner -->
    <section class="bg-forest py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- 100% Organic -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 flex-shrink-0 text-sage">
              <Leaf :size="28" color="currentColor" />
            </div>
            <div>
              <h4 class="font-display font-semibold text-white mb-1">100% Organic</h4>
              <p class="font-body text-cream-70 text-sm leading-relaxed">Certified organic. No pesticides, ever.</p>
            </div>
          </div>
          <!-- Same-Day Delivery -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 flex-shrink-0 text-sage">
              <TruckDelivery :size="28" color="currentColor" />
            </div>
            <div>
              <h4 class="font-display font-semibold text-white mb-1">Same-Day Delivery</h4>
              <p class="font-body text-cream-70 text-sm leading-relaxed">Order by 10am, delivered by 6pm.</p>
            </div>
          </div>
          <!-- Farm Direct -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 flex-shrink-0 text-sage">
              <HandShake :size="28" color="currentColor" />
            </div>
            <div>
              <h4 class="font-display font-semibold text-white mb-1">Farm Direct</h4>
              <p class="font-body text-cream-70 text-sm leading-relaxed">We pay farmers fairly, every time.</p>
            </div>
          </div>
          <!-- Zero Waste  -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 flex-shrink-0 text-sage">
              <Recycle :size="28" color="currentColor" />
            </div>
            <div>
              <h4 class="font-display font-semibold text-white mb-1">Zero Waste</h4>
              <p class="font-body text-cream-70 text-sm leading-relaxed">Compostable packaging throughout.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seasonal Banner -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-cream-dark rounded-3xl overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="p-12 lg:p-16 flex flex-col justify-center">
            <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-3">What's In Season</p>
            <h2 class="font-display text-4xl font-bold text-charcoal mb-4">Spring's Finest<br/><em>Now Available</em></h2>
            <p class="font-body text-earth leading-relaxed mb-6">
              Tender asparagus, sweet peas, and the first strawberries of the year. Seasonal eating at its most delicious.
            </p>
            <NuxtLink to="/shop" class="btn-primary self-start">
              Shop Seasonal
            </NuxtLink>
          </div>
          <div class="relative h-64 lg:h-auto">
            <img loading="lazy" decoding="async" src="https://i.pinimg.com/736x/5f/94/47/5f9447e9b25c1df08e75faa26a06d84a.jpg" alt="Seasonal vegetables" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-r from-cream-dark/60 lg:from-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-sage-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-2">Happy Customers</p>
          <h2 class="section-title">Testimonials</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="t in [
            { name: 'Sarah.', text: 'The tomatoes are absolutely incredible. I can taste the difference from supermarket produce immediately.', rating: 5 },
            { name: 'James.', text: 'As a chef, I need the best. Cungpruy delivers restaurant-quality vegetables to my kitchen every morning.', rating: 5 },
            { name: 'Agung.', text: 'Love knowing exactly which farm my food comes from. The packaging is compostable too — truly guilt-free.', rating: 5 },
          ]" :key="t.name" class="bg-white rounded-2xl p-6 shadow-sm border border-earth-8">
            <div class="flex mb-3">
              <span v-for="s in t.rating" :key="s" class="star">★</span>
            </div>
            <p class="font-body text-earth leading-relaxed mb-4 italic">"{{ t.text }}"</p>
            <div class="flex items-center gap-3">
              <span class="font-body font-semibold text-charcoal">{{ t.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>