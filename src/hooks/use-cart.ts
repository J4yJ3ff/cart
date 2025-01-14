import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

export type CartItem = {
  item: {
    id: number
    name: string
    price: number
  }
}

type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (item: CartItem) => void
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.item.id === item.item.id
          )
          if (existingItem) return state
          return { items: [...state.items, item] }
        }),
      removeItem: (item) =>
        set((state) => ({
          items: state.items.filter((i) => i.item.id !== item.item.id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)