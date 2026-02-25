<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useSeoMeta({ title: 'Daftar — Cungpruy', robots: 'noindex' })

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
  <div class="h-screen overflow-hidden flex items-center justify-center bg-gray-50 p-10">
    <div class="w-full max-w-[1130px] h-[714px] rounded-[32px] overflow-hidden shadow-2xl flex">

      <!-- ───── LEFT 50%: Register Form ───── -->
      <div class="w-1/2 bg-white flex flex-col justify-center px-14 overflow-hidden">

        <!-- Back -->
        <NuxtLink to="/auth" class="flex items-center gap-2 text-earth hover:text-forest transition-colors mb-7 font-body text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Kembali
        </NuxtLink>

        <!-- Logo -->
        <span class="font-display font-bold text-charcoal text-lg">Cungpruy</span>

        <h1 class="font-display text-3xl font-bold text-charcoal mb-1">Create an account</h1>
        <p class="font-body text-sm text-earth mb-5">
          Sudah punya akun?
          <NuxtLink to="/auth/login" class="text-forest font-medium underline">Masuk di sini</NuxtLink>
        </p>

        <!-- Error -->
        <div v-if="error" class="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl font-body text-sm text-red-600">
          {{ error }}
        </div>

        <!-- Form -->
        <div class="space-y-3.5">
          <!-- Name -->
          <div>
            <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Nama Lengkap</label>
            <input
              v-model="name"
              type="text"
              placeholder="Nama kamu"
              class="w-full px-4 py-3 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
              style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="kamu@email.com"
              class="w-full px-4 py-3 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
              style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Password</label>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Min. 8 karakter"
                class="w-full px-4 py-3 pr-11 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
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
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="font-body text-xs font-medium text-charcoal uppercase tracking-wider block mb-1.5">Konfirmasi Password</label>
            <input
              v-model="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Ulangi password"
              @keyup.enter="handleRegister"
              class="w-full px-4 py-3 rounded-xl font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-forest transition-all"
              style="border: 1.5px solid rgba(139,94,60,0.2); background: #fafaf9;"
            />
          </div>

          <!-- Submit -->
          <button
            @click="handleRegister"
            :disabled="loading"
            class="w-full py-3.5 rounded-xl font-body font-semibold text-sm text-cream bg-forest hover:bg-forest-light transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            style="box-shadow: 0 4px 14px rgba(45,80,22,0.25);"
          >
            <svg v-if="loading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            {{ loading ? 'Mendaftar...' : 'Buat Akun' }}
          </button>
        </div>

        <p class="font-body text-xs text-center text-earth-40 mt-4 leading-relaxed">
          Dengan mendaftar, kamu menyetujui
          <span class="text-forest underline cursor-pointer">Syarat Penggunaan</span> &amp;
          <span class="text-forest underline cursor-pointer">Kebijakan Privasi</span> kami.
        </p>
      </div>

      <!-- ───── RIGHT 50%: Hero panel ───── -->
      <div class="w-1/2 relative bg-forest overflow-hidden flex flex-col justify-between p-12">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute inset-0" style="background: radial-gradient(ellipse at 70% 20%, rgba(212,160,23,0.2) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(74,124,89,0.4) 0%, transparent 50%);"></div>
          <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(250,246,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,246,238,1) 1px, transparent 1px); background-size: 40px 40px;"></div>
          <div class="absolute -top-20 -left-20 w-80 h-80 rounded-full" style="background: rgba(212,160,23,0.1);"></div>
          <div class="absolute -bottom-16 -right-16 w-64 h-64 rounded-full" style="background: rgba(74,124,89,0.2);"></div>
        </div>

        <!-- Top: benefit cards -->
        <div class="relative z-10">
          <div class="grid grid-cols-2 gap-3">
            <div v-for="b in [
              { icon: '🚚', title: 'Antar Hari Ini', desc: 'Order sebelum jam 10 pagi' },
              { icon: '🌿', title: '100% Organik', desc: 'Tanpa pestisida kimia' },
              { icon: '🤝', title: 'Dari Petani', desc: 'Langsung ke tanganmu' },
              { icon: '♻️', title: 'Zero Waste', desc: 'Kemasan ramah lingkungan' },
            ]" :key="b.title" class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <span class="text-2xl block mb-2">{{ b.icon }}</span>
              <p class="font-body font-semibold text-cream text-xs mb-0.5">{{ b.title }}</p>
              <p class="font-body text-xs" style="color:rgba(250,246,238,0.6)">{{ b.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Bottom: CTA text -->
        <div class="relative z-10">
          <h2 class="font-display text-3xl font-bold text-cream mb-3 leading-tight">
            Bergabung &amp; Dapatkan<br>
            <span style="color: #a3be8c;">Akses Penuh</span>
          </h2>
          <p class="font-body text-sm leading-relaxed mb-5" style="color: rgba(250,246,238,0.65);">
            Daftar gratis dan nikmati pengalaman belanja sayuran segar yang lebih mudah dan menyenangkan.
          </p>
          <ul class="space-y-2">
            <li v-for="feat in ['Lacak pesanan secara real-time', 'Riwayat belanja tersimpan', 'Notifikasi stok produk favorit', 'Checkout lebih cepat']" :key="feat" class="flex items-center gap-2.5">
              <div class="w-4 h-4 rounded-full bg-sage-20 flex items-center justify-center flex-shrink-0">
                <svg class="w-2.5 h-2.5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span class="font-body text-sm" style="color: rgba(250,246,238,0.75);">{{ feat }}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>