<script setup lang="ts">
import ArrowLeft from '~/components/svg/ArrowLeft.vue'
import EyeOff from '~/components/svg/EyeOff.vue'
import EyeOn from '~/components/svg/EyeOn.vue'


definePageMeta({ 
  layout: 'auth',
})
useSeoMeta({ title: 'Register — Cungpruy', robots: 'noindex' })

const router = useRouter()

// STEP CONTROL
const step = ref<number>(1)

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

function handleRegister() {
  error.value = ''
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = 'Semua field wajib diisi.'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Password dan konfirmasi password tidak cocok.'
    return
  }
  if (password.value.length < 8) {
    error.value = 'Password minimal 8 karakter.'
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
      <!-- Left side -->
      <div class="w-full md:w-1/2 bg-white flex flex-col justify-start px-6 sm:px-10 md:px-14 py-8 md:py-0 overflow-y-auto relative">
        <!-- Back -->
        <button
          class="absolute top-6 left-6 md:top-10 md:left-10 text-sm font-semibold flex items-center gap-1 cursor-pointer text-earth hover:text-forest transition-colors z-10"
          @click="step === 1 ? router.back() : step--"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back</span> 
        </button>
        <div class="mt-16 md:mt-24 lg:mt-28">
          <h1 class="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-8">Register</h1>
          <div v-if="error" class="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-xl font-body text-sm text-red-600">
            {{ error }}
          </div>
          <!-- Form -->
          <div class="space-y-5">
            <!-- Name -->
            <div>
              <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-2">Nama Lengkap</label>
              <input
                v-model="name"
                type="text"
                placeholder="Fadhlan Ghifary"
                class="w-full px-4 py-3.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
              />
            </div>
            <!-- Email -->
            <div>
              <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-2">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="fadhlanghifary@email.com"
                class="w-full px-4 py-3.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
              />
            </div>
            <!-- Password -->
            <div>
              <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-2">Password</label>
              <div class="relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="12345678"
                  class="w-full px-4 py-3.5 pr-11 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                  style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
                />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-earth-40 hover:text-earth transition-colors">
                  <EyeOff v-if="!showPassword" class="w-4 h-4"/>
                  <EyeOn v-else class="w-4 h-4"/>
                </button>
              </div>
            </div>
            <!-- Confirm Password -->
            <div>
              <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-2">Konfirmasi Password</label>
              <input
                v-model="confirmPassword"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Ulangi password"
                @keyup.enter="handleRegister"
                class="w-full px-4 py-3.5 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
              />
            </div>
            <!-- Submit -->
            <button
              @click="handleRegister"
              :disabled="loading"
              class="w-full py-4 rounded-xl font-body font-semibold text-sm text-cream bg-forest hover:bg-forest-light transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              style="box-shadow: 0 4px 14px rgba(45,80,22,0.25);"
            >
              {{ loading ? 'Mendaftar...' : 'Buat Akun' }}
            </button>
          </div>
          <p class="font-body text-xs text-center text-earth-40 mt-8 tracking-tight leading-relaxed">
            Dengan mendaftar, kamu menyetujui
            <span class="text-forest underline cursor-pointer">Syarat Penggunaan</span> &amp;
            <span class="text-forest underline cursor-pointer">Kebijakan Privasi</span> kami.
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="hidden md:block md:w-1/2 relative overflow-hidden flex flex-col justify-between p-12"
          :style="{ 
            backgroundImage: 'url(/images/bg-auth.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative z-10">
          <h2 class="font-display text-3xl font-bold text-cream mb-3 leading-tight">
            Bergabung &amp; Dapatkan<br>
            <span style="color: #a3be8c;">Akses Penuh</span>
          </h2>
          <p class="font-body text-sm leading-relaxed mb-5 text-cream/80">
            Daftar gratis dan nikmati pengalaman belanja sayuran segar yang lebih mudah dan menyenangkan.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional: styling scroll di mobile */
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