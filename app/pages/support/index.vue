<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'
import ArrowLeft from '~/components/svg/ArrowLeft.vue'
import Close from '~/components/svg/Close.vue'

useSeoMeta({ title: 'Support Chat — Cungpruy', robots: 'noindex' })

const chatId = 'CGP-' + Math.random().toString(36).substr(2, 8).toUpperCase()
const chatOpen = ref(true)
const detailsOpen = ref(false)
const isTyping = ref(false)
const showBanner = ref(true)
const router = useRouter()
const step = ref<number>(1)

interface Message {
  id: number
  from: 'customer' | 'seller'
  text: string
  time: string
}

function now() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
}

const messages = ref<Message[]>([
  {
    id: 1,
    from: 'seller',
    text: 'Halo! Selamat datang di Cungpruy Support Ada yang ingin kamu tanyakan tentang produk kami?',
    time: now(),
  },
])

const inputText = ref('')
const chatEl = ref<HTMLDivElement | null>(null)
let nextId = 2

// Quick reply
const quickReplies = [
  { label: 'Cek stok Broccoli', text: 'Halo, apakah stok Broccoli organik masih tersedia?' },
  { label: 'Cek stok Tomat', text: 'Apakah Heirloom Tomatoes masih ada stok hari ini?' },
  { label: 'Cek stok Wortel', text: 'Apakah Rainbow Carrots masih tersedia untuk dipesan?' },
  { label: 'Stok lainnya', text: 'Produk apa saja yang masih tersedia hari ini?' },
]

// Auto-reply
function getSellerReply(text: string): string {
  const lower = text.toLowerCase()

  if (lower.includes('brocoli') || lower.includes('broccoli') || lower.includes('brokoli')) {
    return 'Stok Broccoli Organik kami masih tersedia! Saat ini ada sekitar 50 head tersisa. Harga Rp 3.49/head. Mau langsung ditambahkan ke keranjang?'
  }
  if (lower.includes('tomat') || lower.includes('tomato') || lower.includes('heirloom')) {
    return 'Heirloom Tomatoes kami sangat segar hari ini! Dipanen tadi pagi dari Sunrise Valley Farm. Stok masih banyak, harga Rp 5.99/lb. Silakan langsung order ya!'
  }
  if (lower.includes('wortel') || lower.includes('carrot')) {
    return 'Rainbow Carrots masih tersedia! Ada pilihan warna ungu, kuning, dan oranye. Stok terbatas hari ini, segera pesan sebelum habis ya.'
  }
  if (lower.includes('bayam') || lower.includes('spinach')) {
    return 'Baby Spinach kami selalu fresh cut setiap pagi! Stok tersedia, harga Rp 3.99 per 5oz bag. Sudah dicuci bersih dan siap konsumsi.'
  }
  if (lower.includes('bawang') || lower.includes('garlic') || lower.includes('onion')) {
    return 'Fresh Garlic dan Red Onion kami masih tersedia. Ditanam tanpa pestisida dari Aromas Family Farm. Mau pesan berapa?'
  }
  if (lower.includes('jamur') || lower.includes('mushroom')) {
    return 'Portobello Mushrooms masih ada stok hari ini! Dipanen segar dari Fog Valley Mushrooms yang jaraknya hanya 2 mil dari gudang kami.'
  }
  if (lower.includes('jagung') || lower.includes('corn')) {
    return 'Sweet Corn sedang musimnya! Stok sangat segar hari ini, dipetik pagi tadi. Harga Rp 0.99/ear. Sangat direkomendasikan!'
  }
  if (lower.includes('semua') || lower.includes('apa saja') || lower.includes('list') || lower.includes('tersedia')) {
    return 'Berikut produk yang tersedia hari ini :\n\n Broccoli Organik — Tersedia\n Heirloom Tomatoes — Tersedia\n Baby Spinach — Tersedia\n Rainbow Carrots — Stok Terbatas\n Sweet Corn — Tersedia\n Portobello Mushrooms — Tersedia\n Fresh Garlic — Tersedia\n Red Onions — Habis \n\nMau pesan yang mana?'
  }
  if (lower.includes('habis') || lower.includes('kosong') || lower.includes('out of stock')) {
    return 'Saat ini hanya Red Onions yang sedang kehabisan stok. Semua produk lainnya masih tersedia dengan kondisi segar! Mau lihat daftar lengkapnya?'
  }
  if (lower.includes('harga') || lower.includes('price') || lower.includes('berapa')) {
    return 'Untuk info harga terlengkap, kamu bisa cek langsung di halaman Shop kami ya! Semua harga sudah tertera di sana. Ada produk spesifik yang ingin kamu tanyakan harganya?'
  }
  if (lower.includes('pengiriman') || lower.includes('delivery') || lower.includes('kirim')) {
    return 'Pengiriman kami tersedia setiap hari! Standard delivery (besok, 9am-6pm) dan Express delivery (hari ini, 2pm-7pm jika order sebelum jam 10 pagi). Gratis ongkir untuk order di atas $50!'
  }
  if (lower.includes('terima kasih') || lower.includes('makasih') || lower.includes('thanks')) {
    return 'Sama-sama! Senang bisa membantu Jangan ragu untuk tanya lagi ya. Selamat berbelanja di Cungpruy!'
  }

  // Default reply
  return 'Terima kasih sudah menghubungi kami! Untuk mengecek ketersediaan produk, bisa sebutkan nama sayuran yang ingin kamu tanyakan? Kami akan segera cek stok terkini untuk kamu.'
}

