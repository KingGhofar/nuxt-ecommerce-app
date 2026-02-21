<script setup lang="ts">
useSeoMeta({ title: 'Delivery Info — Cungpruy' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-cream-dark py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-5xl block mb-4">🚚</span>
        <h1 class="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Delivery, <em>Simplified</em></h1>
        <p class="font-body text-earth text-lg max-w-xl mx-auto">We handle everything from harvest to your front door. Here's how it works.</p>
      </div>
    </section>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

      <!-- How It Works -->
      <div>
        <h2 class="section-title mb-8">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(step, i) in [
            { icon: '🛒', title: 'You Order', desc: 'Place your order by 10am for same-day dispatch.' },
            { icon: '🌅', title: 'We Harvest', desc: 'Our farm partners pick your order fresh at dawn.' },
            { icon: '❄️', title: 'Cold Packed', desc: 'Everything is packed in insulated, compostable boxes.' },
            { icon: '🏡', title: 'Delivered', desc: 'Arrives at your door within hours, still garden-fresh.' },
          ]" :key="step.title" class="relative">
            <div v-if="i < 3" class="absolute top-6 right-0 hidden md:block w-full h-px bg-earth-15 z-0 translate-x-1/2"></div>
            <div class="relative z-10 text-center bg-white rounded-2xl p-6 border border-earth-10 shadow-sm">
              <div class="w-12 h-12 bg-forest text-cream rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-3">
                {{ i + 1 }}
              </div>
              <span class="text-3xl block mb-2">{{ step.icon }}</span>
              <h4 class="font-display font-semibold text-charcoal mb-2">{{ step.title }}</h4>
              <p class="font-body text-earth text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Delivery Options -->
      <div class="bg-white rounded-2xl p-8 border border-earth-10 shadow-sm">
        <h2 class="section-title mb-6">Delivery Options</h2>
        <div class="space-y-4">
          <div v-for="opt in [
            { name: 'Standard Delivery', price: '$4.99', free: 'Free over $50', time: 'Next day, 9am–6pm', icon: '📦' },
            { name: 'Express Delivery', price: '$9.99', free: null, time: 'Same day, 2pm–7pm (order by 10am)', icon: '⚡' },
            { name: 'Scheduled Delivery', price: '$6.99', free: null, time: 'Choose a 2-hour window up to 7 days ahead', icon: '📅' },
          ]" :key="opt.name" class="flex items-start gap-4 p-5 bg-cream rounded-xl border border-earth-8">
            <span class="text-2xl mt-0.5">{{ opt.icon }}</span>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-body font-semibold text-charcoal">{{ opt.name }}</h4>
                  <p class="font-body text-earth text-sm mt-0.5">{{ opt.time }}</p>
                </div>
                <div class="text-right">
                  <span class="font-display font-bold text-forest">{{ opt.price }}</span>
                  <p v-if="opt.free" class="font-body text-xs text-leaf">{{ opt.free }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Packaging -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-leaf-10 rounded-2xl p-8">
          <h3 class="font-display text-2xl font-bold text-charcoal mb-4">♻️ Eco Packaging</h3>
          <p class="font-body text-earth leading-relaxed mb-4">All our boxes are made from 100% recycled cardboard and are fully compostable. Our ice packs use biodegradable gel. Even our stickers are compostable.</p>
          <p class="font-body text-sm text-forest font-medium">We're certified carbon neutral for all deliveries.</p>
        </div>
        <div class="bg-cream-dark rounded-2xl p-8">
          <h3 class="font-display text-2xl font-bold text-charcoal mb-4">📍 Delivery Areas</h3>
          <p class="font-body text-earth leading-relaxed mb-4">We currently deliver within a 30-mile radius of Portland, OR. We're expanding to Seattle in Spring 2025.</p>
          <p class="font-body text-sm text-earth">Enter your postcode at checkout to confirm coverage.</p>
        </div>
      </div>

      <!-- FAQ -->
      <div>
        <h2 class="section-title mb-8">FAQs</h2>
        <div class="space-y-4">
          <details v-for="faq in [
            { q: 'What if I\'m not home?', a: 'We\'ll leave your box in a safe place if instructed. Our insulated packaging keeps produce fresh for up to 4 hours.' },
            { q: 'Can I change my order?', a: 'Yes, up to 1 hour before cut-off time (10am for same-day). Use our order management page or contact support.' },
            { q: 'What if a product is out of stock?', a: 'We\'ll substitute with something similar of equal or greater value, or remove it and refund you automatically.' },
            { q: 'Do you offer subscriptions?', a: 'We\'re launching weekly box subscriptions in Q2 2025. Sign up for our newsletter to be first to know.' },
          ]" :key="faq.q" class="bg-white rounded-xl border border-earth-10 overflow-hidden group">
            <summary class="flex items-center justify-between p-5 cursor-pointer font-body font-medium text-charcoal hover:text-forest transition-colors list-none">
              {{ faq.q }}
              <svg class="w-5 h-5 text-earth group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-5 pb-5">
              <p class="font-body text-earth leading-relaxed">{{ faq.a }}</p>
            </div>
          </details>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center py-8">
        <NuxtLink to="/shop" class="btn-primary text-base px-10 py-4">Start Shopping</NuxtLink>
      </div>

    </div>
  </div>
</template>