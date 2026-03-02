<script setup lang="ts">
import Recycle from '../components/svg/Recycle.vue';
import TruckDelivery from '../components/svg/TruckDelivery.vue';
import HomeBolt from '../components/svg/HomeBolt.vue';
import Package from '../components/svg/Package.vue';
import Schedule from '../components/svg/Schedule.vue';
import ChevronDown from '../components/svg/ChevronDown.vue';
useSeoMeta({ title: 'Delivery Info — Cungpruy' })
</script>

<template>
  <div>
    <section class="bg-cream-dark py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TruckDelivery class="w-12 h-12 mx-auto mb-4" />
        <h1 class="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">Delivery, <em>Simplified</em></h1>
        <p class="font-body text-earth text-lg max-w-xl mx-auto">We handle everything from harvest to your front door. Here's how it works.</p>
      </div>
    </section>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div>
        <h2 class="section-title mb-8">How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div v-for="(step, i) in [
            { title: 'You Order', desc: 'Place your order by 10am for same-day dispatch.' },
            { title: 'We Harvest', desc: 'Our farm partners pick your order fresh at dawn.' },
            { title: 'Cold Packed', desc: 'Everything is packed in insulated, compostable boxes.' },
            { title: 'Delivered', desc: 'Arrives at your door within hours, still garden-fresh.' },
          ]" :key="step.title" class="relative">
            <div v-if="i < 3" class="absolute top-6 right-0 hidden md:block w-full h-px bg-earth-15 z-0 translate-x-1/2"></div>
            <div class="relative z-10 text-center bg-white rounded-2xl p-6 border border-earth-10 shadow-sm">
              <div class="w-12 h-12 bg-forest text-cream rounded-full flex items-center justify-center font-display font-bold text-lg mx-auto mb-3">
                {{ i + 1 }}
              </div>
              <h4 class="font-aeonik font-semibold text-charcoal mb-2">{{ step.title }}</h4>
              <p class="font-body text-earth text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Delivery Options -->
      <div class="bg-white rounded-2xl p-8 border border-earth-10 shadow-sm">
        <h2 class="section-title mb-6">Delivery Options</h2>
        <div class="space-y-4">
          <!-- Standard Delivery -->
          <div class="flex items-start gap-4 p-5 bg-cream rounded-xl border border-earth-8">
            <div class="mt-0.5 flex-shrink-0 text-forest">
              <Package :size="26" color="currentColor" />
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-body font-semibold text-charcoal">Standard Delivery</h4>
                  <p class="font-body text-earth text-sm mt-0.5">Next day, 9am–6pm</p>
                </div>
                <div class="text-right">
                  <span class="font-display font-bold text-forest">$4.99</span>
                  <p class="font-body text-xs text-leaf">Free over $50</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Express Delivery -->
          <div class="flex items-start gap-4 p-5 bg-cream rounded-xl border border-earth-8">
            <div class="mt-0.5 flex-shrink-0 text-forest">
              <HomeBolt :size="26" color="currentColor" />
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-body font-semibold text-charcoal">Express Delivery</h4>
                  <p class="font-body text-earth text-sm mt-0.5">Same day, 2pm–7pm (order by 10am)</p>
                </div>
                <div class="text-right">
                  <span class="font-display font-bold text-forest">$9.99</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Scheduled Delivery -->
          <div class="flex items-start gap-4 p-5 bg-cream rounded-xl border border-earth-8">
            <div class="mt-0.5 flex-shrink-0 text-forest">
              <Schedule :size="26" color="currentColor" />
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h4 class="font-body font-semibold text-charcoal">Scheduled Delivery</h4>
                  <p class="font-body text-earth text-sm mt-0.5">Choose a 2-hour window up to 7 days ahead</p>
                </div>
                <div class="text-right">
                  <span class="font-display font-bold text-forest">$6.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Packaging -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-leaf-10 rounded-2xl p-8">
          <Recycle class="w-10 h-10 mb-4" />
          <h3 class="font-display text-2xl font-bold text-charcoal mb-4">Eco Packaging</h3>
          <p class="font-body text-earth leading-relaxed mb-4">All our boxes are made from 100% recycled cardboard and are fully compostable. Our ice packs use biodegradable gel. Even our stickers are compostable.</p>
          <p class="font-body text-sm text-forest font-medium">We're certified carbon neutral for all deliveries.</p>
        </div>
        <div class="bg-cream-dark rounded-2xl p-8">
          <TruckDelivery class="w-10 h-10 mb-4" />
          <h3 class="font-display text-2xl font-bold text-charcoal mb-4">Delivery Areas</h3>
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
              <ChevronDown class="w-5 h-5 text-earth group-open:rotate-180 transition-transform"/>
            </summary>
            <div class="px-5 pb-5">
              <p class="font-body text-earth leading-relaxed">{{ faq.a }}</p>
            </div>
          </details>
        </div>
      </div>
      <div class="text-center py-8">
        <NuxtLink to="/shop" class="btn-primary text-base px-10 py-4">Start Shopping</NuxtLink>
      </div>

    </div>
  </div>
</template>