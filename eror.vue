<script setup lang="ts">
defineProps<{ error: { statusCode: number; message: string } }>()
</script>

<template>
  <div class="min-h-screen bg-cream flex items-center justify-center px-4">
    <div class="text-center max-w-md">
      <span class="text-7xl block mb-6">🥬</span>
      <h1 class="font-display text-5xl font-bold text-forest mb-4">Oops!</h1>
      <p class="font-body text-earth text-lg mb-2">This page wandered off to the compost heap.</p>
      <p class="font-body text-earth-50 text-sm mb-8">404 — Page not found</p>
      <NuxtLink to="/" class="btn-primary">
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>