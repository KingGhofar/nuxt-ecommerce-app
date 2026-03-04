<script setup lang="ts">
import Map from '~/components/svg/Map.vue';
useSeoMeta({ title: 'Our Story — Cungpruy' })

const team = [
  { name: 'Fadhlan Ghifary', role: 'Founder & Head Buyer', bio: 'Mantan petani organik dengan 15 tahun pengalaman di lapangan. Elena secara pribadi mengunjungi setiap pertanian mitra.' },
  { name: 'Kayda', role: 'Head of Logistics', bio: 'Pakar rantai dingin yang membangun infrastruktur pengiriman di hari yang sama kami dari awal.' },
  { name: 'John', role: 'Farm Relations', bio: 'Membangun kemitraan jangka panjang dengan petani skala kecil, memastikan perdagangan yang adil di setiap tahapan.' },
]

const farms = [
  { name: 'Baturaden field', specialty: 'Tomatoes & Peppers', distance: '8 miles', since: '2024', },
  { name: 'Green House UMP', specialty: 'Leafy Greens', distance: '5 miles', since: '2019', },
  { name: 'Unsoed house', specialty: 'Root Vegetables', distance: '20 miles', since: '2017', },
  { name: 'Sedayu green', specialty: 'Specialty Fungi', distance: '2 miles', since: '2023', },
]
</script>

<template>
  <div>
    <section class="bg-forest py-24 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 70% 50%, #87A96B 0%, transparent 60%)"></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 class="font-display text-5xl md:text-6xl font-bold text-cream mb-6">
          We Believe Food<br/><em class="text-sage">Should Be Honest</em>
        </h1>
        <p class="font-body text-cream-70 text-xl leading-relaxed max-w-2xl mx-auto">
          Cungpruy was born out of a simple frustration: why is fresh, truly local produce so hard to find? We set out to solve that problem.
        </p>
      </div>
    </section>
    <!-- Story -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-3">Sejarah Perusahan Kami Berdiri</p>
          <h2 class="section-title mb-6">From a Farmers Market<br/>Stall to Your Doorstep</h2>
          <div class="space-y-4 font-body text-earth leading-relaxed">
            <p>Pada tahun 2017, Fadhlan Ghifary sedang menjual hasil pertaniannya di pasar petani setempat ketika ia menyadari sesuatu: sebagian besar pelanggan tetapnya tidak dapat datang setiap hari Sabtu. Mereka akan kembali minggu berikutnya dan mengatakan kepadanya bahwa mereka telah membeli produk supermarket yang rasanya hambar.</p>
            <p>Dia menghabiskan satu tahun membangun hubungan dengan pertanian tetangga, mempekerjakan Kacungnya untuk merancang sistem logistik rantai dingin, dan membangun situs web sederhana. Pada minggu pertama, mereka mengirimkan ke 12 rumah tangga. Dalam setahun, jumlahnya meningkat menjadi 1.200.</p>
            <p>Saat ini, Cungpruy bekerja sama dengan lebih dari 50 pertanian dalam radius 30 KM.</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img loading="lazy" decoding="async" src="https://i.pinimg.com/736x/5b/8d/b1/5b8db1ec953fbcfb03ae03131ff8202a.jpg" alt="Farm" class="rounded-2xl h-56 w-full object-cover" />
          <img loading="lazy" decoding="async" src="https://i.pinimg.com/736x/eb/33/f6/eb33f67e26bad7835c0dc18895ca1853.jpg" alt="Harvest" class="rounded-2xl h-56 w-full object-cover mt-8" />
        </div>
      </div>
    </section>
    <!-- Values -->
    <section class="bg-cream-dark py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Apa yang kami perjuangkan</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="v in [
            { title: 'Adil bagi petani', desc: 'Kami membayar 40% di atas harga pasar. Petani yang merawat lahannya dengan baik pantas mendapatkan imbalannya.' },
            { title: 'Menyelamatkan Bumi', desc: 'Kemasan yang dapat dikomposkan, mobil pengiriman listrik, dan komitmen untuk nol limbah makanan di seluruh rantai pasokan kami.' },
            { title: 'Transparansi', desc: 'Setiap produk memberi tahu Anda secara tepat dari pertanian mana produk itu berasal, siapa yang menanamnya, dan seberapa segar kualitas yang tersedia.' },
          ]" :key="v.title" class="text-center p-8">
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
        <h2 class="section-title">This is our team</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="member in team" :key="member.name" class="bg-white rounded-2xl p-8 border border-earth-10 shadow-sm">
          <h3 class="font-display text-xl font-semibold text-charcoal mb-1">{{ member.name }}</h3>
          <p class="font-body text-sage font-medium text-sm mb-3">{{ member.role }}</p>
          <p class="font-body text-earth-70 text-sm leading-relaxed">{{ member.bio }}</p>
        </div>
      </div>
    </section>
    <section class="py-16 bg-forest">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="font-body text-sm font-medium text-sage uppercase tracking-widest mb-2">Our Partners</p>
          <h2 class="font-display text-3xl font-bold text-cream">The Farms Behind Your Food</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="farm in farms" :key="farm.name" class="bg-white/10 rounded-2xl p-6 border border-white/10">
            <h4 class="font-display font-semibold text-cream mb-1">{{ farm.name }}</h4>
            <p class="font-body text-gray-200 text-sm mb-3">{{ farm.specialty }}</p>
            <div class="flex gap-4 font-body text-xs text-cream-50">
              <span class="flex items-center gap-1"><Map :size="12" color="currentColor" /> {{ farm.distance }}</span>
              <span class="flex items-center">Since {{ farm.since }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-20 text-center max-w-2xl mx-auto px-4">
      <h2 class="section-title mb-4">Ready to Taste the Difference?</h2>
      <p class="font-body text-earth mb-8">Join 1,000+ households who've made the switch to genuinely fresh produce.</p>
      <NuxtLink to="/shop" class="btn-primary text-base px-10 py-4">
        Shop Fresh Produce
      </NuxtLink>
    </section>
  </div>
</template>