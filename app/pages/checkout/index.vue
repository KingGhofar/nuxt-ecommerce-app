<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const router = useRouter()

useSeoMeta({ title: 'Checkout — Cungpruy' })

const step = ref(1)

const form = reactive({
  name: '',
  phone: '',
  email: '',
  address: '',
  addressDetail: '',
  city: '',
  province: '',
  postcode: '',
  notes: '',
})

const selectedPayment = ref('')

const paymentGroups = [
  {
    label: 'Virtual Account',
    icon: '🏦',
    methods: [
      { id: 'va_bca',     name: 'BCA Virtual Account',     logo: 'BCA',     color: '#005BAC' },
      { id: 'va_bni',     name: 'BNI Virtual Account',     logo: 'BNI',     color: '#F15A23' },
      { id: 'va_mandiri', name: 'Mandiri Virtual Account', logo: 'Mandiri', color: '#003D79' },
    ],
  },
  {
    label: 'E-Wallet',
    icon: '📱',
    methods: [
      { id: 'gopay',     name: 'GoPay',     logo: 'GoPay', color: '#00AED6' },
      { id: 'dana',      name: 'DANA',      logo: 'DANA',  color: '#118EEA' },
      { id: 'shopeepay', name: 'ShopeePay', logo: 'SPay',  color: '#EE4D2D' },
    ],
  },
  {
    label: 'Transfer Bank',
    icon: '💳',
    methods: [
      { id: 'tf_bca', name: 'Transfer BCA', logo: 'BCA', color: '#005BAC' },
      { id: 'tf_bni', name: 'Transfer BNI', logo: 'BNI', color: '#F15A23' },
    ],
  },
]

const step1Valid = computed(() =>
  !!form.name.trim() && !!form.phone.trim() && !!form.email.trim() &&
  !!form.address.trim() && !!form.city.trim()
)
const step2Valid = computed(() => !!selectedPayment.value)

const selectedPaymentObj = computed(() => {
  for (const g of paymentGroups) {
    const m = g.methods.find(m => m.id === selectedPayment.value)
    if (m) return { ...m, group: g.label }
  }
  return null
})

const confirmed = ref(false)
const orderNumber = ref('')
const paymentCode = ref('')

function placeOrder() {
  orderNumber.value = 'CGP-' + Math.random().toString(36).substr(2, 8).toUpperCase()
  paymentCode.value = '8277' + String(Math.floor(Math.random() * 9999999999)).padStart(10, '0')
  confirmed.value = true
  cart.clearCart()
}

function goStep2() { if (step1Valid.value) step.value = 2 }
function goStep3() { if (step2Valid.value) step.value = 3 }

function copyCode() {
  if (navigator?.clipboard) navigator.clipboard.writeText(paymentCode.value)
}

