<script setup lang="ts">
import { ref, reactive } from 'vue'
import ArrowLeft from '~/components/svg/ArrowLeft.vue'
import { useCartStore } from '../../stores/cart'

const cart = useCartStore()
const router = useRouter()
const step = ref<number>(1)

useSeoMeta({ title: 'Checkout — Cungpruy' })

const confirmed = ref(false)
const orderNumber = ref('')

const form = reactive({
  name: '',
  email: '',
  address: '',
  city: '',
  postcode: '',
})

function placeOrder() {
  orderNumber.value = 'VRD-' + Math.random().toString(36).substr(2, 6).toUpperCase()
  confirmed.value = true
  cart.clearCart()
}

</script>

<template>
  <div class="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div v-if="confirmed" class="text-center py-20 max-w-md mx-auto">
      <h1 class="font-display text-3xl font-bold text-charcoal mb-2">Order Confirmed!</h1>
      <p class="font-body text-earth mb-1">Order <strong class="text-forest">{{ orderNumber }}</strong> has been placed.</p>
      <p class="font-body text-sm text-earth-60 mb-8">Check your email for confirmation.</p>
      <NuxtLink to="/shop" class="btn-primary">Continue Shopping</NuxtLink>
    </div>
    <!-- Form -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <!-- Left side - Form -->
      <div class="lg:col-span-3 space-y-5">
        <div class="flex items-center gap-2">
          <button
            class="flex items-center gap-2 text-black transition-colors"
            @click="step === 1 ? router.back() : step--"
          >
            <ArrowLeft class="w-5 h-5" />
            <span class="text-lg font-semibold text-strong-800">Back</span> 
          </button>
        </div>
        <h1 class="font-display text-3xl font-bold text-charcoal">Checkout</h1>
        <div class="bg-white rounded-2xl p-6 border border-earth-10">
          <h2 class="font-aeonik text-xl font-semibold text-charcoal mb-4">Contact</h2>
          <div class="space-y-3">
            <div>
              <label class="font-body text-sm font-medium text-charcoal block mb-1">Full Name</label>
              <input v-model="form.name" type="text" placeholder="John Doe" class="input-field" />
            </div>
            <div>
              <label class="font-body text-sm font-medium text-charcoal block mb-1">Email</label>
              <input v-model="form.email" type="email" placeholder="john@email.com" class="input-field" />
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl p-6 border border-earth-10">
          <h2 class="font-aeonik text-lg font-semibold text-charcoal mb-4">Delivery Address</h2>
          <div class="space-y-3">
            <div>
              <label class="font-body text-sm font-semibold text-charcoal block mb-1">Street Address</label>
              <input v-model="form.address" type="text" placeholder="123 Garden Lane" class="input-field" />
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="font-body text-sm font-medium text-charcoal block mb-1">City</label>
                <input v-model="form.city" type="text" placeholder="Portland" class="input-field" />
              </div>
              <div>
                <label class="font-body text-sm font-medium text-charcoal block mb-1">Postcode</label>
                <input v-model="form.postcode" type="text" placeholder="97201" class="input-field" />
              </div>
            </div>
          </div>
        </div>
        <button @click="placeOrder" class="bg-blue-500 hover:bg-blue-600 rounded-full text-white w-full justify-center py-3.5 text-base">
          Place Order · ${{ cart.total.toFixed(2) }}
        </button>
        <p class="font-body text-xs text-center text-earth-50">Secure checkout</p>
      </div>
      
      <!-- Right side - Order Summary (sejajar dengan contact) -->
      <div class="lg:col-span-2">
        <!-- Tambahkan margin-top agar sejajar dengan konten side left -->
        <div class="bg-white rounded-2xl p-6 border border-earth-10 mt-[100px]">
          <h2 class="font-aeonik text-xl font-semibold text-charcoal mb-4">Your Order</h2>
          
          <!-- Order Items -->
          <div class="space-y-3 mb-4 max-h-[400px] overflow-y-auto pr-1">
            <div v-for="item in cart.items" :key="item.id" class="flex items-center gap-3">
              <img :src="item.image" :alt="item.name" loading="lazy" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
              <div class="flex-1 min-w-0">
                <p class="font-body text-sm font-medium text-charcoal truncate">{{ item.name }}</p>
                <p class="font-body text-xs text-earth">×{{ item.quantity }}</p>
              </div>
              <span class="font-body text-sm font-semibold text-forest whitespace-nowrap">${{ (item.price * item.quantity).toFixed(2) }}</span>
            </div>
          </div>
          
          <!-- Order Totals -->
          <div class="pt-3 space-y-1.5 border-t border-earth-10">
            <div class="flex justify-between font-body text-sm text-earth">
              <span>Subtotal</span>
              <span class="font-medium">${{ cart.subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between font-body text-sm text-earth">
              <span>Delivery</span>
              <span :class="cart.subtotal >= 50 ? 'text-leaf font-medium' : 'font-medium'">
                {{ cart.subtotal >= 50 ? 'FREE' : '$4.99' }}
              </span>
            </div>
            <div class="flex justify-between font-aeonik font-bold text-charcoal pt-2 border-t border-earth-10 mt-2">
              <span class="text-base">Total</span>
              <span class="text-forest text-lg">${{ cart.total.toFixed(2) }}</span>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-if="cart.items.length === 0" class="text-center py-8">
            <p class="font-body text-earth mb-3">Your cart is empty</p>
            <NuxtLink to="/shop" class="text-forest font-medium text-sm hover:underline">
              Browse Shop
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>