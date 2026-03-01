<script setup lang="ts">
import ArrowLeft from '~/components/svg/ArrowLeft.vue'
import Facebook from '~/components/svg/Facebook.vue'
import Google from '~/components/svg/Google.vue'

definePageMeta({ layout: 'auth' })
useSeoMeta({ title: 'Login — Cungpruy', robots: 'noindex' })

const router = useRouter()

// STEP CONTROL
const step = ref<number>(1)

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

function handleLogin() {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Email dan password wajib diisi.'
    return
  }
  loading.value = true
  setTimeout(() => {
    loading.value = false
    navigateTo('/')
  }, 1500)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 md:p-10">
    <div class="w-full max-w-[1130px] md:h-[714px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
      <!-- left side -->
      <div class="w-full md:w-1/2 bg-white flex flex-col justify-start px-6 sm:px-10 md:px-14 py-8 md:py-0 overflow-y-auto relative">
        <!-- Back button -->
        <button
          class="absolute top-6 left-6 md:top-10 md:left-10 text-sm font-semibold flex items-center gap-1 cursor-pointer text-earth hover:text-forest transition-colors z-10"
          @click="step === 1 ? router.back() : step--"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back</span> 
        </button>

        <!-- Content with top padding to account for back button -->
        <div class="mt-16 md:mt-24 lg:mt-28">
          <h1 class="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-8">Login</h1>
          
          <!-- Error -->
          <div v-if="error" class="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-xl font-body text-sm text-red-600">
            {{ error }}
          </div>
          
          <!-- Form -->
          <div class="space-y-5">
            <div>
              <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-2">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="fadhlanghifary@email.com"
                @keyup.enter="handleLogin"
                class="w-full px-4 py-3.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
              />
            </div>
            
            <div>
              <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-2">Password</label>
              <div class="relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  @keyup.enter="handleLogin"
                  class="w-full px-4 py-3.5 pr-11 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                  style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
                />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-earth-40 hover:text-earth transition-colors">
                  <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                </button>
              </div>
              <div class="flex justify-end mt-2">
                <span class="font-body text-xs text-forest underline cursor-pointer">Lupa password?</span>
              </div>
            </div>
            
            <button
              @click="handleLogin"
              :disabled="loading"
              class="w-full py-4 rounded-xl font-body font-semibold text-sm text-cream bg-forest hover:bg-forest-light transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              style="box-shadow: 0 4px 14px rgba(45,80,22,0.25);"
            >
              <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              {{ loading ? 'Memproses...' : 'Masuk' }}
            </button>
          </div>
          
          <!-- Divider -->
          <div class="flex items-center gap-3 my-8">
            <div class="flex-1 h-px" style="background:rgba(139,94,60,0.1)"></div>
            <span class="font-body text-xs text-earth-40">atau</span>
            <div class="flex-1 h-px" style="background:rgba(139,94,60,0.1)"></div>
          </div>
          
          <!-- Social -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button class="flex items-center justify-center gap-2 rounded-xl py-3 font-body text-sm text-charcoal hover:bg-gray-50 transition-colors" style="border: 1px solid rgba(139,94,60,0.15);">
              <Google class="w-4 h-4"/>
              Google
            </button>
            <button class="flex items-center justify-center gap-2 rounded-xl py-3 font-body text-sm text-charcoal hover:bg-gray-50 transition-colors" style="border: 1px solid rgba(139,94,60,0.15);">
              <Facebook class="w-4 h-4"/>
              Facebook
            </button>
          </div>
        </div>
      </div>

      <!-- Right side - hidden on mobile, visible on desktop -->
      <div class="hidden md:block md:w-1/2 relative bg-forest overflow-hidden flex flex-col justify-between p-12">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute inset-0"></div>
          <div class="absolute inset-0 opacity-5"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full"></div>
          <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full"></div>
        </div>
        <div class="relative z-10">
          <h2 class="font-display text-3xl font-bold text-cream mb-3 leading-tight">
            Masuk &amp; Nikmati<br>
            <span style="color: #a3be8c;">Pengalaman Berbelanja</span>
          </h2>
          <p class="font-body text-sm leading-relaxed mb-5 text-cream/80">
            Akses riwayat pesanan, lacak pengiriman, dan checkout lebih cepat.
          </p>
          <ul class="space-y-2">
            <li v-for="feat in ['Lacak pesanan secara real-time', 'Riwayat belanja tersimpan', 'Notifikasi stok favorit', 'Checkout lebih cepat']" :key="feat" class="flex items-center gap-2.5">
              <div class="w-4 h-4 rounded-full bg-sage-20 flex items-center justify-center flex-shrink-0">
                <svg class="w-2.5 h-2.5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="font-body text-sm text-cream/90">{{ feat }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: styling untuk scroll di mobile */
@media (max-width: 768px) {
  .overflow-y-auto {
    max-height: 100vh;
    -webkit-overflow-scrolling: touch;
  }
  
  .shadow-2xl {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
  }
}
</style>