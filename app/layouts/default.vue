<script setup lang="ts">
import { ref, watch } from 'vue'
import Basket from '../components/svg/Basket.vue';
import ChatQuestion from '~/components/svg/ChatQuestion.vue';
import Clock from '~/components/svg/Clock.vue';
import Map from '~/components/svg/Map.vue';
import Mail from '~/components/svg/Mail.vue';
import Phone from '~/components/svg/Phone.vue';
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

const openChat = () => {
  navigateTo('/support')
}
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
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks" :key="link.to" :to="link.to"
            class="font-body font-medium text-green-700 hover:text-forest transition-colors"
            active-class="text-aeonik"
          >{{ link.label }}</NuxtLink>
        </nav>
        <div class="flex items-center gap-2">
          <div class="hidden md:flex items-center gap-1">
            <!-- Login -->
            <NuxtLink
              to="/auth"
              class="flex items-center justify-center w-10 h-10 text-earth hover:text-forest transition-colors rounded-full hover:bg-sage-10"
              title="Masuk"
            >
              <User class="w-5 h-5" />
            </NuxtLink>
          </div>
          <!-- Cart Button -->
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
          <!-- Mobile Login -->
          <div class="flex md:hidden items-center gap-1">
            <NuxtLink
              to="/auth"
              class="flex items-center justify-center w-10 h-10 text-earth hover:text-forest transition-colors rounded-full hover:bg-sage-10"
              title="Masuk"
            >
              <User class="w-5 h-5" />
            </NuxtLink>
          </div>
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-earth hover:bg-sage-10"
            title="Menu"
          >
            <Menu class="w-5 h-5" />
          </button>
        </div>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden bg-cream px-4 py-3 flex flex-col gap-3 border-t border-sage-20">
        <NuxtLink
          v-for="link in navLinks" :key="link.to" :to="link.to"
          class="font-body font-medium text-earth py-2 hover:text-forest transition-colors"
          active-class="text-forest"
        >{{ link.label }}</NuxtLink>
      </div>
    </header>

    <!-- Page -->
    <main class="flex-1"><slot /></main>

    <!-- Floating Chat -->
    <button
      @click="openChat"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-500 text-cream rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 group"
      title="Chat dengan kami"
      aria-label="Chat dengan kami"
    >
      <ChatQuestion class="w-6 h-6" />
    </button>

    <!-- Footer bottom -->
    <footer class="bg-charcoal mt-16">
      <!-- Main -->
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
            <!-- Chat -->
            <li><NuxtLink to="/support" class="font-body text-sm hover:text-cream transition-colors text-gray-400">Chat</NuxtLink></li>
          </ul>
        </div>
        <!-- Contact -->
        <div>
          <h5 class="font-body font-semibold text-cream text-sm uppercase tracking-widest mb-4">Kontak</h5>
          <ul class="space-y-3">
            <li class="flex items-start gap-2.5 text-gray-400">
              <Mail class="w-4 h-4 mt-0.5 flex-shrink-0"/>
              <span class="font-body text-sm">cungpret@gmail.com</span>
            </li>
            <li class="flex items-start gap-2.5 text-gray-400">
              <Phone class="w-4 h-4 mt-0.5 flex-shrink-0"/>
              <span class="font-body text-sm">+62 812-3456-7890</span>
            </li>
          </ul>
        </div>
        <!-- Alamat & Jam Buka -->
        <div>
          <h5 class="font-body font-semibold text-cream text-sm uppercase tracking-widest mb-4">Toko Kami</h5>
          <div class="flex items-start gap-2.5 mb-4 text-gray-400">
            <Map class="w-4 h-4 mt-0.5 flex-shrink-0"/>
            <span class="font-body text-sm leading-relaxed">
              Jl. Sayur Mayur No. 12,<br>Purwokerto, Jawa Tengah
            </span>
          </div>
          <div class="flex items-start gap-2.5 text-gray-400">
            <Clock class="w-4 h-4 mt-0.5 flex-shrink-0"/>
            <div>
              <p class="font-body text-sm font-medium text-cream mb-1">Jam Buka</p>
              <p class="font-body text-sm">Senin — Sabtu</p>
              <p class="font-body text-sm">08.00 — 17.00 WIB</p>
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
      <!-- Overlay -->
      <div 
        v-if="cart.isOpen" 
        class="fixed inset-0 w-screen h-screen z-50 bg-black/40" 
        @click="cart.closeCart()"
      />
      <!-- Cart Drawer -->
      <div
        v-if="cart.isOpen"
        class="fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col shadow-2xl"
        style="right: 0; left: auto;"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4" style="border-bottom: 1px solid rgba(139,94,60,0.1);">
          <h2 class="font-display text-lg font-bold text-charcoal">
            Basket <span class="text-earth font-body text-sm font-normal">({{ cart.totalItems }})</span>
          </h2>
          <button @click="cart.closeCart()" class="text-earth hover:text-charcoal transition-colors">
            <Basket class="w-5 h-5"/>
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
            class="flex items-center gap-3 bg-white rounded-xl p-3 border"
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

<style scoped>
/* Styling floating chat button */
.fixed {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
}

/* Animasi badge notifikasi */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Responsive untuk mobile */
@media (max-width: 640px) {
  .fixed {
    bottom: 1rem;
    right: 1rem;
  }
  
  .w-14 {
    width: 3.5rem;
    height: 3.5rem;
  }
  
  .w-6 {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>