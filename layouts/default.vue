<script setup lang="ts">
import Basket from '~/components/svg/Basket.vue';
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()
const route = useRoute()
const mobileMenuOpen = ref(false)
watch(() => route.path, () => { mobileMenuOpen.value = false })

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Delivery', to: '/delivery' },
]
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <!-- Navbar -->
    <header class="sticky top-0 z-40 bg-cream shadow-sm" style="border-bottom: 1px solid rgba(139,94,60,0.1);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">

        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="font-display text-xl font-bold text-forest">Cungpruy</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks" :key="link.to" :to="link.to"
            class="font-body font-medium text-green-700 hover:text-forest transition-colors"
            active-class="text-aeonik"
          >{{ link.label }}</NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <!-- Cart -->
          <button
            @click="cart.toggleCart()"
            class="relative flex items-center gap-2 bg-forest text-cream px-4 py-2 rounded-full font-body text-sm hover:bg-forest-light transition-colors"
          >
            <span class="hidden sm:inline">Cart</span>
            <span
              v-if="cart.totalItems > 0"
              class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-bold"
            >{{ cart.totalItems }}</span>
          </button>

          <!-- Mobile hamburger -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-earth">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile nav -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-cream px-4 py-3 flex flex-col gap-3" style="border-top: 1px solid rgba(139,94,60,0.1);">
        <NuxtLink
          v-for="link in navLinks" :key="link.to" :to="link.to"
          class="font-body font-medium text-earth py-1"
          active-class="text-forest"
        >{{ link.label }}</NuxtLink>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1"><slot /></main>


    <!-- Cart Drawer -->
    <Teleport to="body">
      <div v-if="cart.isOpen" class="fixed inset-0 z-50 bg-black/40" @click="cart.closeCart()" />
      <div
        v-if="cart.isOpen"
        class="fixed right-0 top-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col shadow-2xl"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4" style="border-bottom: 1px solid rgba(139,94,60,0.1);">
          <h2 class="font-display text-lg font-bold text-charcoal">
            Basket <span class="text-earth font-body text-sm font-normal">({{ cart.totalItems }})</span>
          </h2>
          <button @click="cart.closeCart()" class="text-earth hover:text-charcoal transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Items -->
        <div class="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          <!-- Empty -->
          <div v-if="cart.items.length === 0" class="flex flex-col items-center justify-center h-full gap-3 text-earth-50">
            <Basket class="w-9 h-9" />
            <p class="font-body text-earth">Your basket is empty</p>
            <button @click="cart.closeCart(); $router.push('/shop')" class="btn-primary text-sm">
              Browse Shop
            </button>
          </div>

          <!-- Item row -->
          <div
            v-for="item in cart.items" :key="item.id"
            class="flex items-center gap-3 bg-white rounded-xl p-3"
            style="border: 1px solid rgba(139,94,60,0.08);"
          >
            <img :src="item.image" :alt="item.name" loading="lazy" class="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="font-body font-medium text-charcoal text-sm truncate">{{ item.name }}</p>
              <p class="font-body text-xs text-forest font-semibold">${{ item.price.toFixed(2) }}</p>
            </div>
            <!-- Qty -->
            <div class="flex items-center gap-1.5">
              <button @click="cart.updateQty(item.id, -1)" class="qty-btn">−</button>
              <span class="font-body text-sm font-semibold w-4 text-center">{{ item.quantity }}</span>
              <button @click="cart.updateQty(item.id, 1)" class="qty-btn">+</button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cart.items.length > 0" class="px-5 py-4 space-y-3" style="border-top: 1px solid rgba(139,94,60,0.1);">
          <div class="flex justify-between font-body text-sm text-earth">
            <span>Subtotal</span><span>${{ cart.subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between font-body text-sm text-earth">
            <span>Delivery</span>
            <span :class="cart.subtotal >= 50 ? 'text-leaf font-medium' : ''">
              {{ cart.subtotal >= 50 ? 'FREE' : '$4.99' }}
            </span>
          </div>
          <div class="flex justify-between font-display font-bold text-charcoal pt-2" style="border-top: 1px solid rgba(139,94,60,0.1);">
            <span>Total</span>
            <span class="text-forest">${{ cart.total.toFixed(2) }}</span>
          </div>
          <NuxtLink to="/checkout" @click="cart.closeCart()" class="btn-gold w-full justify-center">
            Checkout
          </NuxtLink>
          <p v-if="cart.subtotal < 50" class="font-body text-xs text-center text-earth-50">
            Add ${{ (50 - cart.subtotal).toFixed(2) }} more for free delivery
          </p>
        </div>
      </div>
    </Teleport>

  </div>
</template>