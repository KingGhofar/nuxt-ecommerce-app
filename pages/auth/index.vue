<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useSeoMeta({ title: 'Masuk — Cungpruy', robots: 'noindex' })
</script>

<template>
  <div class="h-screen overflow-hidden flex items-center justify-center bg-gray-50 p-10">
    <div class="w-full max-w-[1130px] h-[714px] rounded-[32px] overflow-hidden shadow-2xl flex">

      <!-- ───── LEFT 50%: Form panel ───── -->
      <div class="w-1/2 bg-white flex flex-col items-center justify-center px-14">

        <!-- Logo -->
        <span class="font-display font-bold text-charcoal text-lg mb-6">Cungpruy</span>

        <p class="font-display text-2xl font-bold text-black text-center mb-10">Pilih cara untuk melanjutkan</p>

        <!-- CTA Buttons -->
        <div class="w-full space-y-3 mb-8">
          <NuxtLink
            to="/auth/login"
            class="w-full flex items-center justify-center bg-forest text-cream font-body font-semibold text-sm py-3.5 rounded-full hover:bg-forest-light transition-all duration-200"
            style="box-shadow: 0 4px 14px rgba(45,80,22,0.25);"
          >
            Login to Existing Account
          </NuxtLink>
          <NuxtLink
            to="/auth/register"
            class="w-full flex items-center justify-center font-body font-semibold text-sm py-3.5 rounded-full border-2 border-forest text-forest hover:bg-forest hover:text-cream transition-all duration-200"
          >
            Create New Account
          </NuxtLink>
        </div>

        <!-- Divider -->
        <div class="w-full flex items-center gap-3 mb-6">
          <div class="flex-1 h-px" style="background:rgba(139,94,60,0.1)"></div>
          <span class="font-body text-xs text-earth-40">atau lanjut dengan</span>
          <div class="flex-1 h-px" style="background:rgba(139,94,60,0.1)"></div>
        </div>

        <!-- Social login -->
        <div class="w-full grid grid-cols-2 gap-3 mb-8">
          <button class="flex items-center justify-center gap-2 rounded-xl py-2.5 font-body text-sm text-charcoal hover:bg-gray-50 transition-colors" style="border: 1px solid rgba(139,94,60,0.15);">
            <svg class="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button class="flex items-center justify-center gap-2 rounded-xl py-2.5 font-body text-sm text-charcoal hover:bg-gray-50 transition-colors" style="border: 1px solid rgba(139,94,60,0.15);">
            <svg class="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        <p class="font-body text-xs text-center text-earth-40 leading-relaxed tracking-tighter">
          Dengan melanjutkan, kamu menyetujui
          <span class="text-forest underline cursor-pointer">Syarat Penggunaan</span> &amp;
          <span class="text-forest underline cursor-pointer">Kebijakan Privasi</span> kami.
        </p>
      </div>

      <!-- ───── RIGHT 50%: Hero panel ───── -->
      <div class="w-1/2 relative bg-forest overflow-hidden flex flex-col justify-between p-12">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute inset-0" style="background: radial-gradient(ellipse at 30% 20%, rgba(135,169,107,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(74,124,89,0.4) 0%, transparent 50%);"></div>
          <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(250,246,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,246,238,1) 1px, transparent 1px); background-size: 40px 40px;"></div>
          <div class="absolute -top-20 -right-20 w-80 h-80 rounded-full" style="background: rgba(135,169,107,0.15);"></div>
          <div class="absolute -bottom-16 -left-16 w-64 h-64 rounded-full" style="background: rgba(74,124,89,0.2);"></div>
        </div>

        <!-- Bottom: CTA text -->
        <div class="relative z-10">
          <h2 class="font-display text-3xl font-bold text-cream mb-3 leading-tight">
            Sayuran Segar,<br>
            <span style="color: #a3be8c;">Langsung ke Pintumu</span>
          </h2>
          <p class="font-body text-sm leading-relaxed mb-5" style="color: rgba(250,246,238,0.65);">
            Buat akun dan nikmati kemudahan belanja sayuran organik dari petani lokal terpercaya.
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