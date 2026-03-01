import { defineStore } from 'pinia'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    isOpen: false,
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, i) => sum + i.quantity, 0),
    subtotal:   (state) => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    total(): number {
      return this.subtotal + (this.subtotal >= 50 ? 0 : 4.99)
    },
  },
  actions: {
    addItem(p: Omit<CartItem, 'quantity'>) {
      const found = this.items.find(i => i.id === p.id)
      found ? found.quantity++ : this.items.push({ ...p, quantity: 1 })
      this.isOpen = true
    },
    removeItem(id: number) {
      this.items = this.items.filter(i => i.id !== id)
    },
    updateQty(id: number, delta: number) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      item.quantity += delta
      if (item.quantity <= 0) this.removeItem(id)
    },
    clearCart()   { this.items = [] },
    toggleCart()  { this.isOpen = !this.isOpen },
    closeCart()   { this.isOpen = false },
  },
})