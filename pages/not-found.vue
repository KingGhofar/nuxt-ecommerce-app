<script setup lang="ts">
useSeoMeta({
  title: '404 — Verdura',
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-[80vh] bg-cream flex items-center justify-center px-4">
    <div class="text-center max-w-md">
      <h1 class="font-display text-5xl font-bold text-forest mb-4">Oops!</h1>
      <p class="font-body text-earth-50 text-2xl mb-6">404 — Page not found</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <NuxtLink to="/" class="btn-primary">
          Back to Home
        </NuxtLink>
        <NuxtLink to="/shop" class="btn-outline">
          Browse Shop
        </NuxtLink>
      </div>
    </div>
  </div>
</template>