function rp(n: number) {
  return '$' + n.toFixed(2)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-5xl mx-auto">
      <div v-if="confirmed" class="max-w-md mx-auto text-center py-16">
        <div
          class="w-20 h-20 rounded-full bg-leaf flex items-center justify-center mx-auto mb-6"
          style="box-shadow: 0 8px 32px rgba(74,124,89,0.25);"
        >
          <svg class="w-10 h-10 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <h1 class="font-display text-3xl font-bold text-charcoal mb-2">Pesanan Dibuat!</h1>
        <p class="font-body text-earth mb-1">
          Order <strong class="text-forest">{{ orderNumber }}</strong> berhasil.
        </p>
        <p class="font-body text-sm text-earth-50 mb-8">Complete your payment within 24 hours.</p>

        <div class="bg-white rounded-2xl p-6 border border-earth-10 text-left mb-6 shadow-sm">
          <p class="font-body text-xs uppercase tracking-widest text-earth-50 mb-0.5">Metode Pembayaran</p>
          <p class="font-body font-semibold text-charcoal mb-4">{{ selectedPaymentObj?.name }}</p>

          <p class="font-body text-xs uppercase tracking-widest text-earth-50 mb-1">
            {{ selectedPaymentObj?.id?.startsWith('va') ? 'Nomor Virtual Account' :
               selectedPaymentObj?.id?.startsWith('tf') ? 'Nomor Rekening' : 'Kode Pembayaran' }}
          </p>
          <div
            class="flex items-center gap-3 rounded-xl px-4 py-3 mb-2"
            style="background:#fafaf9; border: 1px solid rgba(139,94,60,0.12);"
          >
            <span class="font-body font-bold text-lg text-charcoal tracking-widest flex-1 select-all">
              {{ paymentCode }}
            </span>
            <button
              @click="copyCode"
              class="text-xs font-body font-medium text-forest px-3 py-1.5 rounded-lg hover:bg-forest hover:text-cream transition-all"
              style="border: 1px solid rgba(45,80,22,0.25);"
            >Salin</button>
          </div>

          <div
            class="flex justify-between pt-3 mt-3"
            style="border-top: 1px solid rgba(139,94,60,0.08);"
          >
            <span class="font-body text-sm text-earth">Total Pembayaran</span>
            <span class="font-body font-bold text-forest">{{ rp(cart.total) }}</span>
          </div>
        </div>

        <NuxtLink
          to="/shop"
          class="inline-flex items-center gap-2 bg-forest text-cream font-body font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-forest-light transition-all"
          style="box-shadow: 0 4px 14px rgba(45,80,22,0.2);"
        >
          Lanjut Belanja
        </NuxtLink>
      </div>
      <div v-else>
        <!-- Step indicator -->
        <div class="flex items-center justify-center mb-10">
          <template v-for="(label, i) in ['Alamat', 'Pembayaran', 'Konfirmasi']" :key="label">
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center font-body font-bold text-sm transition-all"
                :class="step > i + 1 ? 'bg-leaf text-cream' : step === i + 1 ? 'bg-forest text-cream' : 'bg-gray-200 text-earth-50'"
              >
                <svg v-if="step > i + 1" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
                <span v-else>{{ i + 1 }}</span>
              </div>
              <span
                class="font-body text-sm font-medium hidden sm:block"
                :class="step === i + 1 ? 'text-charcoal' : 'text-earth-40'"
              >{{ label }}</span>
            </div>
            <div
              v-if="i < 2"
              class="w-10 h-px mx-3"
              :class="step > i + 1 ? 'bg-leaf' : 'bg-gray-200'"
            ></div>
          </template>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div class="lg:col-span-3 space-y-4">
            <button
              class="flex items-center gap-2 text-earth hover:text-forest transition-colors font-body text-sm"
              @click="step === 1 ? router.back() : step--"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              {{ step === 1 ? 'Kembali' : 'Langkah Sebelumnya' }}
            </button>
            <template v-if="step === 1">
              <h1 class="font-display text-2xl font-bold text-charcoal">Alamat Pengiriman</h1>

              <!-- Kontak -->
              <div class="bg-white rounded-2xl p-6 border border-earth-10 shadow-sm space-y-3">
                <h2 class="font-body font-semibold text-charcoal text-sm">Informasi Kontak</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Nama Lengkap *</label>
                    <input v-model="form.name" type="text" placeholder="Budi Santoso"
                      class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                  </div>
                  <div>
                    <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">No. Telepon *</label>
                    <input v-model="form.phone" type="tel" placeholder="08123456789"
                      class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                  </div>
                </div>
                <div>
                  <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Email *</label>
                  <input v-model="form.email" type="email" placeholder="budi@email.com"
                    class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                    style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                </div>
              </div>

              <!-- Alamat -->
              <div class="bg-white rounded-2xl p-6 border border-earth-10 shadow-sm space-y-3">
                <h2 class="font-body font-semibold text-charcoal text-sm">Alamat Lengkap</h2>
                <div>
                  <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Nama Jalan / Kelurahan *</label>
                  <input v-model="form.address" type="text" placeholder="Jl. Mawar No. 12, Kel. Sumampir"
                    class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                    style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                </div>
                <div>
                  <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Detail Alamat</label>
                  <input v-model="form.addressDetail" type="text" placeholder="RT 03/RW 05, Blok B No. 7"
                    class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                    style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                </div>
                <div class="grid grid-cols-3 gap-3">
                  <div>
                    <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Kota *</label>
                    <input v-model="form.city" type="text" placeholder="Purwokerto"
                      class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                  </div>
                  <div>
                    <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Provinsi</label>
                    <input v-model="form.province" type="text" placeholder="Jawa Tengah"
                      class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                  </div>
                  <div>
                    <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Kode Pos</label>
                    <input v-model="form.postcode" type="text" placeholder="53111"
                      class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                      style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;" />
                  </div>
                </div>
                <div>
                  <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">
                    Catatan untuk Kurir
                    <span class="normal-case font-normal text-earth-40 ml-1">(opsional)</span>
                  </label>
                  <textarea
                    v-model="form.notes" rows="2"
                    placeholder="Patokan lokasi, instruksi khusus, warna pagar, dll..."
                    class="w-full px-4 py-2.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all resize-none"
                    style="border: 1.5px solid rgba(139,94,60,0.2); background:#fafaf9;"
                  ></textarea>
                </div>
              </div>

              <button
                @click="goStep2"
                :disabled="!step1Valid"
                class="w-full py-3.5 rounded-full font-body font-semibold text-sm text-cream bg-forest hover:bg-forest-light transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                style="box-shadow: 0 4px 14px rgba(45,80,22,0.2);"
              >
                Lanjut ke Pembayaran
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </template>
            <template v-if="step === 2">
              <h1 class="font-display text-2xl font-bold text-charcoal">Metode Pembayaran</h1>

              <div v-for="group in paymentGroups" :key="group.label" class="bg-white rounded-2xl p-5 border border-earth-10 shadow-sm">
                <div class="flex items-center gap-2 mb-3">
                  <span>{{ group.icon }}</span>
                  <h3 class="font-body font-semibold text-charcoal text-sm">{{ group.label }}</h3>
                </div>
                <div class="space-y-2">
                  <label
                    v-for="m in group.methods" :key="m.id"
                    class="flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all"
                    :style="selectedPayment === m.id
                      ? 'border: 1.5px solid #2D5016; background: rgba(45,80,22,0.04);'
                      : 'border: 1.5px solid rgba(139,94,60,0.12);'"
                  >
                    <input type="radio" :value="m.id" v-model="selectedPayment" class="sr-only" />
                    <div
                      class="w-14 h-8 rounded-lg flex items-center justify-center font-body font-bold text-white text-xs flex-shrink-0"
                      :style="{ background: m.color }"
                    >{{ m.logo }}</div>
                    <span class="font-body text-sm font-medium text-charcoal flex-1">{{ m.name }}</span>
                    <div
                      class="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all"
                      :class="selectedPayment === m.id ? 'border-forest bg-forest' : 'border-earth-20'"
                    >
                      <svg v-if="selectedPayment === m.id" class="w-3 h-3 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
              <button
                @click="goStep3"
                :disabled="!step2Valid"
                class="w-full py-3.5 rounded-full font-body font-semibold text-sm text-cream bg-forest hover:bg-forest-light transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                style="box-shadow: 0 4px 14px rgba(45,80,22,0.2);"
              >
                Lanjut ke Konfirmasi
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </template>
            <template v-if="step === 3">
              <h1 class="font-display text-2xl font-bold text-charcoal">Konfirmasi Pesanan</h1>
              <div class="bg-white rounded-2xl p-5 border border-earth-10 shadow-sm">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="font-body font-semibold text-charcoal text-sm">Alamat Pengiriman</h3>
                  <button @click="step = 1" class="font-body text-xs text-forest underline">Ubah</button>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style="background: rgba(45,80,22,0.06);">
                    <svg class="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="space-y-0.5">
                    <p class="font-body font-semibold text-charcoal text-sm">{{ form.name }}</p>
                    <p class="font-body text-xs text-earth">{{ form.address }}<span v-if="form.addressDetail">, {{ form.addressDetail }}</span></p>
                    <p class="font-body text-xs text-earth">{{ form.city }}<span v-if="form.province">, {{ form.province }}</span><span v-if="form.postcode"> {{ form.postcode }}</span></p>
                    <p class="font-body text-xs text-earth">{{ form.phone }} · {{ form.email }}</p>
                    <p v-if="form.notes" class="font-body text-xs text-earth-50 italic">📝 {{ form.notes }}</p>
                  </div>
                </div>
              </div>
              <!-- Ringkasan pembayaran -->
              <div class="bg-white rounded-2xl p-5 border border-earth-10 shadow-sm">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="font-body font-semibold text-charcoal text-sm">Metode Pembayaran</h3>
                  <button @click="step = 2" class="font-body text-xs text-forest underline">Ubah</button>
                </div>
                <div class="flex items-center gap-3">
                  <div
                    class="w-14 h-9 rounded-lg flex items-center justify-center font-body font-bold text-white text-xs flex-shrink-0"
                    :style="{ background: selectedPaymentObj?.color }"
                  >{{ selectedPaymentObj?.logo }}</div>
                  <div>
                    <p class="font-body font-medium text-charcoal text-sm">{{ selectedPaymentObj?.name }}</p>
                    <p class="font-body text-xs text-earth-50">{{ selectedPaymentObj?.group }}</p>
                  </div>
                </div>
              </div>
              <button
                @click="placeOrder"
                class="w-full py-4 rounded-full font-body font-bold text-base text-cream bg-forest hover:bg-forest-light transition-all flex items-center justify-center gap-3"
                style="box-shadow: 0 6px 20px rgba(45,80,22,0.25);"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                Buat Pesanan · {{ rp(cart.total) }}
              </button>
              <p class="font-body text-xs text-center text-earth-40">🔒 Pembayaran aman &amp; terenkripsi</p>
            </template>
          </div>
          <div class="lg:col-span-2">
            <div class="bg-white rounded-2xl p-6 border border-earth-10 shadow-sm sticky top-24">
              <h2 class="font-body font-semibold text-charcoal mb-4">Ringkasan Pesanan</h2>
              <div v-if="cart.items.length === 0" class="text-center py-8">
                <p class="font-body text-sm text-earth mb-2">Keranjang kosong</p>
                <NuxtLink to="/shop" class="font-body text-xs text-forest underline">Ke Toko</NuxtLink>
              </div>
              <div v-else>
                <div class="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
                  <div v-for="item in cart.items" :key="item.id" class="flex items-center gap-3">
                    <div class="relative flex-shrink-0">
                      <img :src="item.image" :alt="item.name" loading="lazy" class="w-11 h-11 rounded-lg object-cover" />
                      <span
                        class="absolute -top-1 -right-1 bg-charcoal text-cream rounded-full flex items-center justify-center font-bold"
                        style="width:17px;height:17px;font-size:10px;line-height:1;"
                      >{{ item.quantity }}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-body text-sm font-medium text-charcoal truncate">{{ item.name }}</p>
                      <p class="font-body text-xs text-earth">{{ rp(item.price) }}</p>
                    </div>
                    <span class="font-body text-sm font-semibold text-forest whitespace-nowrap">
                      {{ rp(item.price * item.quantity) }}
                    </span>
                  </div>
                </div>
                <div class="pt-3 space-y-2" style="border-top: 1px solid rgba(139,94,60,0.08);">
                  <div class="flex justify-between font-body text-sm text-earth">
                    <span>Subtotal</span>
                    <span class="font-medium">{{ rp(cart.subtotal) }}</span>
                  </div>
                  <div class="flex justify-between font-body text-sm text-earth">
                    <span>Shipping</span>
                    <span :class="cart.subtotal >= 50 ? 'text-leaf font-semibold' : 'font-medium'">
                      {{ cart.subtotal >= 50 ? 'FREE' : rp(4.99) }}
                    </span>
                  </div>
                  <p v-if="cart.subtotal < 50" class="font-body text-xs text-earth-40 text-right">
                    Add {{ rp(50 - cart.subtotal) }} more for free shipping
                  </p>
                  <div
                    class="flex justify-between font-body font-bold text-charcoal pt-2"
                    style="border-top: 1px solid rgba(139,94,60,0.08);"
                  >
                    <span>Total</span>
                    <span class="text-forest text-base">{{ rp(cart.total) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>