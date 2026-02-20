<script setup lang="ts">
useSeoMeta({ title: 'Our Story — Verdura' })

const team = [
  { name: 'Elena Rossi', role: 'Founder & Head Buyer', emoji: '👩‍🌾', bio: 'Former organic farmer with 15 years of field experience. Elena personally visits every partner farm.' },
  { name: 'Marco Chen', role: 'Head of Logistics', emoji: '👨‍💼', bio: 'Cold-chain expert who built our same-day delivery infrastructure from the ground up.' },
  { name: 'Aisha Johnson', role: 'Farm Relations', emoji: '👩‍💻', bio: 'Builds lasting partnerships with small-scale farmers, ensuring fair trade at every step.' },
]

const farms = [
  { name: 'Sunrise Valley Farm', specialty: 'Tomatoes & Peppers', distance: '8 miles', since: '2018', emoji: '🍅' },
  { name: 'Green Acres Co-op', specialty: 'Leafy Greens', distance: '5 miles', since: '2019', emoji: '🥬' },
  { name: 'Heritage Fields', specialty: 'Root Vegetables', distance: '20 miles', since: '2017', emoji: '🥕' },
  { name: 'Fog Valley Mushrooms', specialty: 'Specialty Fungi', distance: '2 miles', since: '2021', emoji: '🍄' },
]
</script>

<template>
  <div>

    <!-- Hero -->
    <section class="bg-forest py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 70% 50%, #87A96B 0%, transparent 60%)"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span class="text-5xl block mb-4">🌱</span>
        <h1 class="font-display text-5xl md:text-6xl font-bold text-cream mb-6">
          We Believe Food<br/><em class="text-sage">Should Be Honest</em>
        </h1>
        <p class="font-body text-cream-70 text-xl leading-relaxed max-w-2xl mx-auto">
          Verdura was born from a simple frustration: why is fresh, truly local produce so hard to find? We set out to fix that.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-3">How It Started</p>
          <h2 class="section-title mb-6">From a Farmers Market<br/>Stall to Your Doorstep</h2>
          <div class="space-y-4 font-body text-earth leading-relaxed">
            <p>In 2017, Elena Rossi was selling her farm's produce at a local farmers market when she noticed something: most of her regular customers couldn't make it every Saturday. They'd come back the following week and tell her they'd settled for supermarket produce that tasted like nothing.</p>
            <p>She spent a year building relationships with neighboring farms, hiring Marco to design a cold-chain logistics system, and building a simple website. The first week, they delivered to 12 households. Within a year, it was 1,200.</p>
            <p>Today, Verdura works with over 50 farms within 30 miles. We're still small enough to care about every box we pack.</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=360&q=75" alt="Farm" class="rounded-2xl h-56 w-full object-cover" />
          <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=360&q=75" alt="Harvest" class="rounded-2xl h-56 w-full object-cover mt-8" />
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-cream-dark py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">What We Stand For</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="v in [
            { icon: '🤝', title: 'Fair to Farmers', desc: 'We pay 40% above market rate. Farmers who treat their land well deserve to be rewarded for it.' },
            { icon: '🌍', title: 'Planet First', desc: 'Compostable packaging, electric delivery vans, and a commitment to zero food waste across our supply chain.' },
            { icon: '🔍', title: 'Full Transparency', desc: 'Every product tells you exactly which farm it came from, who grew it, and how far it traveled.' },
          ]" :key="v.title" class="text-center p-8">
            <span class="text-4xl block mb-4">{{ v.icon }}</span>
            <h3 class="font-display text-xl font-semibold text-charcoal mb-3">{{ v.title }}</h3>
            <p class="font-body text-earth leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-2">The People</p>
        <h2 class="section-title">Meet the Team</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="member in team" :key="member.name" class="bg-white rounded-2xl p-8 border border-earth-10 shadow-sm">
          <span class="text-5xl block mb-4">{{ member.emoji }}</span>
          <h3 class="font-display text-xl font-semibold text-charcoal mb-1">{{ member.name }}</h3>
          <p class="font-body text-sage font-medium text-sm mb-3">{{ member.role }}</p>
          <p class="font-body text-earth-70 text-sm leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- Farm Partners -->
    <section class="py-16 bg-forest">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-2">Our Partners</p>
          <h2 class="font-display text-3xl font-bold text-cream">The Farms Behind Your Food</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="farm in farms" :key="farm.name" class="bg-white/10 rounded-2xl p-6 border border-white/10">
            <span class="text-3xl block mb-3">{{ farm.emoji }}</span>
            <h4 class="font-display font-semibold text-cream mb-1">{{ farm.name }}</h4>
            <p class="font-body text-sage text-sm mb-3">{{ farm.specialty }}</p>
            <div class="flex gap-4 font-body text-xs text-cream-50">
              <span>📍 {{ farm.distance }}</span>
              <span>Since {{ farm.since }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center max-w-2xl mx-auto px-4">
      <h2 class="section-title mb-4">Ready to Taste the Difference?</h2>
      <p class="font-body text-earth mb-8">Join 12,000+ households who've made the switch to genuinely fresh produce.</p>
      <NuxtLink to="/shop" class="btn-primary text-base px-10 py-4">
        Shop Fresh Produce
      </NuxtLink>
    </section>

  </div>
</template>