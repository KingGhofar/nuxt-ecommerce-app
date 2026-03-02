<script setup lang="ts">
import Facebook from '~/components/svg/Facebook.vue';
import Google from '~/components/svg/Google.vue';
import ArrowLeft from '~/components/svg/ArrowLeft.vue'
import CircleCheck from '~/components/svg/CircleCheck.vue';

definePageMeta({ 
  layout: 'auth',
})
const router = useRouter()
const step = ref<number>(1)

useSeoMeta({ title: 'Masuk — Cungpruy', robots: 'noindex' })
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 md:p-10">
    <div class="w-full max-w-[1130px] md:h-[714px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
      <!-- left side -->
      <div class="w-full md:w-1/2 bg-white flex flex-col justify-start px-6 sm:px-10 md:px-14 py-8 md:py-0 overflow-y-auto relative min-h-[600px] md:min-h-0">
        <!-- Back -->
        <button
          class="absolute top-6 left-6 md:top-10 md:left-10 text-sm font-semibold flex items-center gap-1 cursor-pointer text-earth hover:text-forest transition-colors z-20"
          @click="step === 1 ? router.back() : step--"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back</span> 
        </button>
        <div class="mt-32 md:mt-36 lg:mt-40 flex flex-col items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2.5 mb-6">
            <span class="font-display font-bold text-charcoal text-lg sm:text-xl">Cungpruy</span>
          </NuxtLink>
          <p class="font-display text-2xl sm:text-3xl font-bold text-black text-center mb-8 sm:mb-12">
            Welcome to Cungpruy!
          </p>
          <!-- Buttons -->
          <div class="w-full space-y-3 mb-8">
            <NuxtLink
              to="/auth/login"
              class="w-full flex items-center justify-center bg-forest text-cream font-body font-semibold text-sm py-3.5 rounded-full hover:bg-forest-light transition-all duration-200 shadow-sm"
            >
              Masuk ke Akun
            </NuxtLink>
            <NuxtLink
              to="/auth/register"
              class="w-full flex items-center justify-center font-body font-semibold text-sm py-3.5 rounded-full border-2 border-forest text-forest hover:bg-forest hover:text-cream transition-all duration-200"
            >
              Buat Akun Baru
            </NuxtLink>
          </div>
          <!-- Divider -->
          <div class="w-full flex items-center gap-3 mb-6">
            <div class="flex-1 h-px border border-earth-20"></div>
            <span class="font-body text-xs text-earth-40 whitespace-nowrap">atau lanjut dengan</span>
            <div class="flex-1 h-px border border-earth-20"></div>
          </div>
          <!-- Social login -->
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            <button class="flex items-center justify-center gap-2 rounded-xl py-2.5 font-body border text-sm text-charcoal hover:bg-gray-50 transition-colors">
              <Google class="w-4 h-4"/>
              Google
            </button>
            <button class="flex items-center justify-center gap-2 rounded-xl py-2.5 font-body border text-sm text-charcoal hover:bg-gray-50 transition-colors">
              <Facebook class="w-4 h-4"/>
              Facebook
            </button>
          </div>
          <p class="font-body text-xs text-center text-earth-40 tracking-tighter leading-relaxed max-w-md">
            Dengan melanjutkan, kamu menyetujui
            <span class="text-forest underline cursor-pointer">Syarat Penggunaan</span> &amp;
            <span class="text-forest underline cursor-pointer">Kebijakan Privasi</span> kami.
          </p>
        </div>
      </div>
      <!-- Right side -->
      <div class="hidden md:block md:w-1/2 relative bg-forest overflow-hidden flex flex-col justify-between p-12">
        <!-- Content -->
        <div class="relative z-10">
          <h2 class="font-display text-3xl font-bold text-cream mb-3 leading-tight">
            Sayuran Segar,<br>
            <span style="color: #a3be8c;">Langsung ke Pintumu</span>
          </h2>
          <p class="font-body text-sm leading-relaxed mb-5 text-cream/80">
            Buat akun dan nikmati kemudahan belanja sayuran organik dari petani lokal terpercaya.
          </p>
          <ul class="space-y-2">
            <li v-for="(feat, index) in ['Lacak pesanan secara real-time', 'Riwayat belanja tersimpan', 'Notifikasi stok produk favorit', 'Checkout lebih cepat']" :key="index" class="flex items-center gap-2.5">
              <div class="rounded-full flex items-center justify-center flex-shrink-0">
                <CircleCheck class="w-5 h-5 text-sage"/>
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
@media (max-width: 768px) {
  .overflow-y-auto {
    max-height: 100vh;
    -webkit-overflow-scrolling: touch;
  }
  
  .shadow-2xl {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
  }
}

@media (min-width: 768px) {
  .md\:h-\[714px\] {
    height: 714px;
  }
}
</style>