function scrollToBottom() {
  nextTick(() => {
    if (chatEl.value) chatEl.value.scrollTop = chatEl.value.scrollHeight
  })
}

function sendMessage(customText?: string) {
  const text = (customText ?? inputText.value).trim()
  if (!text) return

  messages.value.push({ id: nextId++, from: 'customer', text, time: now() })
  inputText.value = ''
  scrollToBottom()

  // Show typing indicator
  isTyping.value = true
  scrollToBottom()

  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ id: nextId++, from: 'seller', text: getSellerReply(text), time: now() })
    scrollToBottom()
  }, 1200)
}

function useQuickReply(text: string) {
  sendMessage(text)
}

function handleEnter(e: KeyboardEvent) {
  if (!e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

function closeChat() {
  if (confirm('Tutup chat ini? Chat tidak bisa dilanjutkan setelah ditutup.')) {
    chatOpen.value = false
  }
}

onMounted(scrollToBottom)
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <div v-if="!chatOpen" class="rounded-2xl p-12 text-center">
        <h2 class="font-display text-2xl font-bold text-charcoal mb-2">Chat Ditutup</h2>
        <p class="font-body text-earth mb-6">Terima kasih telah menghubungi Admin.</p>
        <NuxtLink to="/" class="btn-primary">Kembali ke Beranda</NuxtLink>
      </div>
      <div v-else class="space-y-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <button
              class="flex items-center gap-2 text-black transition-colors"
              @click="step === 1 ? router.back() : step--"
            >
              <ArrowLeft class="w-5 h-5" />
              <span class="text-lg font-semibold text-strong-800">Back</span> 
            </button>
          </div>
          <button
            @click="closeChat"
            class="flex items-center gap-1.5 text-red-500 hover:text-red-600 font-body text-sm font-medium border border-red-200 hover:border-red-300 px-3 py-1.5 rounded-full transition-all"
          >
            <Close class="w-4 h-4" />
            Close
          </button>
        </div>
        <div v-if="detailsOpen" class="px-6 pb-5 border-t border-earth-10">
        <div class="grid grid-cols-2 gap-4 pt-4">
            <div>
            <p class="font-body text-xs text-earth-50 uppercase tracking-wider mb-1">Status</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-medium text-leaf bg-leaf-10 px-2.5 py-1 rounded-full font-body">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf"></span>
                Open
            </span>
            </div>
            <div>
            <p class="font-body text-xs text-earth-50 uppercase tracking-wider mb-1">Dibuat</p>
            <p class="font-body text-sm text-charcoal">{{ new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}</p>
            </div>
            <div>
            <p class="font-body text-xs text-earth-50 uppercase tracking-wider mb-1">Kategori</p>
            <p class="font-body text-sm text-charcoal">Ketersediaan Produk</p>
            </div>
        </div>
        </div>
        <div class="bg-white rounded-xl border border-earth-10 shadow-sm overflow-hidden">
          <div class="flex items-center gap-3 px-5 py-3.5 border-b border-earth-10">
            <div class="w-8 h-8 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
              <span class="text-cream text-xs font-bold font-body">CP</span>
            </div>
            <div>
              <p class="font-body font-semibold text-charcoal text-sm">Cungpruy Support</p>
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-leaf"></span>
                <p class="font-body text-xs text-earth-50">Online · Balas dalam hitungan menit</p>
              </div>
            </div>
          </div>
          <div v-if="showBanner" class="mx-4 mt-4 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-start justify-between gap-3">
            <div>
              <p class="font-body font-semibold text-amber-800 text-sm">Kami siap membantu kamu!</p>
              <p class="font-body text-amber-700 text-xs mt-0.5 leading-relaxed">Tanyakan ketersediaan produk sayuran kami. Tim kami akan segera merespons.</p>
            </div>
            <button
              @click="showBanner = false"
              class="flex-shrink-0 text-gray mt-0.5"
              aria-label="Tutup banner"
            >
              <Close class="w-4 h-4" />
            </button>
          </div>
          <div class="px-4 pt-2 flex flex-wrap gap-2">
            <button
              v-for="qr in quickReplies"
              :key="qr.label"
              @click="useQuickReply(qr.text)"
              class="font-body text-xs font-medium text-forest border border-forest-20 bg-forest-5 hover:bg-forest hover:text-cream px-3 py-1.5 rounded-full transition-all duration-150"
            >
              {{ qr.label }}
            </button>
          </div>
          <div
            ref="chatEl"
            class="px-4 py-4 space-y-4 overflow-y-auto"
            style="height: 320px;"
          >
            <div
              v-for="msg in messages"
              :key="msg.id"
              class="flex"
              :class="msg.from === 'customer' ? 'justify-end' : 'justify-start'"
            >
              <div class="max-w-[78%] space-y-1">
                <div
                  class="px-4 py-2.5 rounded-2xl font-body text-sm leading-relaxed whitespace-pre-line"
                  :class="msg.from === 'customer'
                    ? 'bg-forest text-cream rounded-tr-sm'
                    : 'bg-gray-100 text-charcoal rounded-tl-sm'"
                >
                  {{ msg.text }}
                </div>
                <p
                  class="font-body text-xs text-earth-40 px-1"
                  :class="msg.from === 'customer' ? 'text-right' : 'text-left'"
                >
                  {{ msg.time }}
                </p>
              </div>
            </div>
            <div v-if="isTyping" class="flex justify-start">
              <div class="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1 items-center">
                <span class="w-1.5 h-1.5 bg-earth-40 rounded-full animate-bounce" style="animation-delay:0ms"></span>
                <span class="w-1.5 h-1.5 bg-earth-40 rounded-full animate-bounce" style="animation-delay:150ms"></span>
                <span class="w-1.5 h-1.5 bg-earth-40 rounded-full animate-bounce" style="animation-delay:300ms"></span>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 flex items-end gap-3 border-t border-earth-10">
            <textarea
              v-model="inputText"
              @keydown.enter="handleEnter"
              placeholder="Tanya ketersediaan produk..."
              rows="1"
              :disabled="isTyping"
              class="flex-1 resize-none font-body text-sm text-charcoal bg-gray-50 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-forest transition-all placeholder-earth-40 disabled:opacity-50"
              style="max-height: 100px; border: 1px solid rgba(139,94,60,0.15);"
            ></textarea>
            <button
              @click="sendMessage()"
              :disabled="!inputText.trim() || isTyping"
              class="px-5 py-2.5 bg-forest text-cream font-body font-medium text-sm rounded-full hover:bg-forest-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>