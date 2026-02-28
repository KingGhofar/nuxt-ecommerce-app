<script setup lang="ts">
import { ref, watch } from 'vue'
import Basket from '../components/svg/Basket.vue';
import ChatQuestion from '~/components/svg/ChatQuestion.vue';
import User from '../components/svg/User.vue';
import Menu from '../components/svg/Menu.vue';
import { useCartStore } from '../stores/cart'

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
    <header class="sticky top-0 z-40 bg-cream shadow-sm border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="font-display text-xl font-bold text-forest">Cungpruy</span>
        </NuxtLink>
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks" :key="link.to" :to="link.to"
            class="font-body font-medium text-green-700 hover:text-forest transition-colors"
            active-class="text-aeonik"
          >{{ link.label }}</NuxtLink>
        </nav>
        <!-- Right Side Actions -->
        <div class="flex items-center gap-2">
          <!-- Desktop Chat & Login (icon only) -->
          <div class="hidden md:flex items-center gap-1">
            <!-- Chat Icon -->
            <NuxtLink
              to="/support"
              class="flex items-center justify-center w-10 h-10 text-earth hover:text-forest transition-colors rounded-full hover:bg-sage-10"
              title="Chat"
            >
              <ChatQuestion class="w-5 h-5" />
            </NuxtLink>
            <!-- Login Icon -->
            <NuxtLink
              to="/auth"
              class="flex items-center justify-center w-10 h-10 text-earth hover:text-forest transition-colors rounded-full hover:bg-sage-10"
              title="Masuk"
            >
              <User class="w-5 h-5" />
            </NuxtLink>
          </div>
          <!-- Cart Button (with text only) -->
          <button
            @click="cart.toggleCart()"
            class="relative flex items-center gap-2 bg-forest text-cream px-4 py-2 rounded-full font-body text-sm hover:bg-forest-light transition-colors"
          >
            <span class="hidden sm:inline">Cart</span>
            <span class="sm:hidden">Cart</span>
            <span
              v-if="cart.totalItems > 0"
              class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center font-bold"
            >{{ cart.totalItems }}</span>
          </button>
          <!-- Mobile Chat & Login (icon only - visible on mobile) -->
          <div class="flex md:hidden items-center gap-1">
            <!-- Mobile Chat Icon -->
            <NuxtLink
              to="/support"
              class="flex items-center justify-center w-10 h-10 text-earth hover:text-forest transition-colors rounded-full hover:bg-sage-10"
              title="Chat"
            >
              <ChatQuestion class="w-5 h-5" />
            </NuxtLink>
            <!-- Mobile Login Icon -->
            <NuxtLink
              to="/auth"
              class="flex items-center justify-center w-10 h-10 text-earth hover:text-forest transition-colors rounded-full hover:bg-sage-10"
              title="Masuk"
            >
              <User class="w-5 h-5" />
            </NuxtLink>
          </div>
          <!-- Mobile menu -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-earth hover:bg-sage-10"
            title="Menu"
          >
            <Menu class="w-5 h-5" />
          </button>
        </div>
      </div>
      <!-- Mobile nav menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-cream px-4 py-3 flex flex-col gap-3 border-t border-sage-20">
        <NuxtLink
          v-for="link in navLinks" :key="link.to" :to="link.to"
          class="font-body font-medium text-earth py-2 hover:text-forest transition-colors"
          active-class="text-forest"
        >{{ link.label }}</NuxtLink>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1"><slot /></main>

    <!-- Footer bottom -->
    <footer class="bg-charcoal mt-16">
      <!-- Main Footer -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <span class="font-display text-xl font-bold text-cream block mb-3">Cungpruy</span>
          <p class="font-body text-sm leading-relaxed text-gray-400">
            Sayuran segar langsung dari petani lokal.
          </p>
        </div>
        <!-- Menu -->
        <div>
          <h5 class="font-body font-semibold text-cream text-sm uppercase tracking-widest mb-4">Menu</h5>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/shop" class="font-body text-sm hover:text-cream transition-colors text-gray-400">Shop</NuxtLink></li>
            <li><NuxtLink to="/about" class="font-body text-sm hover:text-cream transition-colors text-gray-400">About</NuxtLink></li>
            <li><NuxtLink to="/delivery" class="font-body text-sm hover:text-cream transition-colors text-gray-400">Delivery</NuxtLink></li>
            <li>
              <button @click="cart.toggleCart()" class="font-body text-sm hover:text-cream transition-colors text-gray-400">Cart</button>
            </li>
            <li><NuxtLink to="/support" class="font-body text-sm hover:text-cream transition-colors text-gray-400">Chat</NuxtLink></li>
          </ul>
        </div>
        <!-- Contact -->
        <div>
          <h5 class="font-body font-semibold text-cream text-sm uppercase tracking-widest mb-4">Kontak</h5>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:rgba(250,246,238,0.4)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="font-body text-sm text-gray-400">cungpret@gmail.com</span>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:rgba(250,246,238,0.4)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span class="font-body text-sm text-gray-400">+62 812-3456-7890</span>
            </li>
          </ul>
        </div>
        <!-- Alamat & Jam Buka -->
        <div>
          <h5 class="font-body font-semibold text-cream text-sm uppercase tracking-widest mb-4">Toko Kami</h5>
          <!-- Alamat -->
          <div class="flex items-start gap-2.5 mb-4">
            <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:rgba(250,246,238,0.4)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-body text-sm leading-relaxed text-gray-400">
              Jl. Sayur Mayur No. 12,<br>Purwokerto, Jawa Tengah
            </span>
          </div>
          <!-- Jam Buka -->
          <div class="flex items-start gap-2.5">
            <svg class="w-4 h-4 mt-0.5 flex-shrink-0" style="color:rgba(250,246,238,0.4)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <div>
              <p class="font-body text-sm font-medium text-cream mb-1">Jam Buka</p>
              <p class="font-body text-sm text-gray-400">Senin — Sabtu</p>
              <p class="font-body text-sm text-gray-400">08.00 — 17.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Bottom bar -->
      <div class="border-t" style="border-color:rgba(250,246,238,0.08)">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p class="font-body text-xs text-gray-400">© {{ new Date().getFullYear() }} Cungpruy. All rights reserved.</p>
          <NuxtLink to="/not-found" class="font-body text-xs transition-colors text-gray-400" >404</NuxtLink>
        </div>
      </div>
    </footer>

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
        <!-- Footer cart -->
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